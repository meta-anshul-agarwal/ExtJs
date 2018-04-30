Ext.define('GETA18.view.ChatPanel.ChatPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chatpanel-chatpanel',
    config : {
      chatingId : null,
      control : {
        '#sendChatMessage' : {
          tap : 'sendChatMessage'
        }
      }
    },

    // init : function(){
    //   var me=this;
    //   //Establish socket connections
    //   SocketService.establishConnection(function(){
    //       //receive Message
    //       me.receiveChatMessage();
    //   });
    // },
    saveChatingPerson : function(chatingId){
      var me = this;
      me.setChatingId(chatingId);
      Ext.Ajax.request({
        url: 'http://172.16.50.111:8080/' + Constants.userId + '/chatMessage'+ '?token=' + Constants.accessToken + '&user=' + me.getChatingId(),
        method: 'GET',
      }).then (function(response, opts) {
          var messages = JSON.parse(response.responseText);
          if(messages != null){
            var chatContainer = me.getView().lookup('chatContainer');
              chatContainer.setStore(messages);
              chatContainer.getScrollable().scrollTo(Infinity , Infinity);
          }
          else{
            Ext.Msg.alert("Invalid Authorization");
          }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
        });
    },
    sendChatMessage : function(button , e , eOpts){
      var me = this;
      var view = this.getView();
      var chatId = me.getChatingId();
      var message = view.down('#chatMessage').getValue();
      var messageSender = Constants.userDetails.employeeID;
      var date = Ext.Date.format(new Date(),'d-m-Y  h:i A');
      var chatMessage = {
        "message" : message,
        "date" : date,
        "messageSender" : messageSender
      }
      chatMessage.senderName = Constants.userDetails.personalDetails.name;
      chatMessage.receiverName =  me.getView().getTitle();
      SocketService.sendChatMessage(chatMessage);
      view.down('#chatMessage').setValue("");
      var chatContainer = me.getView().lookup('chatContainer');
      chatContainer.getStore().add(chatMessage);
      chatContainer.getScrollable().scrollTo(Infinity , Infinity);
      if(message.length > 0){
        Ext.Ajax.request({
          url: 'http://172.16.50.111:8080/' + Constants.userId + '/chatMessage'+ '?token=' + Constants.accessToken + '&chatId=' + chatId,
          method: 'POST',
          jsonData: chatMessage
        }).then (function(response, opts) {
            if(response.responseText){


            }
            else{
              Ext.Msg.alert("Invalid Authorization");
            }
          },
          function(response, opts) {
            Ext.Msg.alert("Server is down");
            console.log('server-side failure with status code ' + response.status);
          });
      }
    },
    // setInitialLayout : function(panel){
    //   if (panel.getHeight() === 47) {
    //       // panel.setHeight(300);
    //       // panel.down('#remove').setHidden(false);
    //       // var panels = Ext.ComponentQuery.query('#chatPanel');
    //       // for (var p in panels) {
    //       //     if (panel === panels[p]) {
    //       //         if (p != 0) {
    //       //             panel.showBy(panels[p - 1], 'br-bl');
    //       //         } else {
    //       //             panel.showBy(Ext.getBody(), 'br-br');
    //       //         }
    //       //     }
    //       // }
    //     }
    //},


});
