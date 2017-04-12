export default class ProjectsService {

    constructor (appParameters, $http, localStorageService) {
        'ngInject';

        this.appParameters = appParameters;
        this.$http = $http;
        this.localStorageService = localStorageService;
    }


    getTasks (projectId) {
        let { session } = this.localStorageService.get('user');
        let params = {
            session,
            project_id : projectId,
            paging_size : 10,
            paging_offset : 0
        }
        return this.$http.get(this.appParameters.baseApiUrl + '/tasks', { params })
            .then(response => response.data);
    }

    createTask (Task, project) {
        let { session } = this.localStorageService.get('user');
        let params = {
            session,
            Task,
            Project : { id : project.id }
        }
        return this.$http.post(this.appParameters.baseApiUrl + '/tasks/task', params)
            .then(response => response.data);
    }

    updateTask (Task) {
        let { session } = this.localStorageService.get('user');
        return this.$http.post(this.appParameters.baseApiUrl + '/tasks/task', { Task, session })
            .then(response => response.data);
    }

    removeTask (Task) {
        let { session } = this.localStorageService.get('user');
        return this.$http.delete(this.appParameters.baseApiUrl + '/tasks/task', { params : { task_id : Task.id, session } })
            .then(response => response.data);
    }

    completeTask (taskId) {
        let { session } = this.localStorageService.get('user');
        return this.$http.post(this.appParameters.baseApiUrl + '/tasks/complite', { Task : { id : taskId }, session })
            .then(response => response.data);
    }



    getProjects (session) {
        return this.$http.get(this.appParameters.baseApiUrl + '/projects', { params: { session } })
            .then(response => response.data);
    }

    createProject (Project) {
        let { session } = this.localStorageService.get('user');
        return this.$http.post(this.appParameters.baseApiUrl + '/projects/project', { Project, session })
            .then(response => response.data);
    }

    removeProject (Project) {
        let { session } = this.localStorageService.get('user');
        return this.$http.delete(this.appParameters.baseApiUrl + '/projects/project', { params : { project_id : Project.id, session } })
            .then(response => response.data);
    }

    editProject (Project) {
        let { session } = this.localStorageService.get('user');
        return this.$http.post(this.appParameters.baseApiUrl + '/projects/project', { Project, session })
            .then(response => response.data);
    }

};
