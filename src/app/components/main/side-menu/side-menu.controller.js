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

    $onChanges (changes) {
        if (!changes.projects.isFirstChange()) {
            this.selectProject(this.selectedProjectIndex);
            this.project = {};
        }
    }

    selectProject (index) {
        if (this.projects[index] !== undefined) {
            this.selectedProjectIndex = index;
            this.onProjectSelect({
                $event : {
                    project : this.projects[index]
                }
            });
        } else if (this.projects.length > 0) {
            this.selectProject(0)
        } else {
            this.onProjectSelect({
                $event : {
                    project : null
                }
            });
        }
    }

    openCreateProjectSidenav () {
        this.onOpenCreateProjectSidenav();
    }

}
