const express = require("express");
const router = express.Router();

const {
  getCategories,
  getListingsByCategory,
} = require("../controllers/categoryControllers");

router.get("/", getCategories);
router.get("/:id/listings", getListingsByCategory);

module.exports = router;