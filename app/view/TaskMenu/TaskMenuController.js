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
      if (window.innerWidth < 800) {
        taskForm.showBy();
      }
      else{
        taskForm.showBy(Ext.Viewport , 'c-c');
      }
    },

    showTaskGrid : function(button , e , eOpts){
      this.getView().hide();
      var taskGrid = CreateView.taskGrid();
      if (window.innerWidth >= 800) {
        taskGrid.showBy(Ext.Viewport , 'c-c');
      }
      else{
        taskGrid.showBy();
      }
      taskGrid.getController().populateTaskViewForAdmin();
    }

});
