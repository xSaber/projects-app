import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import ngMaterial from 'angular-material';
import angularLocalStorage from 'angular-local-storage';

import appConfig from './app.config';
import main from './components/main';
import parameters from './app.parameters.js';

import 'angular-material/angular-material.scss';
import 'Styles/styles.scss';

angular.module('projects-app', [uirouter, main, ngMaterial, angularLocalStorage])
    .constant('appParameters', parameters)
    .config(appConfig);
