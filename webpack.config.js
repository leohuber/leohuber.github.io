import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin'; // Import CleanWebpackPlugin
import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonConfig = {
  entry: {
    html: {
      import: './index.html',
      filename: 'index.html',
      dependOn: 'jvs',
    },
    jvs: {
      import: './index.js',
      filename: 'index.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
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
    new CleanWebpackPlugin(), // Add CleanWebpackPlugin to plugins array
    new HtmlWebpackPlugin({
      template: './index.html', // Template HTML file
      filename: 'index.html', // Output HTML file name
    }),
    new SvgChunkWebpackPlugin({
      filename: 'sprites.svg',
      generateSpritesManifest: true,
			generateSpritesPreview: true
    }),
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