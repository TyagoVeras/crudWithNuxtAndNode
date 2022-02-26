const pool = require('../_db.service');

module.exports.insertUser = async (user) => {
  const {
    name, email, password, isAdmin,
  } = user;
  const query = 'INSERT INTO users (name, email, password, isadmin) VALUES ( $1, $2, $3, $4) RETURNING id';
  const result = await pool.query(query, [name, email, password, isAdmin]);
  return result.rows[0];
};

module.exports.getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports.getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports.getAllUsers = async () => {
  const query = 'SELECT * FROM users';
  const result = await pool.query(query);
  return result.rows;
};

module.exports.updateUser = async (user) => {
  const {
    id, name, email, password, isAdmin,
  } = user;
  const query = 'UPDATE users SET name = $1, email = $2, password = $3, isadmin = $4 WHERE id = $5 RETURNING id';
  const result = await pool.query(query, [name, email, password, isAdmin, id]);
  return result.rows[0];
};

module.exports.deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};
