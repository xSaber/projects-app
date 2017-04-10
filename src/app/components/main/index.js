import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularLocalStorage from 'angular-local-storage';

import routes from './main.routes.js';

import MainController from './main.controller.js';
import SideMenuController from './side-menu.controller.js';
import TaskSearchController from './task-search.controller.js';
import TaskContainerController from './task-container.controller.js';

import sideMenu from './side-menu.component.js';
import taskSearch from './task-search.component.js';
import taskContainer from './task-container.component.js';

import UserService from './user.service.js';
import ProjectsService from './projects.service.js';


export default angular.module('app.main', [uirouter, ngMaterial, angularLocalStorage])
    .config(routes)
    .service('userService', UserService)
    .service('projectsService', ProjectsService)
    .controller('MainController', MainController)
    .controller('SideMenuController', SideMenuController)
    .controller('TaskSearchController', TaskSearchController)
    .controller('TaskContainerController', TaskContainerController)
    .component('sideMenu', new sideMenu())
    .component('taskSearch', new taskSearch())
    .component('taskContainer', new taskContainer())
    .name;
