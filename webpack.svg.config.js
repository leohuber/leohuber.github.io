import path from 'path';
import { fileURLToPath } from 'url';
import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './svg/raw/index.js', // Entry point for the application
  devtool: false, // Disable source maps
  output: {
    clean: true, // Clean the output directory before building
    path: path.resolve(__dirname, 'svg/sprite'), // Output directory for production
  },
  module: {
    rules: [
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
    new SvgChunkWebpackPlugin(),
  ],
};