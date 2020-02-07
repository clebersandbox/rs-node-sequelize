module.exports = {
    dialect: 'mysql',
    host: 'localhost', 
    username: 'root',
    password: 'root',
    database: 'demands',
    define: {
        timestamps: true, // created_At e updated_At
        underscored: true,
    }

};