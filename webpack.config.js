const path = require('path') //work with node paths
const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
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
      }
    ]
  }
}