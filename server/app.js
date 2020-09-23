const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/vars.env" });

// Passport config
require("./config/passport")(passport);

// Database connection
connectDB();

const app = express();

// Sessions
app.use(
  session({
    secret: "mern passport google login",
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes middleware
app.use("/api", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server run successfly in ${process.env.NODE_ENV} mode on PORT: ${PORT}`
  )
);
