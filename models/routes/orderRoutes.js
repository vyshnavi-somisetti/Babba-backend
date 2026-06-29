const express = require("express");

const router = express.Router();

const {
  createOrder,
  getUserOrders,
  getOrderById,
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/:userId", getUserOrders);
router.get("/details/:id", getOrderById);

module.exports = router;