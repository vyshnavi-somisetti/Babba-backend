const listingSchema = require("../validation/listingValidation");
const Listing = require("../models/Listing");

// Create Listing
const createListing = async (req, res) => {
  try {
    const { error } = listingSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
    });
  }
    const { title, description, price,category,location } = req.body;

    const newListing = await Listing.create({
      title,
      description,
      price,
      category,
      location,
      user: "6a302dab9a204d6065b45aff",
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
    const filter = {};

    if (req.query.location) {
      filter.location = { $regex: req.query.location, $options: 'i' };
    }

    if (req.query.minPrice && req.query.maxPrice) {
      filter.price = {
        $gte: Number(req.query.minPrice),
        $lte: Number(req.query.maxPrice),
      };
    }

    let query = Listing.find(filter);

    if (req.query.sort === "latest") {
      query = query.sort({ createdAt: -1 });
    } else if (req.query.sort === "price_low") {
      query = query.sort({ price: 1 });
    } else if (req.query.sort === "price_high") {
      query = query.sort({ price: -1 });
    }

    const listings = await query;

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
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