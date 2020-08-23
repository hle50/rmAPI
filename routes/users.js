const expess = require("express");
const router = expess.Router();

// @rout    POST api/users
// @desc    Register a user
// @access  Public
router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;
