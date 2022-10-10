import Sequelize from 'sequelize';
import db from '../database/config.js';

export default db.define('student', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  first_grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  second_grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
