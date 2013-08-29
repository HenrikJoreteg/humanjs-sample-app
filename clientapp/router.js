/*global app, me, $*/
var Backbone = require('backbone');
var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collectionDemo');
var PageTwo = require('./pages/two');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'two': 'pageTwo'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.renderPage(new HomePage({
            model: me
        }));
    },

    collectionDemo: function () {
        app.renderPage(new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    pageTwo: function () {
        app.renderPage(new PageTwo({
            model: me
        }));
    }
});
