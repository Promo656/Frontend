import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";
import {Rating} from "../Rating/Rating";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback=action("Accordion mode")

export const CollapsedMode= () => {
    return <Accordion value={"About Us"} collapsed={false} onChange={callback}/>
}
export const UnCollapsedMode= () => {
    return <Accordion value={"About Us"} collapsed={true} onChange={callback}/>
}

export const ChangeMode = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion value={"About Us"} collapsed={value} onChange={()=>setValue(!value)}/>
}






