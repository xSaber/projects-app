export default class UserService {

    constructor (appParameters, localStorageService, $http) {
        'ngInject';

        this.appParameters = appParameters;
        this.localStorageService = localStorageService;
        this.$http = $http;
    }

    getLocalUser () {
        return this.localStorageService.get('user');
    }

    checkSessionValidity () {
        let user = this.localStorageService.get('user');

        if (!!user) {
            let { session, ...publicUser } = user;
            return this.$http.get(this.appParameters.baseApiUrl + '/session', { params: { session } })
                .then(() => publicUser);
        } else {
            return Promise.reject();
        }
    }

    getSession () {
        return this.$http.post(this.appParameters.baseApiUrl + '/signup')
            .then(response => response.data);
    }

    createUser (session) {
        return this.$http.get(this.appParameters.baseApiUrl + '/account', { params: { session } })
            .then(response => response.data);
    }

    saveSession (user) {
        let { session, ...publicUser } = user;
        this.localStorageService.set('user', user);
        return Promise.resolve(publicUser);
    }

};
