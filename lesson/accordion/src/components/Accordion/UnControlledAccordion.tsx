import React, {useState} from "react";

type Props1 = {
    value: string
    collapsed: boolean
}
type Props2 = {
    value: string
    setCollapsed:(value:boolean)=>void
    collapsed:boolean
}

export function UnControlledAccordion(props: Props1) {
    let [collapsed, setCollapsed]=useState(true)

    return (
        <div>
            <AccordionTitle value={props.value} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

export function AccordionTitle(props: Props2) {
    return (
        <div>
            <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.value}</h3>
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