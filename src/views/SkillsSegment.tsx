import { Component, ReactNode } from "react";
import { Element } from "react-scroll";
import { SkillCategory } from "../components/SkillCategory";
import ico1 from '../assets/ico1.svg'
import ico2 from '../assets/ico2.svg'
import ico3 from '../assets/ico3.svg'

export class SkillsSegment extends Component {

    bs: string[] = ["C#", "ASP.NET", ".Net", "EF Core", "PostgreSQL", "SQLite", "REST"]
    fs: string[] = ["React", "Angular", "HTML&CSS", "SCSS", "TS&JS", "Tailwind", "Bootstrap"];
    os: string[] = ["Git", "Windows & Linux", "VSCode", "Postman", "Automatic tests"];

    back_devTools = ["pgAdmin", "Postman", "Jmeter"];
    front_devTools = ["SCSS", "Lighthouse"];
    other_devTools = ["Docker", "Jira"];

    render(): ReactNode {
        return (
            <div className="segment relative flex flex-grow justify-center items-center pt-52" style={{
                // minHeight: 1000
            }}>
                <Element name="skills" className="scroll-anchor" />
                <div>
                    <div className="transform rotate-1 shadow-2xl absolute top-0 left-[-20px]" style={{
                        width: "200vw",
                        height: "10vh",
                        backgroundColor: "#B9B7BD"
                    }}></div>
                    {/* bg-gradient-to-b from-gray-400 to-gray-50 */}
                    <div className="transform w-full absolute bg-gray-200 top-0 h-3/6" style={{ zIndex: -10 }}>

                    </div>
                </div>
                <div className="w-full flex justify-center mt-24 mb-24 align-bottom">
                    <div className="items-start bg-white items-center flex flex-col border shadow rounded-2xl md:flex-row">
                        <SkillCategory icon={ico1} i={0} title="Backend" skills={this.bs} devTools={this.back_devTools}></SkillCategory>
                        <div className="w-full border-t md:w-0 md:h-full md:border-r"></div>
                        <SkillCategory icon={ico2} i={1} title="Frontend" skills={this.fs} devTools={this.front_devTools}></SkillCategory>
                        <div className="w-full border-t md:w-0 md:h-full md:border-r"></div>
                        <SkillCategory icon={ico3} i={2} title="Other" skills={this.os} devTools={this.other_devTools}></SkillCategory>
                    </div>
                </div>
            </div>
        )
    }
}