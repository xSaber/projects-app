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
            this.closeCreateProjectSidenav();
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

    openCreateProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('createProject').open();
    }

    closeCreateProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('createProject').close();
    }

    createProject (project) {
        this.onCreate({
            $event : { project }
        });
    }

}
