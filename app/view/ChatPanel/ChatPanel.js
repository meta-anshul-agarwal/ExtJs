
Ext.define('GETA18.view.ChatPanel.ChatPanel',{
    extend: 'Ext.panel.Panel',

    requires: [
        'GETA18.view.ChatPanel.ChatPanelController',
        'GETA18.view.ChatPanel.ChatPanelModel'
    ],

    controller: 'chatpanel-chatpanel',
    viewModel: {
        type: 'chatpanel-chatpanel'
    },

    config : {
      chatId : null
    },

    tools: [{
       iconCls: 'md-icon-remove',
       itemId: 'remove',
       handler: function(panel){
           if (panel.getHeight() ===  Constants.chatPanelMaxHeight) {
               panel.setHeight(Constants.chatPanelMinHeight);
               panel.down('#remove').setHidden(true);

           }
           //panel.showBy(Ext.getBody(), 'bl-bl');
           // var panels = Ext.ComponentQuery.query('#chatPanel');
           // for (var p in panels) {
           //     if (panel === panels[p]) {
           //         if (p != 0) {
           //             panel.showBy(panels[p - 1], 'br-bl');
           //         } else {
           //             panel.showBy(Ext.getBody(), 'br-br');
           //         }
           //     }
           // }
       }
   }],
   //itemId: 'chatPanel',
   //margin : '5 0',
   layout : {
     type :'fit'
   },
  closable: true,
  //style: 'z-index : 100',
  items: [{
      xtype: 'componentdataview',
      reference: 'chatContainer',
      style : 'background-color : #ece5dd',
      scrollable: {
         direction: 'vertical',
         directionLock: true,
      },
      itemTpl : new Ext.XTemplate(
          '<tpl if="(Constants.userDetails.employeeID == messageSender)">',
            '<div style="text-align : right;  ">',
              '<p style="   word-wrap:break-word;text-align : start;font-size : 14px;border-radius : 5px;background-color : #dcf8c6;font-weight : bold; width : 60% ; margin-left : 40%;padding : 10px;">{message}</p>',
             '<p style="font-size : 12px; color : #aaa;margin-left : 2%">{date}</p>',
            '</div>',
          '<tpl else>',
            '<div style="text-align : left;">',
            '<p style="word-wrap:break-word;text-align : start;font-size : 14px;border-radius : 5px;background-color : white;font-weight : bold; width : 60%;padding : 10px;">{message}</p>',
            '<p style="font-size : 12px; color : #aaa;margin-left : 2%">{date}</p>',
            '</div>',
          '</tpl>',
      )
  }, {
      xtype: 'container',
      docked: 'bottom',
      layout : 'hbox',
      items: [{
          xtype: 'textareafield',
          itemId : 'chatMessage',
          height : 50,
          flex : 5,
          scrollable : false,
          cls : 'chat-area-field',
          width: '87%',
          padding: '0 0 0 15',
          style: 'word-wrap: break-word;box-shadow : none;',
          ui: 'solo',
          shadow: true,
          placeholder: 'type to chat...',
          clearable: false,
      }, {
          xtype: 'button',
          itemId :'sendChatMessage',
          shadow: 'true',
          flex : 1,
          ui: 'action round',
          iconCls: 'x-fa fa-arrow-right'
      }]
  }],

  initialize: function (args) {
      var panel = this;
      this.element.on({
          tap: function () {
              if (panel.getHeight() === Constants.chatPanelMinHeight) {
                  panel.setHeight(Constants.chatPanelMaxHeight);
                  panel.down('#remove').setHidden(false);
                  // var panels = Ext.ComponentQuery.query('#chatPanel');
                  // for (var p in panels) {
                  //     if (panel === panels[p]) {
                  //       if(window.innerWidth >= 415){
                  //         if (p != 0) {
                  //             panel.showBy(panels[p - 1], 'br-bl');
                  //         } else {
                  //             panel.showBy(Ext.getBody(), 'br-br');
                  //         }
                  //       }
                  //       else{
                  //           panel.showBy();
                  //       }
                  //       panel.setCls('message-seen-color');
                  //       return;
                  //     }
                  // }
              }
          }
      });
  }
});
