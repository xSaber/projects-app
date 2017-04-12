import taskSearchTemplateUrl from 'Views/main/task-search.html';

export default class taskSearch {

    constructor () {
        this.bindings = {
            project         : '<',
            onProjectRemove : '&',
            onOpenEditProjectSidenav : '&',
            onProjectCreate   : '&'
        }
        this.controller = 'TaskSearchController as search';
        this.templateUrl = taskSearchTemplateUrl;
    }

}
