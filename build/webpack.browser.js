const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const clientConfig = {
    target: "web",
    mode: "production",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.client.js",
        libraryTarget: 'umd',
        library: 'Bigneon',
        umdNamedDefine: true
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.tsx?$/, loaders: ["babel-loader", "ts-loader"]}
        ]
    }
};

module.exports = clientConfig;
