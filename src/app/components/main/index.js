import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularLocalStorage from 'angular-local-storage';

import MainController from './main.controller.js';
import SideMenuController from './side-menu/side-menu.controller.js';
import TaskSearchController from './task-search/task-search.controller.js';
import TaskContainerController from './task-container/task-container.controller.js';

import sideMenu from './side-menu/side-menu.component.js';
import taskSearch from './task-search/task-search.component.js';
import taskContainer from './task-container/task-container.component.js';
import editProjectSidenav from './sidenav-forms/edit-project-sidenav.component.js'

import UserService from './services/user.service.js';
import ProjectsService from './services/projects.service.js';


export default angular.module('app.main', [uirouter, ngMaterial, angularLocalStorage])
    .service('userService', UserService)
    .service('projectsService', ProjectsService)
    .controller('MainController', MainController)
    .controller('SideMenuController', SideMenuController)
    .controller('TaskSearchController', TaskSearchController)
    .controller('TaskContainerController', TaskContainerController)
    .component('sideMenu', new sideMenu())
    .component('taskSearch', new taskSearch())
    .component('taskContainer', new taskContainer())
    .component('editProjectSidenav', new editProjectSidenav())
    .name;
