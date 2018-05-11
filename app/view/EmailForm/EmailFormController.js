Ext.define('GETA18.view.EmailForm.EmailFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.emailform-emailform',
    config : {
    leftPanelViewController : null,
    control : {
      '#sendMail' : {
        tap : 'sendMail'
      }
    }
  },
  populateField : function(contactList , emailId){
    var emailIds = [];
    if(contactList.getSelectable().getMode() === 'multi'){
      for(var i = 0 ; i < contactList.getSelections().length ; i++){
        emailIds.push(contactList.getSelections()[i].data.personalDetails.email);
      }
    }
    else{
      emailIds.push(emailId);
    }
    this.getView().down('#to').setValue(emailIds);
  },

  populateReceiverField : function(emailId){
      this.getView().down('#to').setValue(emailId);
  },

  sendMail : function(){
      var me = this;
      var form = me.getView();
      var receivers = form.down('#to').getValue();
      var subject = form.down('#subject').getValue();
      var body = form.down('#body').getValue();
      var email  = {
        'receivers' : receivers,
        'subject' : subject,
        'body' : body
      }
      console.log(email);
      if(form.validate()){
        form.setMasked({
          xtype : 'loadmask',
          message : 'Registering'
        });
        Ext.Ajax.request({
          url: 'http://172.16.50.111:8080/' + Constants.userId + '/mail'+ '?token=' + Constants.accessToken,
          method: 'POST',
          jsonData: email
        }).then (function(response, opts) {
            if(response.responseText){
              // var tasks = JSON.parse(response.responseText);
              // me.getParentViewController().getTaskViewController().setTaskData(tasks);
              email.sender = Constants.userDetails.personalDetails.name;
              email.image = Constants.userDetails.personalDetails.image;
              SocketService.sendMailMessage(email);
              form.unmask();
              form.destroy();
              Ext.Msg.alert("Email Sent");
            }
            else{
              Ext.Msg.alert("Invalid Authorization");
            }
          },
          function(response, opts) {
            form.unmask();
            Ext.Msg.alert("Server is down");
            console.log('server-side failure with status code ' + response.status);
          });
    }
  }

});
