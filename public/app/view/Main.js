Ext.define('ToolbarDemo.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainview',

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            { xtype: 'homecard' },
            { xtype: 'searchcard' },
            // { xtype: 'actioncard' },
            // { xtype: 'settingscard' },
            // { xtype: 'morecard' }
        ]
    }
});
