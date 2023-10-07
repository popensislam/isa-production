import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import webpack from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const { isDev } = options;

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
  const babelLoader = buildBabelLoader(options);

  const styleCssLoader = {
    test: /\.css$/i,
    loader: 'css-loader',
    options: { modules: true, },
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
