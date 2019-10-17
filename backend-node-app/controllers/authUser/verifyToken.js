let jwt = require('jsonwebtoken');
const config = require('../private/config.js');

function checkToken(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers['authorization'];
      if (!token) {
        return res.status(500).send({
        auth: false, message: 'No token provided.'
        });
      }
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) {
        return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
        });
    }
    return next();
    res.status(200).send(decoded);
  });
}

module.exports = checkToken;