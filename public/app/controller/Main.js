Ext.define('ToolbarDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainPanel: 'mainview',
            tabButtons: 'mainview tabbar[docked=bottom] button',
            homeTabButton: 'mainview tabbar[docked=bottom] button[title=home]',
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
        this.getHomeTabButton().setBadgeText("");
    },

    pingHomeBadge: function() {
        var hometab = this.getHomeTabButton(),
            badgenumber = parseInt(hometab.getBadgeText()),
            nextnumber = isNaN(badgenumber) ? 1 : badgenumber+1;

        hometab.setBadgeText(nextnumber);
    }

});
