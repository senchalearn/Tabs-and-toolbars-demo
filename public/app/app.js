Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ToolbarDemo',
    
    controllers: ['Main'],
    views: ['Main', 'Homecard'],
    
    launch: function() {
        Ext.Viewport.add({
            xclass: 'ToolbarDemo.view.Main'
        });
    }
});
