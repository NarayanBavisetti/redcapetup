const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send(`hello world from the server`);
});

router.post("/register", (req, res) => {

  res.json({ message: req.body });
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill the feild property" });
  }
  User.findOne({ email: email })
    .then((res) => {
      if (res) {
        return res.status(422).json({ error: "Email already exists" });
      }
      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          req.status(201).json({ message: "user registered" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to register" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
