module.exports = {
	route: (app, path) => {
		app.get('/account', function (req, res) {
			let filePath = path.resolve('./www/account.html');
			res.sendFile(filePath);
		});
	},
};
