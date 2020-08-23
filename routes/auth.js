const expess = require("express");
const router = expess.Router();

// @rout    GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("logged in a user");
});

// @rout    POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post("/", (req, res) => {
  res.send("logged  in a user");
});

module.exports = router;
