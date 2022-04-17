import { Component, ReactNode } from "react";

export class ContactSegment extends Component {
    render(): ReactNode {
        return (
            <div className="flex justify-between border-t text-gray-500 bg-gray-50 text-sm p-2">
                <div className="">
                    {/* Stuff im doing right now */}
                </div>
                <div className="text-right">
                    <div>Contact info</div>
                    <div>
                        michal.rykowski.dev@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}