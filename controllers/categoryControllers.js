const Category = require("../models/Category");
const Listing = require("../models/Listing");

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get listings by category
const getListingsByCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const listings = await Listing.find({ category: id });

    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getListingsByCategory,
};