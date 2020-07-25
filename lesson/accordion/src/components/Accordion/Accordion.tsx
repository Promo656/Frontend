import React from "react";

type Props1 = {
    value: string
    collapsed: boolean
    onChange: () => void
}
type Props2 = {
    title: string
    onChange: () => void
}
type Props3 = {
    title: string
}

export function Accordion(props: Props1) {
    return (
        <div>
            <AccordionTitle
                title={props.value}
                onChange={props.onChange}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

export function AccordionTitle(props: Props2) {
    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </div>
    )
}

export function SubTitle(props: Props3) {
    return (
        <div>
            <h4>{props.title}</h4>
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