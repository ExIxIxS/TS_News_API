import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2910f32fafd74f1bba963220e2144693', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
