import { Component, ReactNode } from "react";
import { Events, scroller } from "react-scroll";
import { scrollTo } from "react-scroll/modules/mixins/scroller";

export class MasterScroll extends Component {
    lastPos: number = 0;
    segments: string[] = ["top", "skills"];
    activeSegment: string = "top";
    isScrolling: boolean = false;

    constructor(p: any) {
        super(p);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.wheelActive(false);
        Events.scrollEvent.register('begin', () => {
            this.isScrolling = true;
            // this.lastPos = window.scrollY;
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

        console.log("yep");

        this.go(window.scrollY - this.lastPos);

        this.lastPos = window.scrollY;
    }

    go(delta: number) {
        // Ignore js retardation
        console.log(delta);
        if (Math.abs(delta) < 2)
            return;
        if (delta < 0) {
            scroller.scrollTo('top', {
                duration: 1500,
                delay: 100,
                ignoreCancelEvents: true,
                smooth: 'easeInOutQuint'
            })
        }
        else if (delta > 0) {
            scroller.scrollTo('skills', {
                duration: 1500,
                delay: 100,
                ignoreCancelEvents: true,
                smooth: 'easeInOutQuint'
            })
        }
    }

    render(): ReactNode {
        return (
            <div></div>
        )
    }
}