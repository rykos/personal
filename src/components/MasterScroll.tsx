import { Component, ReactNode } from "react";
import { Events, Link, scroller } from "react-scroll";

export class MasterScroll extends Component<{}, { activeSegment: string }> {
    lastPos: number = 0;
    segments: string[] = ["top", "skills", "projects"];
    // activeSegment: string = "top";
    isScrolling: boolean = false;

    constructor(p: any) {
        super(p);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.state = {
            activeSegment: "top"
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.wheelActive(false);
        Events.scrollEvent.register('begin', () => {
            this.isScrolling = true;
            console.log("begin");
        });
        Events.scrollEvent.register('end', () => {
            this.isScrolling = false;
            this.lastPos = window.scrollY;
            console.log("end");
        });
    }

    wheelActive(state: boolean) {
        if (state === false)
            window.addEventListener("wheel", this.handleWheel, { passive: false });
        else
            window.removeEventListener("wheel", this.handleWheel)
    }

    handleWheel(e: WheelEvent) {
        e.preventDefault();
        if (this.isScrolling) {
            return;
        }
        this.go(e.deltaY);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll(ev: Event) {
        if (this.isScrolling)
            return;

        this.go(window.scrollY - this.lastPos);

        this.lastPos = window.scrollY;
    }

    go(delta: number) {
        // Ignore js retardation
        if (Math.abs(delta) < 2)
            return;

        this.scaleSegment(delta);
        if (delta < 0) {
            scroller.scrollTo(this.state.activeSegment, {
                duration: 1500,
                delay: 100,
                ignoreCancelEvents: true,
                smooth: 'easeInOutQuint'
            })
        }
        else if (delta > 0) {
            scroller.scrollTo(this.state.activeSegment, {
                duration: 1500,
                delay: 100,
                ignoreCancelEvents: true,
                smooth: 'easeInOutQuint'
            })
        }
    }

    scaleSegment(direction: number) {
        this.isScrolling = true;
        let index = this.segments.findIndex(x => x == this.state.activeSegment);
        if (direction > 0)
            index++;
        else
            index--;

        if (index >= this.segments.length)
            index = this.segments.length - 1;
        if (index < 0)
            index = 0;

        // this.activeSegment = this.segments[index];
        this.setState({
            activeSegment: this.segments[index]
        })
    }

    backToTop() {
        if (!this.isScrolling)
            this.setState({
                activeSegment: this.segments[0]
            }, () => { this.go(-100) })
    }

    render(): ReactNode {
        return (
            <div className={`${this.state.activeSegment == this.segments[0] ? "opacity-0" : "opacity-75"} transition-all duration-1000 fixed w-12 h-12 bg-gray-500 border-2 border-opacity-75 border-gray-900 rounded p-3 z-50`} onClick={() => { this.backToTop() }} style={{
                bottom: "1rem",
                right: "1rem"
            }}>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330">
                    <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" />
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
            </div>
        )
    }
}