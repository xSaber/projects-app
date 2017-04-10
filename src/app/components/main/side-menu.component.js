import sideMenuTemplateUrl from 'Views/main/side-menu.html';

export default class sideMenu {

    constructor () {
        this.bindings = {
            user: '<',
            projects: '=',
            onSelect: '&'
        }
        this.controller = 'SideMenuController as menu';
        this.templateUrl = sideMenuTemplateUrl;
    }
}
