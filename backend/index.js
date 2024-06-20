const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://hussainsakinah2611:Sana2014*@facultylist.k2xjxg3.mongodb.net/test";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then(users => res.json(users))
    .catch(err => {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


mongoose.connect("mongodb+srv://hussainsakinah2611:Sana2014*@facultylist.k2xjxg3.mongodb.net/test")
