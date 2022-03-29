const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const favoriteSchema = new Schema ({
    content: { type: String, required: true},
    rating: {type: Number, min: 1, max: 10, default: 10},
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});
const songSchema = new Schema ({
    title: String,
    releaseYear: String,
    album: String,
    artist: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
    favorites: [favoriteSchema]
});

module.exports = mongoose.model('Song', songSchema);