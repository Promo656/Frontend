import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from "./onOff";
import {Rating} from "../Rating/Rating";

export default {
    title: 'OnOff',
    component: OnOff
};

const callback=action("on or off clicked")

export const OnMode= () => <OnOff on={true} onChange={callback}/>
export const OffMode= () => <OnOff on={false} onChange={callback}/>
export const ChangeMode = () => {
    let [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}





