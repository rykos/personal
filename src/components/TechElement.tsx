import React from "react"

export interface ITechElementProps{
    name: string;
}

export const TechElement: React.FC<ITechElementProps> = (props: ITechElementProps) => {
    return (
        <div className="text-sm border rounded-2xl py-1 px-2 cursor-default mt-1 bg-white border-gray-400 hover:border-yellow-300 hover:bg-yellow-100">{props.name}</div>
    )
}