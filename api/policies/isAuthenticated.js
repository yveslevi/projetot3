module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const stringfiedToken = atob(authorization.replace("Bearer ", ""));

    const token = JSON.parse(stringfiedToken);
    if (new Date() > new Date(token.expiration_date)) {
      return res.status(401).send();
    }
    const user = await Users.findOne({ id: token.session });
    if (user) {
      req.userId = token.session;
      return next();
    }
    res.status(401).send();
  } catch (error) {
    console.log(error);
    res.status(401).send();
  }
};
