ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    styleHtmlContent: true,
    html: "placeholder text",
    dockedItems: [{
        xtype: "toolbar",
        title: "Buttons",
        items: [
            {
                text: 'clear'
            },
            { xtype: 'spacer' },
            {
                text: 'ping'
            }
        ]
    }]
});

Ext.reg('actioncard', ToolbarDemo.views.Actioncard);
