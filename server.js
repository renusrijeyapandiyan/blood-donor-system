const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const Donor = require("./models/Donor");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/bloodDonorDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Register Donor
app.post("/register", async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.send("Registered Successfully");
  } catch (err) {
    res.send("Error Registering");
  }
});


// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const donor = await Donor.findOne({ email, password });

  if (donor) {
    res.json({ status: "success", donor });
  } else {
    res.json({ status: "fail" });
  }
});


// Get All Donors
app.get("/donors", async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

// Search Donors by Location
app.get("/donors/location/:location", async (req, res) => {
  try {
    const donors = await Donor.find({
      location: { $regex: req.params.location, $options: "i" }
    });
    res.json(donors);
  } catch (err) {
    res.send("Search Error");
  }
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
  console.log("Open in Browser: http://localhost:5000");
});
