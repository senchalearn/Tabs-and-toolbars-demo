Ext.define('ToolbarDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            ':slug': 'showCard'
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

    showCard: function(slug) {
        var selector = 'container[title='+slug+']',
            target = Ext.ComponentQuery.query(selector)[0];

        this.getMainPanel().setActiveItem(target.id);
    },

    changeTab: function(button, event, object) {
        window.location.hash = "#" + button.getTitle();
    }

});
