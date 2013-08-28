var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    template: templates.pages.home,
    render: function () {
        this.renderAndBind();
        return this;
    }
});
