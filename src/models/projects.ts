import { GenPaths } from './../components/GenPaths';
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
        images: GenPaths("./images/Restaurant", 11, ".jpg")
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
        tags: ["C#", "Angular", "TypeScript", "ASP.NET", "PostgreSQL","ASP.NET", "PostgreSQL"]
    },
    {
        name: "BattleShips",
        description: "Battleship board game simulation between computers. Game algorithm is being processed on backend C# API, React works as UI that fetches game from API and displays it in user friendly way.",
        images: GenPaths("./images/Battleships", 2),
        inDev: true
    },
]