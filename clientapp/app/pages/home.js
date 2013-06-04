var PageView = require('pages/base'),
    templates = require('templates');


module.exports = PageView.extend({
    events: {
        'click .prevDay:not(.disabled)': 'handlePrevDayClick',
        'click .nextDay:not(.disabled)': 'handleNextDayClick'
    },
    title: function () {
        return this.model.name + ' Team Chat History';
    },
    render: function () {
        return this;
    }
});
