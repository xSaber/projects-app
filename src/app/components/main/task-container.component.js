import taskContainerTemplateUrl from 'Views/main/task-container.html';

export default class taskContainer {

    constructor () {
        this.bindings = {
            project : '<',
            onTaskAdd : '&',
            onTaskRemove : '&'
        }
        this.controller = 'TaskContainerController as container';
        this.templateUrl = taskContainerTemplateUrl;
    }

}
