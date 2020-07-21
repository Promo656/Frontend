import React from "react";

type Props1 = {
    value: string
    collapsed: boolean
}
type Props2 = {
    value: string
}

export function Accordion(props: Props1) {
    return (
        <div>
            <AccordionTitle value={props.value}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

export function AccordionTitle(props: Props2) {
    return (
        <div>
            <h3>{props.value}</h3>
        </div>
    )
}

export function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}