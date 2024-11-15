import { DataTypes } from 'sequelize';
import sequelize from '../config.mjs';

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync with database
sequelize.sync()
    .then(() => console.log('User table created'))
    .catch(err => console.log('Error: ' + err));

export default User;