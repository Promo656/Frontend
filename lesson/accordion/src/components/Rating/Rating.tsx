import React from "react";

export type RatingValueType=0|1|2|3|4|5
export type PropsRating = {
    value: RatingValueType
    onChange: (value: RatingValueType) => void
}
export type PropsStar = {
    selected: boolean
    onChange:(value:RatingValueType)=>void
    value:RatingValueType
}

export function Rating(props: PropsRating) {
    return (
        <div>
            <Star selected={props.value > 0} onChange={props.onChange} value={0}/>
            <Star selected={props.value > 1} onChange={props.onChange} value={1}/>
            <Star selected={props.value > 2} onChange={props.onChange} value={2}/>
            <Star selected={props.value > 3} onChange={props.onChange} value={3}/>
            <Star selected={props.value > 4} onChange={props.onChange} value={4}/>

        </div>
    )
}

function Star(props: PropsStar) {
    return (
        <span onClick={() => props.onChange(props.value)}>
            {props.selected ? <b> star </b> : "star "}
        </span>
    )
}