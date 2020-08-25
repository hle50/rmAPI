const expess = require("express");
const router = expess.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @rout    GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @rout    POST api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", [auth, [
  check('name', 'Name is requried').not().isEmpty(),

]], async (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ errors: erros.array() })
  }
  const { name, phone, type, email } = req.body;

  try {
    const newContact = new Contact({
      email,
      phone,
      type,
      name,
      user: req.user.id,
    });
    const contact = await newContact.save();
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
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
