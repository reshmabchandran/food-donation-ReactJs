
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJ1c2VySWQiOiI2MTkzM2FiMzEyOGFmYWI2MzE1OGU3ZWEiLCJ1c2VyUm9sZSI6MSwiaWF0IjoxNjM3MjM2MDQ4LCJleHAiOjE2MzcyMzk2NDh9.ohFEbK31huLZWl6kUoa9r-VJAOQNqXaqo8AqGWoXYrU";
    const token = req.headers.authorization.split(" ")[1];
    console.log("Token :  : : "+token)
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    req.userData = { username: decodedToken.username, userId: decodedToken.userId,userRole:decodedToken.userRole };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};