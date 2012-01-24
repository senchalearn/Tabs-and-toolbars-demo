Ext.define('ToolbarDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'card/:index': 'showCard'
        },
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
            },
            tabButtons: {
                tap: 'changeTab'
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
    },

    showCard: function(index) {
        this.getMainPanel().setActiveItem(parseInt(index))
    },

    changeTab: function(button, event, object) {
        addresses = {
            home:    0,
            search:  1,
            action:  2,
        }
        index = addresses[button.getTitle()];
        window.location.hash = "#card/" + index;
    }

});
