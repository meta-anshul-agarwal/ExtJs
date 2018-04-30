Ext.define('GETA18.view.InboxAndSentMailTab.InboxAndSentMailTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inboxandsentmailtab-inboxandsentmailtab',


    onShowInbox : function(sender, eOpts) {
      var me = this;
      Ext.Ajax.request({
        url: 'http://172.16.50.111:8080/'+ Constants.userId +"/inbox" +'?token=' + Constants.accessToken,
        method: 'GET'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var mails = JSON.parse(response.responseText);
            for(var mail in mails){
              var timeline = new Date(mails[mail].date);
              mails[mail].date = Ext.Date.format(timeline, 'd-m-Y  h:i A');
            }
            //console.log(me.getView().lookup('inbox'));
          //  me.getView().lookup('inbox').badgeText = mails.length;
            me.getView().lookup('inboxComponentDataItem').setStore(mails);

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

    onShowSentMail : function(sender, eOpts) {
      var me = this;
      Ext.Ajax.request({
        url: 'http://172.16.50.111:8080/'+ Constants.userId +"/sentMail" +'?token=' + Constants.accessToken,
        method: 'GET'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var mails = JSON.parse(response.responseText);
            console.log(mails);
            for(var mail in mails){
              var timeline = new Date(mails[mail].date);
              mails[mail].date = Ext.Date.format(timeline, 'd-m-Y  h:i A');
            }
            //console.log(me.getView().lookup('inbox'));
          //  me.getView().lookup('inbox').badgeText = mails.length;
            me.getView().lookup('sentComponentDataItem').setStore(mails);

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

});
