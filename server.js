const categoryRoutes = require("./models/routes/categoryRoutes");
const userRoutes = require("./models/routes/userRoutes");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const listingRoutes = require("./models/routes/listingRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/categories", categoryRoutes);
app.get("/", (req, res) => {
  res.send("BabbaFly Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});