import { Component, ReactNode } from "react";
import { Element } from "react-scroll";
import bgImg from '../1.svg';
import 'animate.css'
import { SlidingArray } from "../components/SlidingArray";
import gitIcon from '../giticon.png'

export class TopSegment extends Component {
    render(): ReactNode {
        return (
            <div className="relative segment h-screen flex justify-center">
                <Element name="top" className="scroll-anchor" />
                {/*  */}
                <div className="absolute top-0 bg-gray-300 z-50 rounded-3xl overflow-hidden p-1" style={{height: "50px", width: "50px"}}>
                    <img src={gitIcon} className="" alt="" />
                </div>

                <div className="absolute w-full h-full selectDisable">
                    <img className="absolute selectDisable" src={bgImg} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" draggable="false" />
                    <img className="absolute transform rotate-180 selectDisable" src={bgImg} style={{ height: "100%", width: "100%", objectFit: "cover" }} draggable="false" alt="" />
                </div>
                <div className="text-4xl z-10 md:text-6xl flex flex-col justify-center">
                    <div className="group animate__animated animate__slideInLeft">
                        <div className=" group-hover:text-green-300 transition">Michał Rykowski</div>
                        <div className="group-hover:text-green-200 text-sm md:text-2xl italic">Fullstack Developer</div>
                        <SlidingArray></SlidingArray>
                    </div>
                </div>
            </div>
        )
    }

}