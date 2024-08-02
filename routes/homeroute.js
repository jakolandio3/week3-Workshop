module.exports = {
	route: (app, path) => {
		app.get('/', function (req, res) {
			let filePath = path.resolve('./www/index.html');
			res.sendFile(filePath);
		});
	},
};
