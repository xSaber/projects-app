export default class AppService {

    resetForm (form) {
        form.$setUntouched();
        form.$setPristine();
    }

};
