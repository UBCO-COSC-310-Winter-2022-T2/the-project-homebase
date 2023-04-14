const mongoose = require('mongoose');

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

module.exports = mongoose.connection;