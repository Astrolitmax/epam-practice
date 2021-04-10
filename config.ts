let pre = 'EPAM_';

export let Config = {
	project: {
		port: process.env[pre + 'PORT'] || 3000,
		name: 'EPAM Practice'
	},

	database: {
		host: process.env[pre + 'DATABASE_HOST'] || 'localhost',
		user: process.env[pre + 'DATABASE_USER'] || 'root',
		password: process.env[pre + 'DATABASE_PASSWORD'] || '',
		name: process.env[pre + 'DATABASE_NAME'] || 'epam_practice',
		port: 27017 || 3306
	}
}
