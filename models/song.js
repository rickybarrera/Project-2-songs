const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const songSchema = new Schema ({
    title: String,
    releaseYear: String,
    album: String,
    artist: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model('Song', songSchema);