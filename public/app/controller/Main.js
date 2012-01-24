Ext.define('ToolbarDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            clearButton: 'button[action=clear]',
            starButton: 'button[action=ping]'
        },
        control: {
            clearButton: {
                tap: 'clearHomeBadge'
            },
            starButton: {
                tap: 'pingHomeBadge'
            }
        }
    },

    clearHomeBadge: function() {
        console.log('clear!');
    },

    pingHomeBadge: function() {
        console.log('ping!');
    }

});
