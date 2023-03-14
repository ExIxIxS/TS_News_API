import News from './news/news';
import Sources from './sources/sources';

interface sourceObj {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface sourceData {
    status: string;
    sources: sourceObj[];
}

type sourceItemObj = Pick<sourceObj, 'id' | 'name'>;

interface articleObj {
    source: sourceItemObj;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface articleData {
    status: string;
    totalResults: number;
    articles: articleObj[];
}

type drawNews = articleData | undefined;

type drawSources = sourceData | undefined;

export class AppView {
    private news;
    private sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: drawNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: drawSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
export { sourceItemObj, articleObj, articleData, sourceData };
