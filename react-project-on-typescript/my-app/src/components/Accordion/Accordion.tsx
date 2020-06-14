import React from "react";

type AccordionPropsType = {
    title: string
    collapsed:boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccTitle title={props.title}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccTitle title={props.title}/>
                <AccMenu/>
            </div>
        )
    }

}

type AccTitlePropsType = {
    title: string
}

function AccTitle(props: AccTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccMenu() {
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

export default Accordion