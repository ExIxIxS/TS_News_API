import './sources.css';

export interface sourceItemObj {
    name: string;
    id: string;
}

class Sources {
    draw(data: sourceItemObj[]) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            (sourceClone.querySelector('.source__item-name') as Node).textContent = item.name;
            (sourceClone.querySelector('.source__item') as Element).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as Element).append(fragment);
    }
}

export default Sources;
