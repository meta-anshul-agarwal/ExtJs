Ext.define('GETA18.view.SettingPanel.SettingPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settingpanel-settingpanel',
    config : {
      control : {
        '#logoutButton' : {
          tap : 'logout'
        }
      }
    },

    logout : function(button , e , eOpts){
      console.log(Constants.accessToken + "asdasd");
      Ext.Ajax.request({
        url: Constants.url + 'logout/'+Constants.userId+'?token='+Constants.accessToken ,
        method: 'GET',
        }).then (function(response, opts) {
          localStorage.removeItem('GETA18-Login');
          sessionStorage.clear();
          GETA18.view.Constants.accessToken = null;
          GETA18.view.Constants.userId = null;
          this.redirectTo('login');
        },
        function(response, opts) {
          console.log('server-side failure with status code ' + response.status);
        });

    }

});
