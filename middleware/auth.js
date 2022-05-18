const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    console.log(userId);
    console.log(req.body.userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
      console.log("Invalid user ID");
    } else {
      next();
    }
  } catch {
    console.log("Invalid request");
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};
