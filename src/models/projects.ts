import { GenPaths, PlaceHolder } from './../components/GenPaths';
export interface IProject {
    name: string;
    description: string;
    images: Images[];
    inDev?: boolean;
    tags?: string[];
}

export interface Images {
    original: string
}

export const projects: IProject[] = [
    {
        name: "My blog",
        description: `I wanted a highly customizable blog that is easy to read and where i can easily filter custom data from my posts, so I made this one. 
        It handles text, code, images and videos all of which are compressed into database`,
        tags: ["C#", "React", "Tailwind", "TypeScript", "ASP.NET", "PostgreSQL"],
        images: GenPaths("./images/My blog", 3, ".png"),
    },
    {
        name: "Portfolio",
        description: `You are looking at this project right now. 
        It is made using React and Typescript, and hosted on my private server with configured Ngnix reversed proxy providing SSL certificate through LetsEncrypt.`,
        tags: ["React", "Tailwind", "TypeScript"],
        images: GenPaths("./images/Portfolio", 1, ".png"),
    },
    {
        name: "Auction House",
        description: `Platform made for in-game item transaction, designed for games that have no in-game auction house.`,
        images: GenPaths("./images/AuctionHouse", 8, ".jpg"),
        tags: ["C#", "Angular", "TypeScript", "ASP.NET", "PostgreSQL"]
    },
    {
        name: "TOD CMS",
        description: `Content managment tools for my games. Including custom node driven system handling items, characters, quests, etc.`,
        tags: ["C#", "React", "Tailwind", "TypeScript", "ASP.NET", "PostgreSQL"],
        images: GenPaths("./images/TOD CMS", 1, ".png"),
    },
    {
        name: "BattleShips",
        description: `Battleship board game simulation between computers.
             Game algorithm is being processed on backend C# API, React works as UI that fetches game from API and displays it in user friendly way.`,
        tags: ["C#", "React", "Tailwind", "TypeScript", "ASP.NET"],
        images: GenPaths("./images/Battleships", 2),
    },
    {
        name: "PostWork",
        description: "Platform for job offers. Backend keeps track of all offers and displays latest changes.",
        tags: ["C#", "React", "Bootstrap", "TypeScript", "ASP.NET", "MySql"],
        images: GenPaths("./images/PostWork", 11, ".jpg")
    },
    // {
    //     name: "TestGround",
    //     description: "",
    //     images: PlaceHolder(),
    // },
]