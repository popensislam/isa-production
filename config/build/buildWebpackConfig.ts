import path from 'path'
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';

/* PLUGINS */
import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {paths, mode, isDev} = options

  return {
    mode: mode,
    entry: paths.entry, // Точка входа
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build, // Главный файл сборки приложения
      clean: true,
    },
    plugins: buildPlugin(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolves(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}