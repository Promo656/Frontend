import React from "react";
import {TasksList} from "../../../../../social/src/components/homework/02-Tasks/TasksList";
type Props={
    value:number
}
export function Rating(props: Props) {
    return (
        <div>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>
        </div>
    )

}

function Star(props: any) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}