interface Item {
    title: string;
    time: string;
    img: string;
    description?: string;
    path?: string;
}

interface Category {
    category: string;
    link: string;
    items: Item[];
}



export type {Item, Category};