
Ext.define('GETA18.view.SettingPanel.SettingPanel',{
    extend: 'Ext.panel.Panel',

    requires: [
        'GETA18.view.SettingPanel.SettingPanelController',
        'GETA18.view.SettingPanel.SettingPanelModel'
    ],

    controller: 'settingpanel-settingpanel',
    viewModel: {
        type: 'settingpanel-settingpanel'
    },

    items :[{
    xtype : 'button',
    text : 'logout',
    minWidth : '100%',
    itemId : 'logoutButton'
  }]
});
