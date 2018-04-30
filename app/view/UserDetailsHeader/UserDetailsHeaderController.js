Ext.define('GETA18.view.UserDetailsHeader.UserDetailsHeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdetailsheader-userdetailsheader',

    config: {
        showSocialIcons: true,
        showContactImage: true,
        parentViewController: null,
        currentUser: null,
        control: {
            '#mail': {
                tap: 'mailForm'
            },
            '#chat': {
                tap: 'chatPanel'
            }
        }
    },

    init: function () {
        this.setShowSocialIcons(Constants.socialIcons);
        this.setShowContactImage(Constants.contactImages);
    },

    setData: function (data) {
        var view = this.getView();
        view.down('#buttonContainer').setHidden(!this.getShowSocialIcons());
        view.down("#profileName").setHtml(data.personalDetails.name);
        view.down("#profileDesignation").setHtml(data.personalDetails.designation);
        var profileImage = 'https://goo.gl/2Ct8aB';
        if (this.getShowContactImage()) {
            profileImage = data.personalDetails.image;
        }
        view.down("#profileImage").setSrc(profileImage);
        this.setCurrentUser(data);
    },

    mailForm: function (button, e, eOpts) {
        var emailForm = CreateView.emailForm();
        emailForm.showBy(Ext.Viewport, "c-c");
        emailForm.getController().populateReceiverField(this.getCurrentUser().personalDetails.email);
    },

    chatPanel: function (button, e, eOpts) {
        var panels = Ext.ComponentQuery.query('#chatPanel');
        var panel = null;
        var flag = 0;
        if (panels.length > 0) {
            for (var p in panels) {
                panel = panels[p];
                if (this.getCurrentUser().personalDetails.name === panels[p].getTitle()) {
                  //panel.getController().setInitialLayout(panel);
                  flag = 1;
                }
            }
            if(flag === 0){
              panel = CreateView.chatPanel();
              panel.setTitle(this.getCurrentUser().personalDetails.name);
              panel.showBy(panels[p], 'br-bl');
            }
        } else {
        panel = CreateView.chatPanel();
        panel.setTitle(this.getCurrentUser().personalDetails.name);
        panel.showBy(Ext.getBody(), 'br-br');
      }
      panel.getController().saveChatingPerson(this.getCurrentUser().employeeID);
    }

});
