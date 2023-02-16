import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const fileloader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      { loader: 'file-loader', },
    ],
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: [ '@svgr/webpack' ],
  };

  const styleLoader = buildCssLoader(isDev);

  const styleCssLoader = {
    test: /\.css$/i,
    loader: 'css-loader',
    options: { modules: true, },
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [ '@babel/preset-env' ],
        'plugins': [
          [
            'i18next-extract', {
              locales: [ 'ru', 'en' ],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [ isDev && ReactRefreshTypeScript() ].filter(Boolean), }),
          transpileOnly: isDev,
        },
      },
    ],
    exclude: /node_modules/,
  };

  return [ babelLoader,
    typescriptLoader,
    styleLoader,
    styleCssLoader,
    svgrLoader,
    fileloader ];
}
