import { Component, ReactNode } from "react";
import ReactImageGallery from "react-image-gallery";
import { IProject } from "../models/projects";
import { TechElement } from "./TechElement";

export class ProjectElement extends Component<{ active: IProject }> {
    render(): ReactNode {
        return (
            <div className="w-full flex justify-center">
                <div className="pt-4 flex flex-col text-2xl justify-center items-center md:flex-row md:p-24">
                    {/* Text */}
                    <div className="flex flex-col mr-2 justify-center items-center" style={{ width: "max(300px, 20%)" }}>
                        <div className="text-2xl">{this.props.active.name}</div>
                        <div className="text-lg">
                            {this.props.active.description}
                        </div>
                        {
                            this.props.active.tags &&
                            <div className="flex space-x-1 flex-wrap justify-center">
                                {this.props.active.tags.map((x, i) => {
                                    return <TechElement key={`${x}/${i}`} name={x} />
                                })}
                            </div>
                        }
                    </div>
                    {/* Images */}
                    <div className="flex flex-col rounded-t-3xl relative overflow-hidden w-full md:w-3/6">
                        <div className="testing">
                            <ReactImageGallery autoPlay={false} showPlayButton={false} lazyLoad={true} showThumbnails={false} items={this.props.active.images} />
                        </div>
                        {
                            (this.props.active.inDev) &&
                            <div className="absolute items-center justify-center flex h-10 top-1 right-0 text-sm transform rotate-45">
                                <div className="w-40 absolute h-6 bg-green-300 z-0"></div>
                                <div className="z-30 mr-2">dev</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}