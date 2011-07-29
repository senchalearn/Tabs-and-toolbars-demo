(function() {
    var topbar = {
        xtype: "toolbar",
        title: "Buttons",
        items: [
            {
                text: "clear",
                handler: function() {
                    ToolbarDemo.views.homecard.tab.setBadge("");
                }
            },
            { xtype: 'spacer' },
            {
                text: "ping",
                handler: function() {
                    var hometab = ToolbarDemo.views.homecard.tab,
                        badgenumber = parseInt(hometab.badgeText),
                        nextnumber = isNaN(badgenumber) ? 1 : badgenumber+1;
                    hometab.setBadge(nextnumber);
                }
            }
        ]
    };

    var textButtonShapes = {
        xtype: "toolbar",
        dock: 'bottom',
        items: [
            { text: 'back',     ui: 'back' },
            { text: 'normal',   ui: 'normal' },
            { text: 'small',    ui: 'small' },
            { text: 'round',    ui: 'round' },
            { text: 'forward',  ui: 'forward' },
        ]
    };

    ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
        title: "action",
        iconCls: "action",
        styleHtmlContent: true,
        html: "placeholder text",
        dockedItems: [
            topbar,
            textButtonShapes
        ]
    });

    Ext.reg('actioncard', ToolbarDemo.views.Actioncard);

})();
