const Listing = require("../models/Listing");

// Create Listing
const createListing = async (req, res) => {
  try {
    const { title, description, price,category } = req.body;

    const newListing = await Listing.create({
      title,
      description,
      price,
      category,
      user: req.user.id,
    });

    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Listings
const getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate(
      "user",
      "name email"
    );

    res.json(listings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Listing
const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Listing
const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    listing.title = req.body.title || listing.title;
    listing.description =
      req.body.description || listing.description;
    listing.price = req.body.price || listing.price;

    const updatedListing = await listing.save();

    res.json(updatedListing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Listing
const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    await listing.deleteOne();

    res.json({
      message: "Listing deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createListing,
  getListings,
  getListingById,
  updateListing,
  deleteListing,
};