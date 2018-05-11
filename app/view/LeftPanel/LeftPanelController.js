Ext.define('GETA18.view.LeftPanel.LeftPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.leftpanel-leftpanel',

    config : {
      parentViewController : null,
      showProfileImage : null,
      control : {
        '#searchField' : {
          change : 'filterList'
        },
        '#contactList' : {
          childTap : 'contactListItemTap',
          // select : 'contactListItemSelect'
        },
        // '#deleteContact' : {
        //   tap : 'deleteContacts'
        // },
        '#email' : {
          tap : 'ComposeEmailForm'
        }
      },

    },
    routes : {
            'home/employee:id' : 'employee',
    },

    employee : function(id) {
      this.redirectTo('home/employee'+id);
    },

    init : function(){
      console.log("init function LeftPanelController");
      var me = this;
      var view = me.getView();

      if(!Constants.searching){
        view.down('#searchField').hide();
      }
      view.down('#searchField').setPlaceholder(Constants.searchingField);

      this.setShowProfileImage(Constants.contactImages);
      isShow = function(){
        return me.getShowProfileImage();
      };
      this.downloadEmployeeDetail();

    },

    downloadEmployeeDetail : function(){
      console.log("download details function LeftPanelController");
      var me = this;
      var view = me.getView();
      var list = view.down('#contactList');
      view.setMasked({
        xtype : 'loadmask',
        message : 'loading'
      });

      Ext.Ajax.request({
        url: Constants.url + 'getAllEmployee/' +  Constants.userId + '?token=' + Constants.accessToken ,
        method: 'POST',
        jsonData : Constants.userDetails,
        }).then (function(response, opts) {
          var employees = Ext.decode(response.responseText);
          list.setStore(employees);
          me.getParentViewController().getRightPanelController().populateView(employees[0]);
          var counter = view.down("#counter");
          counter.setHtml(list.getStore().getData().length + " contacts");
          me.getView().unmask();
        },
        function(response, opts) {
          console.log('server-side failure with status code ' + response.status);
      });
    },
    mobileViewItemTap : function(list, location, eOpts){
      this.getParentViewController().getRightPanelController().populateView(location.record.data);
      this.getView().setWidth(0);
    },

    contactListItemTap : function(list, location, eOpts){
      console.log("contact childtap function LeftPanelController");
      var view = this.getView();
      var list = view.down('#contactList');
      this.getParentViewController().getRightPanelController().populateView(location.record.data);
      if(location.event.target.localName === 'img'){
        location.event.touch.targets[1].classList.toggle("flipped");
        list.setSelectable('multi');
        view.down('#deleteAndEmail').setHidden(false);
      }
      else{
        // console.log(location.record.internalId );
        // if(list.getSelectable().getMode() === "multi" && location.event.target.localName != 'img'){
        //   list.select(location.record.internalId - 3);
        // }
        // else{
        //   list.select(location.record.internalId - 3 , undefined , true);
        // }
         list.setSelectable('single');
         list.deselectAll();

      }
      if(list.getSelectionCount() == 0){
        list.setSelectable('single');
        view.down('#deleteAndEmail').setHidden(true);
      }
      this.redirectTo('home/employee/'+location.record.data.employeeID);
      setTimeout(function() {
        var counter = view.down("#counter");
        if(list.getSelectable().getMode() === "multi"){
          counter.setHtml(list.getSelectionCount() + " selected");

        }else{
          counter.setHtml(list.getStore().getCount() + " contacts");
        }
      },300)
    },

    ComposeEmailForm : function(button, e, eOpts){
      console.log("email form function LeftPanelController");
      var list = this.getView().down('#contactList');
      var emailForm = CreateView.emailForm();

      this.openEmailForn(emailForm);
      //emailForm.getController().setLeftPanelViewController(this);
      emailForm.getController().populateField(list , null);
    },

    onRightSwipe : function(list, info) {
      console.log("right swipe function LeftPanelController");
      var list = this.getView().down('#contactList');
      var emailForm = CreateView.emailForm();
      this.openEmailForn(emailForm);

      emailForm.getController().populateField(list , info.record.data.personalDetails.email);
    },
    openEmailForn : function(emailForm){
      if(window.innerWidth >= 800){
          emailForm.showBy(Ext.Viewport, "c-c");
      }
      else{
          emailForm.showBy();
      }
    },
    filterList : function(search , newValue , oldValue , eOpts){
      console.log("filterList function LeftPanelController");
      var list = this.getView().down('#contactList');
      var store = list.getStore();
      store.clearFilter();
      newValue = newValue.toLowerCase();
      store.filter(function(item){
          return item.data.personalDetails.name.toLowerCase().includes(newValue);
      });
    },

});
