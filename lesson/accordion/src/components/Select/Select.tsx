import React from "react";

type SelectProps = {
    value:any
    onChange:(value:any)=>void
    item:ItemProps[]
}

type ItemProps={
    title:string
    value:any
}

export function Select(props: SelectProps) {
    return (
        <div>

        </div>
    )
}

