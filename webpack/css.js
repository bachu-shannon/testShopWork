const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
return {
module: {
rules: [
{
test: /\.css$/,
use: ExtractTextPlugin.extract({
fallback: 'style-loader',
use: [
{
loader: 'css-loader',
options: {
importLoaders: 1,
sourceMap: true
}
},
]
})
},
{
test: /\.(png|svg|jpg|gif)$/,
use: [
'file-loader'
]
},
{
test: /\.(woff|woff2|eot|ttf|otf)$/,
use: [
'file-loader'
]
}
],
},
plugins: [
new ExtractTextPlugin('styles.[hash].css'),
],
};
};