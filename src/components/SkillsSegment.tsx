import { Component, ReactNode } from "react";
import { SkillCategory } from "./SkillCategory";

export class SkillsSegment extends Component {

    bs: string[] = ["C#", "ASP.NET", ".Net", "PostgreSQL", "EF Core", "REST"]
    fs: string[] = ["React", "Angular", "HTML/CSS", "TS&JS", "Tailwind & Bootstrap"];
    os: string[] = ["Git", "Windows/Linux", "VSCode", "Postman", "Automatic tests"];

    render(): ReactNode {
        return (
            <div className="segment relative flex justify-center items-center" style={{
                minHeight: 1000
            }}>
                <div>
                    <div className="transform rotate-1 absolute" style={{
                        width: "200vw",
                        height: "10vh",
                        top: 0,
                        left: -20,
                        backgroundColor: "#B9B7BD"
                    }}></div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="items-start justify-between p-24 flex flex-col md:flex-row">
                        <SkillCategory title="Backend" skills={this.bs}></SkillCategory>
                        <SkillCategory title="Frontend" skills={this.fs}></SkillCategory>
                        <SkillCategory title="Other" skills={this.os}></SkillCategory>
                    </div>
                </div>
            </div>
        )
    }
}