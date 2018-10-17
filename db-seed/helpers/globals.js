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

	organizationsByName: false,
	venuesByName: false,
	eventsByName: false,
	artistsByName: false,


	async getOrganizations() {
		if (this.organizationsByName) {
			return this.organizationsByName;
		}
		this.organizationsByName = {};
		let adminServer = await this.getAdminServer();
		let result = await adminServer.organizations.index();
		result.data.data.forEach(item => {
			this.organizationsByName[item.name] = item.id;
		});
		return this.organizationsByName;
	},
	
	
	async getVenues() {
		if (this.venuesByName) {
			return this.venuesByName;
		}
		this.venuesByName = {};
		let adminServer = await this.getAdminServer();
		let result = await adminServer.venues.index();
		result.data.data.forEach(item => {
			this.venuesByName[item.name] = item.id;
		});
		return this.venuesByName;
	},

	async getEvents() {
		if (this.eventsByName) {
			return this.eventsByName;
		}
		this.eventsByName = {};
		let adminServer = await this.getAdminServer();
		let result = await adminServer.events.index();
		result.data.data.forEach(item => {
			this.eventsByName[item.name] = item.id;
		});
		return this.eventsByName;
	},

	async getArtists() {
		if (this.artistsByName) {
			return this.artistsByName;
		}
		this.artistsByName = {};
		let adminServer = await this.getAdminServer();
		let result = await adminServer.artists.index();
		result.data.data.forEach(item => {
			this.artistsByName[item.name] = item.id;
		});
		return this.artistsByName;
	},
	
	
	
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
			globals.adminServer =  this.getServer(params);
			try {
				await globals.adminServer.auth.create(globals.userData.superadmin);
			} catch (e) {
				console.error("Failed to login to adminServer");
				return false;
			}
		}
		return globals.adminServer;
	},
	getPublicServer(params) {
		if (!globals.publicServer) {
			globals.publicServer = this.getServer(params);
		}
		return globals.publicServer;
	},
	getServer(params) {
		return new Server(globals._serverParams(params));
	},
	_serverParams(params) {
		return {
			...{
				protocol: process.env.API_PROTOCOL || "http",
				host: process.env.API_HOST || "localhost",
				port: process.env.API_PORT || 9000,
				basePath: process.env.BASE_PATH || "",
			},
			...params
		}
	},

};


module.exports = globals;