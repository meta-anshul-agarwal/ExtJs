Ext.define('GETA18.view.TaskMenu.TaskMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskmenu-taskmenu',
    config : {
      control : {
        '#addTaskButton'  : {
          tap : 'showTaskForm'
        },
        '#showTaskButton' : {
          tap : 'showTaskGrid'
        }
      }
    },

    showTaskForm : function(button , e , eOpts){
      this.getView().hide();
      var taskForm = CreateView.taskForm();
      taskForm.showBy(Ext.Viewport , 'c-c');

    },

    showTaskGrid : function(button , e , eOpts){
      this.getView().hide();
      var taskGrid = CreateView.taskGrid();
      taskGrid.showBy(Ext.Viewport , 'c-c');
      taskGrid.getController().populateTaskViewForAdmin();
    }

});
