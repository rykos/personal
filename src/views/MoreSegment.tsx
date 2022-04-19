import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

function Blog() {
    return (
        <div className="inline-block underline text-blue-400 cursor-pointer">
            <a href="https://blog.michal-rykowski.pl">
                blog
            </a>
        </div>
    )
}

const hiddenProjects = ["FaceBook scrapper", "S&F bot", "Tile painter", "Twitch chat bot", "Discord bot", "OpenGL engine"];

function PLACEHOLDER() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index + 1);
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [index]);

    return (
        <div className="inline-block text-center transform transition text-purple-500 bg-gray-200 rounded px-1 border" style={{width: "210px"}}>
            <TextTransition
                text={hiddenProjects[index % hiddenProjects.length]}
                springConfig={presets.wobbly}
                noOverflow={true}
            />
        </div>
    )
}

export function MoreSegment() {
    return (
        <div className="flex flex-col justify-center items-center my-4">
            <div className="text-3xl">
                More about
            </div>
            <div className="text-xl w-4/6">
                Im a fullstack software developer, I like to create things. Many of which are private tools like <PLACEHOLDER />
                I mainly specialize in backend development making stuff work, but I can also do frontend in React.
                If you would like to know what im currently doing in my free time you can check out my <Blog />.
            </div>
        </div>
    )
}