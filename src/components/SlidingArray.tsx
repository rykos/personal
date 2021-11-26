import { Component, ReactNode } from "react";
import { animateCSS } from "./AnimateCSS";

export class SlidingArray extends Component {
    items = ["C#", "TypeScript", ".Net", "JavaScript", "PostgreSQL"];

    componentDidMount() {
        document.querySelector("#old")!.textContent = this.getItem(0);
        let i = 1;
        setInterval(() => {
            document.querySelector("#old")?.classList.remove("hidden");
            animateCSS("#old", "bounceOutRight").then(x => {
                document.querySelector("#old")?.classList.add("hidden");
                document.querySelector("#old")!.textContent = this.getItem(i);
            });

            document.querySelector("#new")!.textContent = this.getItem(i + 1);
            document.querySelector("#new")?.classList.remove("hidden");
            animateCSS("#new", "bounceInLeft").then(x => {
                document.querySelector("#new")?.classList.remove("hidden");
            });
            i++
        }, 3500);
    }

    getItem(i: number): string {
        i = i - (this.items.length * Math.floor(i / this.items.length));
        return this.items[i];
    }

    render(): ReactNode {
        return (
            <div className="text-xl">
                <div id="old" className="absolute animate__animated"></div>
                <div id="new" className="absolute animate__animated hidden"></div>
            </div>
        )
    }
}