const express = require("express");
const router = express.Router();
const { Suggestion } = require("../models");

router.get("/", async (req, res) => {
  const list = await Suggestion.findAll()
  res.json(list)
});

router.post("/", async (req, res) => {
  const post = req.body;

  await Suggestion.create(post);
  res.json(post);
});

module.exports = router;
