import editProjectSidenavTemplateUrl from 'Views/main/sidenav-forms/edit-project-form.html';

export default class editProjectSidenav {

    constructor () {
        this.bindings = {
            project         : '<',
            onProjectEdit   : '&'
        }
        this.templateUrl = editProjectSidenavTemplateUrl;
        this.controllerAs = 'editProjectSidenav';
        this.controller = class EditProjectSidenavController {

            $onChanges (changes) {
                if (!changes.project.currentValue) {
                    return;
                }
                this.selectedProject = Object.assign({}, changes.project.currentValue.Project);
            }

            editProject (project) {
                this.onProjectEdit({ $event : { project } });
            }

        }

    }

}
