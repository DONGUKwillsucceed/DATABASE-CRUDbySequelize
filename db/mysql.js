
import sq from 'sequelize';
import { config } from '../config.js';


export const sequelize = new sq.Sequelize(config.db.name, config.db.username, config.db.password, {
    host:config.db.host,
    dialect: config.db.dialect
});


