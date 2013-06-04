var fs = require('fs'),
    config = require('getconfig'),
    util = require('util');

// the app html is tiny, no need to read from disk all the time
// so we just cache it
var cacheManifest = fs.readFileSync('views/app/cacheManifest', 'utf8');

exports.logout = function (req, res) {
    req.session.nextUrl = '/';
    req.logout();
    res.redirect('/');
};

exports.home = function (req, res) {
    res.render('home', {pageTitle: 'home', bodyId: 'home'});
};

// simple helper
exports.render = function (view) {
    return function (req, res) {
        res.render(view);
    };
};

exports.cacheManifest = function (req, res) {
    res.set('Content-Type', 'text/cache-manifest; charset=utf-8');
    res.send(cacheManifest);
};

exports.cspViolation = function (req, res) {
    res.send('logged');
};
