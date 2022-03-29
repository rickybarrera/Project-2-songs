const Song = require('../models/song')

module.exports = {
    create,
    delete: deleteFavorite
}
function create(req, res){
    Song.findById(req.params.id, function(err, song) {

        console.log(req.user)
        req.body.user = req.user._id
        req.body.userName = req.user.userName
        req.body.userAvatar = req.user.avatar 
        console.log(song);
        song.favorites.push(req.body)
        song.save(function(err) {
            res.redirect(`/songs/${song._id}`)
        })
    })
}
function deleteFavorite(req, res, next) {
    Song.findOne({'favorites._id': req.params.id})
    .then(function(song) {
        const favorite = song.favorites.id(req.params.id)
        if(!favorite.user.equals(req.user._id)) return res.redirect(`/songs/${song._id}`)
        favorite.remove()
        song.save().then(function() {
            res.redirect(`/songs/${song._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
}