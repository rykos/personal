import { Component, MouseEvent, ReactNode } from "react";
import { Element } from "react-scroll";
import { ProjectButton } from "../components/ProjectButton";
import { IProject, projects } from "../models/projects";
import { ProjectElement } from "../components/ProjectElement";

interface ProjectsSegmentState {
    active: IProject;
}

export class ProjectsSegment extends Component<{}, ProjectsSegmentState> {
    projects = projects;

    constructor(p: any) {
        super(p);
        this.projectClick = this.projectClick.bind(this);
        this.state = {
            active: projects[0]
        };
    }

    projectClick(e: MouseEvent<HTMLDivElement>) {
        let text = (e.target as HTMLDivElement).innerText;
        let project = projects.find(x => x.name === text);
        if (project)
            this.setState({ active: project });
    }

    render(): ReactNode {
        return (
            <div className="relative flex flex-col justify-center items-center pt-16">
                <Element name="projects" className="element" />
                <div className="flex flex-wrap">
                    {this.projects.map(x => {
                        return <ProjectButton key={x.name} project={x} active={this.state.active} click={this.projectClick}></ProjectButton>
                    })}
                </div>
                <ProjectElement active={this.state.active}></ProjectElement>
            </div>
        )
    }
}