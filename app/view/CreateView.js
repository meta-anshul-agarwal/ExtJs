Ext.define('GETA18.view.CreateView',{
  singleton : true,
  alternateClassName : 'CreateView',

  mainView : function(){
    var mainApp = Ext.create('GETA18.view.Main.Main' , {
      cls : 'MainApp',
      margin : 0,
      width : '100%',
      height : '100%',
      showAnimation : {
        type : 'fade',
        duration : 300
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300
      }
    });
    return mainApp;
  },

  signUpForm : function(){
    var signUpForm = Ext.create('GETA18.view.SignUpForm.SignUpForm' , {
      itemId : 'signUpForm',
      modal : true,
      closable : true,
      scrollable : true,
      hideOnMaskTap : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 415' : {
          width : '100%',
          height : '100%',
          fullScreen : true,
          style : 'margin : auto;',
          scrollable : true,
        },
        'width >= 415' : {
          width : 400,
          height : 600,
        }
      },
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return signUpForm;
  },

  emailForm : function() {
    var emailForm = Ext.create('GETA18.view.EmailForm.EmailForm' , {
      itemId : 'emailForm',
      height : '70%',
      width : '40%',
      modal : true,
      closable : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '70%',
          width : '40%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return emailForm;
  },

  settingPanel : function(){
    var setting = Ext.create('GETA18.view.SettingPanel.SettingPanel' , {
     itemId : 'settingPanel',
     cls : 'anime',
     width : 100,
     hidden : true,
     anchor : true,
     showAnimation : {
       type : 'fade',
       duration : 300,
       direction : 'left'
     },
     hideAnimation : {
       type : 'fadeOut',
       duration : 300,
       direction : 'right'
     }

   });
   return setting;
 },

  loginForm : function() {
    var loginForm = Ext.create('GETA18.view.LoginForm.LoginForm' , {
      itemId : 'loginForm',
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return loginForm;
  },

  taskForm : function() {
    var taskForm = Ext.create('GETA18.view.TaskForm.TaskForm' , {
      itemId : 'taskForm',
      height : '40%',
      width : '20%',
      modal : true,
      closable : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '40%',
          width : '20%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return taskForm;
  },

  taskDetail : function(){
    var taskDetail = Ext.create('GETA18.view.TaskDetailPanel.TaskDetailPanel',{
      itemId : 'taskDetail',
      height : '40%',
      width : '30%',
      modal : true,
      style : 'margin:auto;',
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
        listeners: {
          animationend: function(evt, obj) {
          },
          scope : this,
        }
      }
    });
    return taskDetail;
  },

  taskMenu : function(){
    var taskMenu = Ext.create('GETA18.view.TaskMenu.TaskMenu',{
      itemId : 'taskMenu',
      width : 150,
      hidden : true,
      anchor : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
      }
    });
    return taskMenu;
  },

  emailMenu : function(){
    var emailMenu = Ext.create('GETA18.view.EmailMenu.EmailMenu',{
      itemId : 'emailMenu',
      width :200,
      hidden : true,
      anchor : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
      }
    });
    return emailMenu;
  },

  notificationPanel : function(){
    var notificationPanel = Ext.create('GETA18.view.NotificationPanel.NotificationPanel',{
      itemId : 'notificationPanel',
      height : 80,
      anchor : true,
      width :300,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
      }
    });
    return notificationPanel;
  },

  inboxAndSentMailTab : function(){
    var inboxAndSentMailTab = Ext.create('GETA18.view.InboxAndSentMailTab.InboxAndSentMailTab',{
      itemId : 'inboxAndSentMailTab',
      modal : true,

      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '70%',
          width : '40%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return inboxAndSentMailTab;
  },

  taskGrid : function(){
    var taskGrid = null;
    var taskGridComponent = Ext.ComponentQuery.query('#taskGrid');
    if(taskGridComponent.length > 0){
      taskGrid = taskGridComponent[0];
    }
    else{
      taskGrid = Ext.create('GETA18.view.TasksGrid.TasksGrid' , {
      itemId : 'taskGrid',
      modal : true,
      closable : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '70%',
          width : '40%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });

  }
    return taskGrid;

  },

  chatPanel : function(){
    var chatPanel = Ext.create('GETA18.view.ChatPanel.ChatPanel',{

      // chatId : null,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 415' : {
          height: '100%',
          width: '100%'
        },
        'width >= 415' : {
          style : 'margin-left : 10px;',
          height: 300,
          width: 250
        }
      }
    });
    return chatPanel;
  },

  chatGroup : function(){
    chatContainer = Ext.create('GETA18.view.ChatContainer.ChatContainer',{
      itemId : 'chatGroup',
      style : 'z-index : 1000;background-color:inherit;box-shadow : none;margin-top : 5px;position : absolute;',
      bottom : 0,
      right : 0,
      height : 300,
      left : 0,
      layout : {
        type : 'hbox',
        align : 'bottom',
        pack : 'end',
      },
    })
    return chatContainer;
  }
});
