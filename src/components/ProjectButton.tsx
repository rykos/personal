import { Component, ReactNode } from "react";
import { IProject } from "../models/projects";

export class ProjectButton extends Component<{
    project: IProject,
    active: IProject,
    click: any
}> {
    render(): ReactNode {
        return (
            <div className={`project-element ${this.props.active === this.props.project ? "bg-gray-400" : ""}`} onClick={this.props.click}>{this.props.project.name}</div>
        )
    }
}