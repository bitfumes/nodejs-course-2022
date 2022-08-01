const auth = (req, res, next) => {
  res.status(401).json({ error: "Unauthorized" });
};

module.exports = auth;
