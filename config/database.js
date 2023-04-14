const mongoose = require('mongoose');

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL_LOCAL, { useNewUrlParser: true });

module.exports = mongoose.connection;