const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require('webpack');

const clientConfig = {
	target: "web",
	mode: "production",
	devtool: "eval",
	entry: ["babel-polyfill","./src/index.ts"],
	output: {
		filename: "bundle.client.js",
		libraryTarget: "umd",
		library: "Bigneon",
		umdNamedDefine: true
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js"]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		// new BundleAnalyzerPlugin()
	],
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loaders: ["babel-loader", "ts-loader"] }
		]
	}
};

module.exports = clientConfig;
