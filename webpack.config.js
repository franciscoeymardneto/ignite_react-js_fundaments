const path = require("path") //trabalhar com caminhos node 
module.exports = {
  entry: path.resolve(__dirname,"src","index.jsx"),
  output: {
    path: path.resolve(__dirname,"public"),
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