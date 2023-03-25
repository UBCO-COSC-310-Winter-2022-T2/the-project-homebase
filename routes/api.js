/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require('express')
const router = express.Router()

const User = require('../models/User');
const Server = require('../models/Server');
const Message = require('../models/Message');



// When querying the database for messages, make sure to implement pagination  

module.exports = router