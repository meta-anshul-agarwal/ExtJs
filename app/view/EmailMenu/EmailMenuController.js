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
      emailForm.showBy(Ext.Viewport, "c-c");
    },

    showInboxTab : function(button , e , eOpts){
      this.getView().hide();
      var inboxAndSentTab = UtilityFunction.showMailBox();
      inboxAndSentTab.showBy(Ext.Viewport, "c-c");
    },

    showSentMailTab : function(button , e , eOpts){
      this.getView().hide();
      var inboxAndSentTab = CreateView.inboxAndSentMailTab();
      var sentMailTab = inboxAndSentTab.lookup('sentMailTab');
      inboxAndSentTab.setActiveItem(sentMailTab);
      inboxAndSentTab.showBy(Ext.Viewport, "c-c");
    }
});
