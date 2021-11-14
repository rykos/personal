import { Component, ReactNode } from "react";
import { Element } from "react-scroll";
import bgImg from '../1.svg';
import 'animate.css'

export class TopSegment extends Component {
    render(): ReactNode {
        return (
            <div className="relative segment flex justify-center">
                <Element name="top" className="scroll-anchor" />
                <div className="absolute w-full h-full selectDisable">
                    <img className="absolute selectDisable" src={bgImg} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" draggable="false" />
                    <img className="absolute transform rotate-180 selectDisable" src={bgImg} style={{ height: "100%", width: "100%", objectFit: "cover" }} draggable="false" alt="" />
                </div>
                <div className="text-4xl z-10 md:text-6xl flex flex-col justify-center">
                    <div className="group animate__animated animate__slideInLeft">
                        <div className=" group-hover:text-green-300 transition">Michał Rykowski</div>
                        <div className="group-hover:text-green-200 text-sm md:text-2xl italic">Fullstack Developer</div>
                    </div>
                </div>
            </div>
        )
    }

}