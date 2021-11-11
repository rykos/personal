import { Component, ReactNode } from "react";

interface SkillCategoryProps {
    title: string;
    skills: string[];
}

export class SkillCategory extends Component<SkillCategoryProps> {
    render(): ReactNode {
        return (
            <div className="flex flex-col justify-center mx-6 my-2">
                <div className="text-3xl">{this.props.title}</div>
                <ul className="list-disc list-inside text-xl">
                    {this.props.skills.map(x => {
                        return <li key={x} className="hover-underline-animation cursor-default">{x}</li>
                    })}
                </ul>
            </div>
        )
    }
}