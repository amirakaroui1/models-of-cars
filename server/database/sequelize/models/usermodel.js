const {connection}=require('../index.js')

module.exports = {
    createUser: function (user, callback) {
      const sql = `INSERT INTO users SET ?`;
      connection.query(sql, user, (err, result) => {
        callback(err, result);
      });
    },
    getUserByEmail: function (email, callback) {
      const sql = `SELECT * FROM users WHERE email = ?`;
      connection.query(sql, [email], (err, result) => {
        callback(err, result);
      });
    }
  };