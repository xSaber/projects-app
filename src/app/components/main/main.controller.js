let _projectsService = new WeakMap();
let _$mdSidenav = new WeakMap();
let _appService = new WeakMap();

export default class MainController {

    constructor(user, projects, projectsService, $mdSidenav, appService) {
        'ngInject';

        _projectsService.set(this, projectsService);
        _$mdSidenav.set(this, $mdSidenav);
        _appService.set(this, appService);

        this.user = user;
        this.projects = projects;
        this.newProject = {};
    }

    /**
     * Watches for project change, then fetches tasks for selected project.
     */
    selectProject (event) {
        this.project = event.project;
    }

    incrementTaskCount () {
        this.project.Project.task_count = (+this.project.Project.task_count + 1) + '';
    }

    decrementTaskCount () {
        this.project.Project.task_count = (+this.project.Project.task_count - 1) + '';
    }

    openCreateProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);
        let appService = _appService.get(this);

        if (!this.newProject.title) {
            appService.resetForm(this.createProjectForm);
        }
        $mdSidenav('createProject').open();
    }

    closeCreateProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);

        $mdSidenav('createProject').close();
    }

    createProject (project) {
        let projectsService = _projectsService.get(this);

        projectsService.createProject(project).then((response) => {
            let Project = Object.assign({ task_count : 0 }, project, response.Project);
            this.projects = this.projects.concat({ Project });
            this.newProject = {};
            this.closeCreateProjectSidenav();
        });
    }

    removeProject () {
        let projectsService = _projectsService.get(this);

        projectsService.removeProject(this.project.Project).then((response) => {
            this.projects = this.projects.filter(element => element.Project.id === this.project.Project.id ? false : true);
        });
    }

    openEditProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);

        $mdSidenav('editProject').open();
    }

    closeEditProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);

        $mdSidenav('editProject').close();
    }

    editProject (event) {
        let projectsService = _projectsService.get(this);

        projectsService.editProject(event.project).then((response) => {
            this.projects = this.projects.map((element) => {
                return element.Project.id === event.project.id
                    ? Object.assign({}, element, response)
                    : element;
            });
            this.closeEditProjectSidenav();
        });
    }
}
