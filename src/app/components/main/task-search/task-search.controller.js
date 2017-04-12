let _$mdSidenav = new WeakMap();

export default class TaskSearchController {

    constructor ($mdSidenav) {
        'ngInject';

        _$mdSidenav.set(this, $mdSidenav);
    }

    openMenu ($mdMenu, event) {
        $mdMenu.open(event);
    }

    removeProject () {
        this.onProjectRemove();
    }

    createProject (project) {
        this.onCreate({ $event : { project } });
    }

    openEditProjectSidenav (project = null) {
        this.onOpenEditProjectSidenav();
    }

}
