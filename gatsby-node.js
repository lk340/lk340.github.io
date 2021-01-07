const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
		module: {
			rules: [
				{
					test: /\.(csv|tsv)$/i,
					use: ["csv-loader"],
				},
			],
		},
	});
};
