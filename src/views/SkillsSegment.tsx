import { SkillCategory } from "../components/SkillCategory";
import ico1 from '../assets/ico1.svg'
import ico2 from '../assets/ico2.svg'
import ico3 from '../assets/ico3.svg'
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const SkillsSegment = () => {

    const bs: string[] = ["C#", "ASP.NET", ".Net", "EF Core", "PostgreSQL", "SQLite", "REST"]
    const fs: string[] = ["React", "Angular", "HTML&CSS", "SCSS", "TS&JS", "Tailwind", "Bootstrap"];
    const os: string[] = ["Git", "Windows & Linux", "VSCode", "Postman", "Automatic tests"];

    const back_devTools = ["pgAdmin", "Postman", "Jmeter"];
    const front_devTools = ["Lighthouse"];
    const other_devTools = ["Docker", "Jira"];

    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <div ref={ref} className="segment relative flex flex-grow justify-center items-center pt-12 overflow-hidden">
            <div>
                {/* Tilted stripe */}
                <div className="transform rotate-1 shadow-2xl absolute top-0 left-[-20px]" style={{
                    width: "200vw",
                    height: "10vh",
                    backgroundColor: "#B9B7BD",
                    zIndex: 1
                }}></div>
                {/* Background */}
                <div className="transform w-full absolute bg-gray-200 top-0 h-3/6" style={{ zIndex: -10 }}></div>
            </div>
            <div className="w-full flex justify-center mt-24 mb-24 align-bottom">
                <div className={classNames("opacity-0 animate__animated bg-white items-center flex flex-col md:flex-row border shadow rounded-2xl",
                                    { "animate__bounceInDown": inView }, { "opacity-100": inView })}>
                    <SkillCategory icon={ico1} i={0} title="Backend" skills={bs} devTools={back_devTools}></SkillCategory>
                    <div className="w-full border-t md:w-0 md:h-full md:border-r"></div>
                    <SkillCategory icon={ico2} i={1} title="Frontend" skills={fs} devTools={front_devTools}></SkillCategory>
                    <div className="w-full border-t md:w-0 md:h-full md:border-r"></div>
                    <SkillCategory icon={ico3} i={2} title="Other" skills={os} devTools={other_devTools}></SkillCategory>
                </div>
            </div>
        </div>
    )
}