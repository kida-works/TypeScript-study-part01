const path = require('path');

// webpackの設定
module.exports = {
  // エントリーポイントの設定
  entry: {
    bundle: './src/index.ts'
  },
  // outputはwebpackでバンドリした（一つにまとめた）ファイルをどこに出力するかの設定
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // importやexportなどを使う時、拡張子がいるのかの設定
  resolve: {
    extensions: ['.ts', '.js']
  },
  // 開発用のサーバーの設定
  devServer: {
    // Webpack WebServerが参照するディレクトリの設定
    contentBase: path.join(__dirname, 'dist'),
    // WebServerを立ち上げた時に、自動的にブラウザも立ち上げてくれるようにする設定
    open: true,
  },
  // moduleに適応するルールを書いていく場所（ここではts-loaderの設定を書いていく）
  module: {
    rules: [
      {
        // ファイルの末尾が .ts で終わるファイルをts-loaderを使ってコンパイルしていくという設定
        loader: "ts-loader",
        test: /\.ts$/
      }
    ]
  }
}