if (!process.env.SUPERUSER_EMAIL) {
    require('dotenv').config();
}
const Server = require('../../dist/classes/server').Server;
const globals = {
    env: {...process.env},
    userData: {
        superadmin: {
            first_name: 'System',
            last_name: 'Administrator',
            email: process.env.SUPERUSER_EMAIL,
            phone: process.env.SUPERUSER_MOBILE,
            password: process.env.SUPERUSER_PASSWORD,
        }
    },

    adminServer: null,
    publicServer: null,


    admin: null,
    organizations: {},
    venues: {},
    events: {},

    async getAdminServer(params) {
        if (!this.adminServer) {
            this.adminServer = new Server(this._serverParams(params));

            try {
                await this.adminServer.auth.create(this.userData.superadmin);
            } catch (e) {
                console.log(e);
            }

        }
        return this.adminServer;
    },
    getPublicServer(params) {
        if (!this.publicServer) {
            this.publicServer = new Server(this._serverParams(params));
        }
        return this.publicServer;
    },
    _serverParams(params) {
        return {
            ...{
                protocol: process.env.API_PROTOCOL || 'http',
                host: process.env.API_HOST || 'localhost',
                port: process.env.API_PORT || 9000
            },
            ...params
        }
    },

};


module.exports = globals;