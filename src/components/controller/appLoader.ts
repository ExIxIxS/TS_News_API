import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bc57b4c27a204ba1b517de19140e9cd8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
