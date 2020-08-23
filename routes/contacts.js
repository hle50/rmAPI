const expess = require("express");
const router = expess.Router();

// @rout    GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all user contacts");
});

// @rout    POST api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @rout    PUT api/contacts
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @rout    DELETE api/contacts
// @desc    Update contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
