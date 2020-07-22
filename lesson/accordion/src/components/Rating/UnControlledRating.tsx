import React, {useState} from "react";


type Props1 = {
    selected: boolean
    setRating: () => void
}
type Props2 = {
    selected: boolean
    setRating: () => void

}

export function UnControlledRating() {
    let [rating, setRating] = useState(0)
    return (
        <div>
            <Star selected={rating > 0} setRating={()=>setRating(1)}/>
            <Star selected={rating > 1} setRating={()=>setRating(2)} />
            <Star selected={rating > 2} setRating={()=>setRating(3)} />
            <Star selected={rating > 3} setRating={()=>setRating(4)} />
            <Star selected={rating > 4} setRating={()=>setRating(5)} />
        </div>
    )

}

function Star(props: Props2) {
    return (<span onClick={() => props.setRating()}>
            {props.selected ? <b> star </b> : "star "}
    </span>
    )
}
