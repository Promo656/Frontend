import React from "react";

function Accordion(props:any) {
    return (
        <div>
            <AccTitle title={props.title}/>
            <AccMenu/>
        </div>
    )
}

function AccTitle(props:any) {
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