const req = require("express/lib/request");
const res = require("express/lib/response");

module.exports = function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next ();
    res.redirect('/auth/google');
}