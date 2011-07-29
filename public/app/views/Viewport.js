ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,

    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },

    defaults: {
        html: 'placeholder text',
        styleHtmlContent: true
    },

    items: [
        {
            title: "Home"
        },
        {
            title: "Search"
        },
        {
            title: "Action"
        },
        {
            title: "Settings"
        },
        {
            title: "More"
        },
    ]
});
