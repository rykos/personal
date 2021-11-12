import React, { RefObject } from "react";
import { Component, ReactNode } from "react";
import { vector2 } from "../models/vector2";

export class BackgroundFloatingElement extends Component {
    myref: RefObject<SVGSVGElement>;
    cp: vector2;
    op: vector2;
    dir: vector2;

    constructor(p: any) {
        super(p);
        this.myref = React.createRef();
        this.cp = new vector2(400, 400);
        this.op = new vector2(400, 400);
        this.dir = new vector2(Math.random(), Math.random());
    }

    componentDidMount() {
        setInterval(() => { this.tick() }, 15)
    }

    tick() {
        this.cp.x += this.dir.x;
        this.cp.y += this.dir.y;
        if (this.myref.current) {
            this.myref.current.style.top = this.cp.y + 'px';
            this.myref.current.style.left = this.cp.x + 'px';
        }
        console.log(this.cp.distanceTo(this.op));
        if (this.cp.distanceTo(this.op) > 100) {
            this.dir.reverse();
        }
    }

    render(): ReactNode {
        return (
            <svg ref={this.myref} version="1.1" height="40px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{
                position: "absolute",
                top: 100,
                left: 0,
                zIndex: -10
            }}
                viewBox="0 0 483.013 483.013">
                <path d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292
	L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926
	c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z"/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        )
    }
}