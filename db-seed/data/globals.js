if (!process.env.SUPERUSER_EMAIL) {
	require("dotenv").config();
}
const Server = require("../../dist/classes/server").Server;
const globals = {
	env: { ...process.env },
	userData: {
		superadmin: {
			first_name: "System",
			last_name: "Administrator",
			email: process.env.SUPERUSER_EMAIL,
			phone: process.env.SUPERUSER_MOBILE,
			password: process.env.SUPERUSER_PASSWORD,
		},
		adminData: false
	},

	adminServer: null,
	publicServer: null,


	admin: null,
	organizations: {},
	venues: {},
	events: {},


	async getAdminData(params) {
		if (!this.userData.adminData) {
			let adminServer = await globals.getAdminServer(params);
			try {
				let res = await adminServer.users.current();
				globals.userData.adminData = res.data;
			}catch(e) {
				console.log("Error fetching admin data", e);
			}
		}
		return this.userData.adminData;
	},

	async getAdminServer(params) {
		if (!globals.adminServer) {
			globals.adminServer = new Server(this._serverParams(params));
			try {
				await globals.adminServer.auth.create(globals.userData.superadmin);
			} catch (e) {
				console.error(e);
			}
		}
		return globals.adminServer;
	},
	getPublicServer(params) {
		if (!globals.publicServer) {
			globals.publicServer = new Server(globals._serverParams(params));
		}
		return globals.publicServer;
	},
	_serverParams(params) {
		return {
			...{
				protocol: process.env.API_PROTOCOL || "http",
				host: process.env.API_HOST || "localhost",
				port: process.env.API_PORT || 9000
			},
			...params
		}
	},

};


module.exports = globals;