import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonConfig = {
  entry: './index.js', // Entry point for the application
  devtool: false, // Disable source maps
  output: {
    filename: 'index.js', // Output main file name
    path: path.resolve(__dirname, 'dist'), // Output directory for production
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env'], // Use preset-env for Babel
          },
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: SvgChunkWebpackPlugin.loader
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Template HTML file
      filename: 'index.html', // Output HTML file name
    }),
    new SvgChunkWebpackPlugin(),
  ],
};

const developmentConfig = {
  mode: 'development'
};

const productionConfig = {
  mode: 'production'
};

export default (env) => {
  if (env.production) {
    return { ...commonConfig, ...productionConfig };
  }
  return { ...commonConfig, ...developmentConfig };
};