var Backbone = require('backbone');
var HomePage = require('./pages/home');
var PageOne = require('./pages/one');
var PageTwo = require('./pages/two');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'one': 'pageOne',
        'two': 'pageTwo'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.renderPage(new HomePage({
            model: me
        }));
    },

    pageOne: function () {
        app.renderPage(new PageOne({
            model: me
        }));
    },

    pageTwo: function () {
        app.renderPage(new PageTwo({
            model: me
        }));
    }
});
