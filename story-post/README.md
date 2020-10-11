# react-practice
To recognize css by your module bundler webpack,
1) npm install --save-dev style-loader css-loader
2) Add this rule 
{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
}
in webpack.config.js
