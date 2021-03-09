const path = require('path') //work with node paths
const HtmlwebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname,'src','index.jsx'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    })
  ],
  devServer:{
    contentBase: path.resolve(__dirname,'public')
  },
  devtool:  isDevelopment ? 'eval-source-map' : 'source-map',
  module: {
    /**
     * Rules for read js files
     * 
     * babel-loader -> javascript
     */

    rules: [
      {
        test: /\.jsx$/, // Execute only that .js extensions
        exclude: /node_modules/, //Dont transpile node_modules .js files on babel
        use: {
          loader: 'babel-loader'
        }
      },
      {
       test: /\.css$/,
       exclude: /node_modules/,
       use:['style-loader', 'css-loader', 'sass-loader'] 
      }
    ]
  }
}