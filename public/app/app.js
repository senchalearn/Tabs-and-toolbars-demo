Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ToolbarDemo',
    
    controllers: ['Main'],
    views: ['Main', 'Homecard', 'Searchcard', 'Actioncard'],
    
    launch: function() {
        Ext.Viewport.add({
            xclass: 'ToolbarDemo.view.Main'
        });
    }
});
