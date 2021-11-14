import { Component, ReactNode } from "react";
import { Element } from "react-scroll";

export class ProjectsSegment extends Component {
    render(): ReactNode {
        return (
            <div className="segment relative flex justify-center items-center" style={{
                minHeight: 1000
            }}>
                <Element name="projects" className="element" />
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
                        dupa
                    </div>
                </div>
            </div>
        )
    }
}