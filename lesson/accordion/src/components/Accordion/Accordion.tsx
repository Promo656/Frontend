import React from "react";

type AccordionProps = {
    value: string
    collapsed: boolean
    onChange: () => void
    item:ItemProps[]
    onClick:(value:any)=>void
}
type AccordionTitleProps = {
    title: string
    onChange: () => void
}
type AccordionBodyProps={
    item:ItemProps[]
    onClick:(value:any)=>void
}
type SubTitleProps = {
    title: string
}
type ItemProps={
    title:string
    value:any
}

export function Accordion(props: AccordionProps) {
    return (
        <div>
            <AccordionTitle
                title={props.value}
                onChange={props.onChange}/>
            {props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
        </div>
    )
}

export function AccordionTitle(props: AccordionTitleProps) {
    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </div>
    )
}

export function SubTitle(props: SubTitleProps) {
    return (
        <div>
            <h4>{props.title}</h4>
        </div>
    )
}

export function AccordionBody(props:AccordionBodyProps) {
    return (
        <div>
            <ul>
                {props.item.map((i, index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}