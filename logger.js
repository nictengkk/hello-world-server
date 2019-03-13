const logger = (req, res, next) => {
  console.log("This will log any incoming request");
  next();
};

module.exports = logger;
