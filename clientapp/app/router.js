var Backbone = require('backbone');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'one': 'pageOne',
        'two': 'pageTwo',
        '404': 'fourOhFour'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        var View = require('pages/home');
        app.renderPage(new View({
            model: me
        }));
    },

    pageOne: function () {
        var View = require('pages/home');
        app.renderPage(new View({
            model: me
        }));
    },

    pageTwo: function () {
        var View = require('pages/home');
        app.renderPage(new View({
            model: me
        }));
    },

    fourOhFour: function () {
        var View = require('pages/home');
        app.renderPage(new View({
            model: me
        }));
    }
});
