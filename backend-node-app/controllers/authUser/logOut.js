function logOut(req, res) {
  res.status(200).send({ auth: false, token: null })
};

module.exports = logOut;