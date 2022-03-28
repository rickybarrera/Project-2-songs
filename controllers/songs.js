const Song = require('../models/song');


module.exports = {
    index,
    new: newSong,
    create,
  
};

function index(req, res){
Song.find({}, function(err, songs) {
    res.render('songs/index', {title: "All Songs", songs});
});
}
function newSong(req, res) {
    res.render('songs/new'), {title: 'Add Song'};
}
function create(req, res) {
    const song = new Song(req.body);
    song.save(function(err) {
        if (err) return res.render('songs/new');
        console.log(song);
        res.redirect('/songs/new');
    });
}
