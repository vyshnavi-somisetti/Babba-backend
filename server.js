const orderRoutes = require("./routes/orderRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const listingRoutes = require("./routes/listingRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
  res.send("BabbaFly Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});