const Song = require('../models/song');


module.exports = {
    index,
    new: newSong,
    create,
    delete: deleteSong,
    show,
    edit,
    update
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
function deleteSong(req, res) {
    Song.findByIdAndRemove (req.params.id, function(err, song){
        res.redirect('/songs')
    })
}
function show(req, res,) {
    Song.findById(req.params.id, function(err, song){
        res.render('songs/show', { title: 'Song Details', song});
    })
}
async function edit(req, res){
    console.log('edit')
    const song1 = await Song.findById(req.params.id)
    console.log(song1);
    res.render('songs/edit', {
        song: song1
    });
}
function update(req,res) {
    console.log('hitting');
    Song.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, song) {
          console.log('try')
        if (err) 
        {console.log('error')
        return res.redirect('/songs')};
        console.log(song)
        res.redirect(`${song._id}`);
      }
    );
  }
