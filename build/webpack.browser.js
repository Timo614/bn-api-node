// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const clientConfig = {
	mode: "production",
	entry: {
		"bigneon": "./src/index.ts",
		"bundle": "./src/index.ts",
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].client.js",
		libraryTarget: "umd",
		library: "Bigneon",
		umdNamedDefine: true
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	// devtool: "cheap-source-map",
	optimization: {
		minimize: true
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": "\"production\""
		}),
		new MinifyPlugin({}, {
			test: /\.js($|\?)/i,
			comments: false
		})
	],
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: "awesome-typescript-loader",
			exclude: /node_modules/,
			query: {
				declaration: false,
			}
		}]
	}
};

module.exports = clientConfig;
