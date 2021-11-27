import { Component, MouseEvent, ReactNode } from "react";
import { Element } from "react-scroll";
import ReactImageGallery from 'react-image-gallery'
import { ProjectButton } from "../components/ProjectButton";
import { IProject, projects } from "../models/projects";

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
                <div className="w-full flex justify-center">
                    <div className="pt-4 flex flex-col text-2xl justify-center items-center md:flex-row md:p-24">
                        {/* Text */}
                        <div className="flex flex-col mr-2 justify-center items-center" style={{ width: "max(300px, 20%)" }}>
                            <div className="text-2xl">{this.state.active.name}</div>
                            <div className="text-lg">
                                {this.state.active.description}
                            </div>
                            {
                                this.state.active.tags &&
                                <div className="flex space-x-1 flex-wrap justify-center">
                                    {this.state.active.tags.map((x, i) => {
                                        return <div key={`${x}/${i}`} className="text-sm border rounded-2xl py-1 px-2 cursor-default mt-1 hover:border-yellow-300">{x}</div>
                                    })}
                                </div>
                            }
                        </div>
                        {/* Images */}
                        <div className="flex flex-col testing rounded-t-3xl relative overflow-hidden w-full md:w-3/6">
                            <ReactImageGallery showThumbnails={false} items={this.state.active.images} />
                            {
                                (this.state.active.inDev) &&
                                <div className="absolute items-center justify-center flex h-10 top-0 right-0 text-sm transform rotate-45">
                                    <div className="w-40 absolute h-6 bg-green-300 z-0"></div>
                                    <div className="z-30">Dev</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}