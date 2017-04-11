let _$mdSidenav = new WeakMap();

export default class TaskSearchController {

    constructor ($mdSidenav) {
        'ngInject';

        _$mdSidenav.set(this, $mdSidenav);
    }

    $onChanges (changes) {
        if (!changes.project.isFirstChange()) {
            this.selectedProject = {};
            this.closeEditProjectSidenav();
        }
    }

    openMenu ($mdMenu, event) {
        $mdMenu.open(event);
    }

    editProject (project) {
        this.onProjectEdit({ $event : { project } });
    }

    removeProject () {
        this.onProjectRemove();
    }

    openEditProjectSidenav (project = null) {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('editProject').open();
        if (project) {
            this.selectedProject = Object.assign({}, project);
        }
    }

    closeEditProjectSidenav () {
        let $mdSidenav = _$mdSidenav.get(this);
        $mdSidenav('editProject').close();
    }

}
