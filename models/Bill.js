const Sequelize = require('sequelize');

const db = require('../config/database');

const Bill  = db.define('pending_bill', {
    item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pending_bill: {
        type: Sequelize.STRING
    }
})

module.exports = Bill;