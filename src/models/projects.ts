export interface IProject {
    name: string;
    description: string;
    images: Images[]
}

export interface Images {
    original: string
}

export const projects: IProject[] = [
    {
        name: "Restaurant",
        description: "opis",
        images: [
            { original: "" },
            { original: "" }
        ]
    },
    {
        name: "Blacklist",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quibusdam et sit. Quod, rem minus temporibus cum molestias voluptatibus, sint nihil aliquam, eius officia ab magni pariatur totam rerum ipsam.",
        images: []
    },
    {
        name: "AuctionHouse",
        description: "opis",
        images: []
    },

]