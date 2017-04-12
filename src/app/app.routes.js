import templateUrl from 'Views/main/main.html';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('base', {
            url: '/',
            views: {
                'body': {
                    templateUrl,
                    controller: 'MainController',
                    controllerAs: 'main',
                    bindToController: true
                }
            },
            resolve: {
                user: (userService) => {
                    'ngInject';

                    let user = {};

                    // check and verify if user exists
                    return userService.checkSessionValidity().then((response) => {
                        // return if verified
                        return response;
                    }).catch(() => {
                        // otherwise get session
                        return userService.getSession()
                            .then((response) => {
                                user.session = response.session;
                                return Promise.resolve(response.session)
                            })
                            // get user by session
                            .then(session => userService.createUser(session))
                            // save user and return
                            .then((response) => {
                                Object.assign(user, response.Account);
                                return userService.saveSession(user);
                            })
                            .catch((error) => {
                                throw error;
                            });
                    });
                },
                projects: (userService, projectsService, user) => {
                    'ngInject';

                    let session = userService.getLocalUser().session;
                    return projectsService.getProjects(session).then(response => response.projects);
                }
            }
        });
};
