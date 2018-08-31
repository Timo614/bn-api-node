
const globals = {
    env: { ...process.env },
    userData: {
        superadmin: {
            first_name: 'System',
            last_name: 'Administrator',
            email: process.env.SUPERUSER_EMAIL,
            phone: process.env.SUPERUSER_MOBILE,
            password: process.env.SUPERUSER_PASSWORD,
        }
    },
    admin: null,
    organizations: [],
    venues: []
};


module.exports = globals;