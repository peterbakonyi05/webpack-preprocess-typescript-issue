"use strict";
const path = require("path");

module.exports = {
	entry: path.join(__dirname, "src/index.ts"),
	output: {
		path: path.join(__dirname, "dist"),
		library: "AWESOME_APP",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: [
					"awesome-typescript-loader",
					{
						loader: "preprocess-loader",
						query: {
							ENABLE: false
						}
					}
				],
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: ["", ".ts", ".js"]
	},

	node: {
		global: "window",
		crypto: "empty",
		process: false,
		module: false,
		clearImmediate: false,
		setImmediate: false
	},

	devtool: false,
	debug: false
};