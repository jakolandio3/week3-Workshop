const fs = require('fs');
module.exports = {
	routeFunc: (app) =>
		app.post('/login', function (req, res) {
			if (!req.body) {
				return res.sendStatus(400);
			}
			const customer = {};
			customer.email = req.body.email;
			customer.upwd = req.body.upwd;
			console.log('customer: ', customer);

			fs.readFile('./data/userList.json', 'utf-8', function (err, data) {
				if (err) throw err;
				let users = JSON.parse(data);
				console.log(users);
				for (let i = 0; i < users.length; i++) {
					if (
						customer.email === users[i].email &&
						customer.upwd === users[i].pwd
					) {
						console.log('there is a true');
						res.json({ valid: 'true' });
					} else {
						res.json({ valid: 'false' });
					}
					return;
				}
			});
		}),
};
