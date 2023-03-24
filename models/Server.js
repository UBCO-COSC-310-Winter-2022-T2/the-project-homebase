const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    channels: {
        type: Array,
        default: []
    },
    members: {
        type: Array,
        default: []
    },
    roles: {
        type: Array,
        default: []
    },
    avatar: {
        type: String,
        default: '' // find a picture for this
    }
});

module.exports = mongoose.model('server', ServerSchema);
