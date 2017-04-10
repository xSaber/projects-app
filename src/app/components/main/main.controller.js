let _$mdSidenav = new WeakMap();

export default class MainController {

    constructor($mdSidenav, user, projects) {
        'ngInject';

        _$mdSidenav.set(this, $mdSidenav);

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

    openMenu ($mdMenu, event) {
        $mdMenu.open(event);
    }
}
