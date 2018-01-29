const path = require('path');
module.exports = function() {
	return {
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000
        }
	}
};