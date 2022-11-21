import { sourceData } from '../view/appView';

enum endpoint {
    'sources',
    'everything',
    'top-headlines',
}

interface apiKeyObj {
    apiKey: string;
}

interface sourceObj {
    sources: string;
}

interface getRespObj {
    endpoint: keyof typeof endpoint;
    options?: Partial<sourceObj>;
}

interface options {
    sources?: string;
}

type loadCallBack<Type> = (arg: Type) => void;

type errorCallBack = () => void;

class Loader {
    private baseLink;
    public readonly options;

    constructor(baseLink: string, options: apiKeyObj) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: getRespObj,
        callback: errorCallBack = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: options, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: loadCallBack<sourceData>, options: options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
