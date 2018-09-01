import Sequelize from 'sequelize';

const sequelize = new Sequelize('test_graphql_db', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
	operatorsAliases: false
});

const db = {
	User: sequelize.import('./user.js')
};

// Object.keys(db).forEach((modelName) => {
// 	if ('associate' in db[modelName]) {
// 		db[modelName].associate(db);
// 	}
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
