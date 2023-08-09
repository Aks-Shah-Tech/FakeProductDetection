const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "config/config.env",
  });
}

//using middlewares
app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "./client", "build")));

//using routes
app.use("/api/v1", require("./routes/verifyProduct.routes.js"));
app.use("/api/v1", require("./routes/product.routes.js"));
app.use("/api/v1", require("./routes/company.routes.js"));
app.use("/api/v1", require("./routes/retailer.routes.js"));
app.use("/api/v1/admin", require("./routes/admin.routes.js"));

// Serving the Build
app.get("/*", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "./client", "build", "index.html")
  );
});

module.exports = app;
