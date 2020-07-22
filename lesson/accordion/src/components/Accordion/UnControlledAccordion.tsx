import React, {useState} from "react";

type Props1 = {
    value: string
    collapsed: boolean
}
type Props2 = {
    value: string
}

export function UnControlledAccordion(props: Props1) {
    let [collapsed, setCollapsed]=useState(true)

    return (
        <div>
            <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>
            <AccordionTitle value={props.value}/>
            {collapsed && <AccordionBody/>}
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