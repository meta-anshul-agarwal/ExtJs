Ext.define('GETA18.view.EmailMenu.EmailMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.emailmenu-emailmenu',
    config : {
      control : {
        '#composeMail' : {
          tap : 'composeMail'
        },
        '#inboxView' : {
          tap : 'showInboxTab'
        },
        '#sentMailView' : {
          tap : 'showSentMailTab'
        }
      }
    },

    composeMail : function(button , e , eOpts){
      this.getView().hide();
      var emailForm = CreateView.emailForm();
      if(window.innerWidth >= 800){
        emailForm.showBy(Ext.Viewport, "c-c");
      }
      else{
        emailForm.showBy();
      }
    },

    showInboxTab : function(button , e , eOpts){
      this.getView().hide();
      var inboxAndSentTab = UtilityFunction.showMailBox();
      if(window.innerWidth >= 800){
        inboxAndSentTab.showBy(Ext.Viewport, "c-c");
      }
      else{
        inboxAndSentTab.showBy();
      }
    },

    showSentMailTab : function(button , e , eOpts){
      this.getView().hide();
      var inboxAndSentTab = CreateView.inboxAndSentMailTab();
      inboxAndSentTab.setActiveItem(1);
      if(window.innerWidth >= 800){
        inboxAndSentTab.showBy(Ext.Viewport, "c-c");
      }
      else{
        inboxAndSentTab.showBy();
      }
    }
});
