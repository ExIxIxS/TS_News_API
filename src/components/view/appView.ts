import News from './news/news';
import Sources from './sources/sources';

interface articleObj {
    source: {
        id: string;
        name: string;
    };
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

export class AppView {
    news;
    sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: articleData | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourceData | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
