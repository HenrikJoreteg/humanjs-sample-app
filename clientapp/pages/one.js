var PageView = require('./base');
var templates = require('../templates');

module.exports = PageView.extend({
    template: templates.pages.one,
    render: function () {
        this.renderAndBind();
        return this;
    }
});
