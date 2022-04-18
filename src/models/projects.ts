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
        name: "Restaurant",
        description: "First project using angular, thats why it looks like that. Owner can easly adjust open times, manage dishes and view active orders.",
        images: GenPaths("./images/Restaurant", 11, ".jpg"),
        inDev: true
    },
    {
        name: "PostWork",
        description: "Platform for posting work offers and apply for them. Backend keeps track of all offers and displays latest changes.",
        images: GenPaths("./images/PostWork", 11, ".jpg")
    },
    {
        name: "AuctionHouse",
        description: "Platform made for game item transaction for games that have no in-game auction house. Transactions can only be done using server side currency to avoid long wait times and false buyouts.",
        images: GenPaths("./images/AuctionHouse", 8, ".jpg"),
        tags: ["C#", "Angular", "TypeScript", "ASP.NET", "PostgreSQL"]
    },
    {
        name: "BattleShips",
        description: "Battleship board game simulation between computers. Game algorithm is being processed on backend C# API, React works as UI that fetches game from API and displays it in user friendly way.",
        images: GenPaths("./images/Battleships", 2),
    },
    {
        name: "Portfolio",
        description: "You are looking at this project right now. It is made using React and Typescript, and hosted on my private server with configured Ngnix reversed proxy providing SSL certificate through LetsEncrypt.",
        images: PlaceHolder(),
    },
    {
        name: "My blog",
        description: `I wanted a highly customizable blog that is easy to read and where i can easily filter custom data from my posts, so I made this one. 
        It handles text, code, images and videos all of which are compressed into database`,
        tags: ["C#", "React", "Tailwind", "TypeScript", "ASP.NET", "PostgreSQL"],
        images: PlaceHolder(),
    },
    {
        name: "TestGround",
        description: "",
        images: PlaceHolder(),
    },
]