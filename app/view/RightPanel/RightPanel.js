
Ext.define('GETA18.view.RightPanel.RightPanel',{
    extend: 'Ext.Container',
    xtype : 'rightPanel',
    requires: [
        'GETA18.view.RightPanel.RightPanelController',
        'GETA18.view.RightPanel.RightPanelModel'
    ],

    controller: 'rightpanel-rightpanel',
    viewModel: {
        type: 'rightpanel-rightpanel'
    },

    style: 'background-color:#fafafa;',

    layout: {
        type: 'vbox'
    },

    items: [
      {
        xtype: 'container',
        height: 180,
        docked : 'top',
        layout: {
            type: 'hbox',
        },
        items : [{
        xtype: 'userDetailsHeader',
        data : null,
        cls: 'user-details-header',
        itemId: 'userDetailsHeader',
        style: 'position : relative;',
        flex : 1,
        layout: {
            type: 'hbox',
            align: 'middle'
        },
      }]
  }, {
        xtype: 'container',
        flex: 1,
        plugins : 'responsive',
        layout: {
            type: 'hbox',
        },
        responsiveConfig : {
          'width < 800' : {
            layout : {
              type : 'vbox'
            },
            scrollable : true,
          },
          'width >= 800' : {
            layout : {
              type : 'hbox'
            }
          }
        },
        items: [{
            xtype: 'userDetailsPanel',
            itemId: 'userDetailView',
            plugins : 'responsive',
            cls : 'user-details-panel',
            responsiveConfig : {
              'width < 415' : {
                height : 500,
              },
              'width >= 415' : {
                flex : 1
              }
            }
        }, {
            xtype : 'tasks',
            itemId : 'taskView',
            plugins : 'responsive',
            cls: 'grid',
            responsiveConfig : {
              'width < 415' : {
                height : 500,
              },
              'width >= 415' : {
                flex : 1
              }
            }
        }]
    }]


});
