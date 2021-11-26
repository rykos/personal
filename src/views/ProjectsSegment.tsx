import { Component, MouseEvent, ReactNode } from "react";
import { Element } from "react-scroll";
import ReactImageGallery from 'react-image-gallery'
import { ProjectButton } from "../components/ProjectButton";
import { IProject, projects } from "../models/projects";

interface ProjectsSegmentState {
    active: IProject;
}

export class ProjectsSegment extends Component<{}, ProjectsSegmentState> {
    images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

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
                    <div className="p-24 pt-4 flex flex-col text-2xl justify-center items-center md:flex-row">
                        {/* Text */}
                        <div className="flex flex-col mr-2 justify-center items-center" style={{width: "400px"}}>
                            <div className="text-2xl">{this.state.active.name}</div>
                            <div className="text-lg">
                                {this.state.active.description}
                            </div>
                        </div>
                        {/* Images */}
                        <div className="flex flex-col testing md:w-3/6">
                            <ReactImageGallery items={this.images} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}