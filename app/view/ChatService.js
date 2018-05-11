Ext.define('GETA18.view.ChatService',{
  singleton : true,
  alternateClassName : 'ChatService',

  receiveChatMessage : function(){
    var me = this;
    var callback = function(message){

      if(message.chatId === Constants.userDetails.employeeID){
        me.showChatMessageInChatWindow(message);

      }
    };
    SocketService.getChatMessage(callback);
  },

  showChatMessageInChatWindow : function(message){

      //get chatContainer reference
      var panel = this.openChatPanel(message.messageSender, message.senderName, function(panel){
        panel.getController().showMessage(message);
      });
  },

  storeChatMessageInDB : function(chatMessage){
    SocketService.sendChatMessage(chatMessage);
    if(chatMessage.message.length > 0){
      Ext.Ajax.request({
        url: Constants.url + Constants.userId + '/chatMessage'+ '?token=' + Constants.accessToken + '&chatId=' + chatMessage.chatId,
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

  openChatPanel : function(id, name, callback){
    //Get chat panel if already open else create one
    //console.log(_mainView);
    var chatContainer = Ext.ComponentQuery.query('#chatGroup');
    if(!chatContainer || chatContainer.length == 0){
      chatContainer = CreateView.chatGroup();
      _mainView.getView().add(chatContainer);
      //Ext.Viewport.getActiveItem().add(chatContainer);
      //chatContainer.showBy(Ext.Viewport, 'bl-bl');
      //Ext.Viewport.add(chatContainer);
      //chatContainer.show();
    }else{
      chatContainer = chatContainer[0];
    }
    var panel = chatContainer.getController().chatPanelWithId(id, name, callback);

    return panel;
  }

});
