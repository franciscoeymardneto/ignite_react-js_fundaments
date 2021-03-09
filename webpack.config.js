const path = require("path") //work with node paths
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,"src","index.jsx"),
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

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
          loader: "babel-loader"
        }
      }
    ]
  }
}