const express = require("express");
const router = express.Router();

// home
router.get("/", (req, res, next) => {
  res.render("home");
});

module.exports = router;
