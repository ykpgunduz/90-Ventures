//define interface for PageParams props
export interface PageParamsProps {
    params: Promise<{ id?: number | string; slug?: string }>;
}
// Fetch the data based on the provided 'id' prop
export interface IdProps {
    id?: number | string;
};

//define interface for prop type
export interface offcanvasIProps {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
    bgClassName?: string
};
//define interface for image DT
export interface ImageDT {
    id: number,
    imgSrc: string
}

//define interface for award data DT
export interface bgColorPropsDt {
    sectionBgColor?: string;
}

export interface blogDt {
    id: number;
    title: string;
    image: string;
    date: string;
    authorImg: string;
    authorName: string;
    comment?: number;
    tags?: string[];
    type?: string;
    desc?: string;
    designation?: string;
    videoId?: string;
    images?: string[];
    category?: string;
};
