Ext.define('GETA18.view.ChatService',{
  singleton : true,
  alternateClassName : 'ChatService',

  receiveChatMessage : function(){
    var callback = function(message){
    if(message.receiverName === Constants.userDetails.personalDetails.name){
      var panels = Ext.ComponentQuery.query('#chatPanel');
      var panel = null;
      if (panels.length > 0) {
          for (var p in panels) {
              panel = panels[p];
              if (message.senderName === panels[p].getTitle()) {
                var chatContainer = panel.lookup('chatContainer');
                chatContainer.getStore().add(message);
                chatContainer.getScrollable().scrollTo(Infinity , Infinity);
                if(panel.getHeight() === Constants.chatPanelMinHeight){
                  panel.setCls('incoming-message-color');
                }
                return;
                //panel.getController().setInitialLayout(panel);
              }
          }
          var panel = CreateView.chatPanel();
          panel.setTitle(message.senderName);
          panel.showBy(panels[p], 'br-bl');
        } else {
          var panel = CreateView.chatPanel();
          panel.setTitle(message.senderName);
          panel.showBy(Ext.getBody(), 'br-br');
      }
      panel.getController().saveChatingPerson(message.messageSender);
      }
    };
    SocketService.getChatMessage(callback);
  },
  
});
