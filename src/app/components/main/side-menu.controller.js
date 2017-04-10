let _$mdSidenav = new WeakMap();
let _projectsService = new WeakMap();

export default class SideMenuController {

    constructor ($mdSidenav, projectsService) {
        'ngInject';

        _$mdSidenav.set(this, $mdSidenav);
        _projectsService.set(this, projectsService);
    }

    $onInit () {
        if (this.projects.length > 0) {
            this.selectProject(0);
        }
    }

    selectProject (index) {
        if (this.projects[index] !== undefined) {
            this.selectedProjectIndex = index;
            this.onSelect({
                $event : {
                    project : this.projects[index]
                }
            });
        }
    }

    toggleCreateProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('createProject').toggle().then(() => console.log('createProject toggled'));
    }

    createProject (project) {
        let projectsService = _projectsService.get(this);
        projectsService.createProject(project).then((response) => {
            let newProject = Object.assign({ task_count : 0 }, project, response.Project);
            this.projects.push({ Project : newProject });
            this.project = {};
            this.toggleCreateProjectSidenav();
        });
    }

    

}
