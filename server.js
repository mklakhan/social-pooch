const mongoose = require("mongoose");
const apiRoutes = require("./routes/api-routes.js");
const express = require("express");
const path = require("path");
const cors = require("cors")
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialpooch",
{ useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
