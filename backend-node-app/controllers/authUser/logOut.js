function logOut(req, res) {
  res.send({ auth: false, token: null })
};

module.exports = logOut;