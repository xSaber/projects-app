let _$mdSidenav = new WeakMap();
let _projectsService = new WeakMap();

export default class TaskContainerController {

    constructor($mdSidenav, projectsService) {
        'ngInject';

        // this.tasks = [];
        this.Task = {};
        this.selectedTask = {}

        _$mdSidenav.set(this, $mdSidenav);
        _projectsService.set(this, projectsService);
    }

    /**
     * Watches for project change, then fetches tasks for selected project.
     */
    $onChanges (changes) {
        console.log('changed in taskContainer')
        let projectsService = _projectsService.get(this);
        let { id } = changes.project.currentValue.Project;
        projectsService.getTasks(id).then(response => this.tasks = response.tasks)
    }

    /**
     * Clears task creation form, fires tasks count increment, closes sidenav.
     */
    taskCreated () {
        this.Task = {}
        this.onTaskAdd();
        this.toggleCreateTaskSidenav();
    }

    /**
     * Toggles sidenav to create a new task.
     */
    toggleCreateTaskSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('addTask').toggle().then(() => console.log('createtask toggled'));
    }

    /**
     * Creates new task and adds it to the current container.
     */
    createTask (task) {
        let projectsService = _projectsService.get(this);
        projectsService.createTask(task, this.project.Project).then((response) => {
            let createdTask = Object.assign({}, response.Task, task);
            this.tasks.unshift({ Task: createdTask });
            this.taskCreated();
        });
    }

    /**
     * Toggles sidenav to edit task.
     */
    toggleEditTaskSidenav (task = null) {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('editTask').toggle().then(() => console.log('edittask toggled'));
        if (task) {
            this.selectedTask = Object.assign({}, task);
        }
    }

    updateTask () {
        let projectsService = _projectsService.get(this);
        projectsService.updateTask(this.selectedTask).then((response) => {
            this.tasks = this.tasks.map(element => element.Task.id === response.Task.id ? Object.assign(element, response) : element);
            this.toggleEditTaskSidenav();
        });
    }

    removeTask () {
        let projectsService = _projectsService.get(this);
        projectsService.removeTask(this.selectedTask).then((response) => {
            this.tasks = this.tasks.filter(element => element.Task.id === this.selectedTask.id ? false : true);
            this.toggleEditTaskSidenav();
            this.onTaskRemove();
        })
    }

    completeTask(taskId) {
        let projectsService = _projectsService.get(this);
        projectsService.completeTask(taskId).then((response) => {
            this.tasks = this.tasks.filter(element => element.Task.id === taskId ? false : true);
            this.onTaskRemove()
        })
    }
}
