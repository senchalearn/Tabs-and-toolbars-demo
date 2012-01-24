Ext.define('ToolbarDemo.view.Actioncard', {
    extend: 'Ext.Panel',
    xtype: 'actioncard',

    config: {
        iconCls: "action",
        title: "action",
        styleHtmlContent: true,
        html: "placeholder text",
        defaults: {
            xtype: 'toolbar'
        },
        items: [
            {
                title: "Buttons",
                items: [{
                    iconCls: 'delete',
                    iconMask: true,
                    ui: "plain",
                    action: 'clear'
                }, {
                    xtype: 'spacer'
                }, {
                    iconCls: 'star',
                    iconMask: true,
                    ui: "plain",
                    action: 'ping'
                }]
            },{
                docked: 'bottom',
                items: [
                    { iconCls: 'star',  iconMask: true,  text: 'favorite' },
                    { iconCls: 'star',  iconMask: true,  ui: 'action' },
                    { iconCls: 'star',  iconMask: true,  ui: 'confirm' },
                    { iconCls: 'star',  iconMask: true,  ui: 'decline' },
                    { iconCls: 'star',  iconMask: true,  ui: 'plain' },
                ]
            },{
                docked: 'bottom',
                items: [
                    { text: 'action',   ui: 'action-round' },
                    { text: 'action',   ui: 'action-small' },
                    { text: 'confirm',  ui: 'confirm-round' },
                    { text: 'confirm',  ui: 'confirm-small' },
                    { text: 'decline',  ui: 'decline-round' },
                    { text: 'decline',  ui: 'decline-small' },
                ]
            },{
                docked: 'bottom',
                items: [
                    { text: 'normal' },
                    { text: 'action',   ui: 'action' },
                    { text: 'confirm',  ui: 'confirm' },
                    { text: 'decline',  ui: 'decline' },
                ]
            },{
                docked: 'bottom',
                items: [
                    { text: 'back',     ui: 'back' },
                    { text: 'normal',   ui: 'normal' },
                    { text: 'small',    ui: 'small' },
                    { text: 'round',    ui: 'round' },
                    { text: 'forward',  ui: 'forward' },
                ]
            }
        ]
    }
});

