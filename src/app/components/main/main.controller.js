let _projectsService = new WeakMap();

export default class MainController {

    constructor(user, projects, projectsService) {
        'ngInject';

        _projectsService.set(this, projectsService);

        this.user = user;
        this.projects = projects;
    }

    selectProject (event) {
        this.project = event.project;
    }

    incrementTaskCount () {
        this.project.Project.task_count = (+this.project.Project.task_count + 1) + '';
    }

    decrementTaskCount () {
        this.project.Project.task_count = (+this.project.Project.task_count - 1) + '';
    }

    createProject (event) {
        let projectsService = _projectsService.get(this);
        projectsService.createProject(event.project).then((response) => {
            let newProject = Object.assign({ task_count : 0 }, event.project, response.Project);
            this.projects = this.projects.concat({ Project : newProject });
        });
    }

    removeProject () {
        let projectsService = _projectsService.get(this);
        projectsService.removeProject(this.project.Project).then((response) => {
            this.projects = this.projects.filter(element => element.Project.id === this.project.Project.id ? false : true);
        });
    }

    editProject (event) {
        let projectsService = _projectsService.get(this);
        projectsService.editProject(event.project).then((response) => {
            this.projects = this.projects.map(element => element.Project.id === event.project.id ? Object.assign({}, element, response) : element);
        });
    }
}
