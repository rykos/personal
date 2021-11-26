import { Component, ReactNode } from "react";
import 'animate.css'

interface SkillCategoryProps {
    title: string;
    skills: string[];
    devTools?: string[] | undefined;
    i: number;
    icon: string | undefined;
}

export class SkillCategory extends Component<SkillCategoryProps> {
    render(): ReactNode {
        let devtools;
        if (this.props.devTools)
            devtools = <div>
                <div className="mt-5 text-md font-bold">Dev tools</div>
                <div>
                    {
                        this.props.devTools?.map(x => {
                            return <div key={x}>
                                {x}
                            </div>
                        })
                    }
                </div>
            </div>;
        return (
            <div className="flex flex-col items-center h-full relative p-10 text-center" style={{ flexBasis: "300px" }}>
                <img src={this.props.icon} alt="" width="70em" className="stroke-current text-purple-600" />
                <div className="text-3xl text-center cursor-default z-10 font-bold mb-5">{this.props.title}</div>
                <ul className="list-disc list-inside text-xl">
                    {this.props.skills.map(x => {
                        return <div key={x} className="hover-underline-animation cursor-default">
                            {x}
                            <div className="w-full border-t"></div>
                        </div>
                    })}
                </ul>
                {devtools}
            </div>
        )
    }
}