import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";
import {Rating} from "../Rating/Rating";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("Accordion mode")
const onClicked = action("Some item was clicked")

export const CollapsedMode = () => {
    return <Accordion
        onClick={onClicked}
        value={"Menu"}
        collapsed={false}
        onChange={callback}
        item={[]}/>
}
export const UnCollapsedMode = () => {
    return <Accordion
        onClick={onClicked}
        value={"Users"}
        collapsed={true}
        onChange={callback}
        item={
            [
                {title: "Egor", value: 1},
                {title: "Denis", value: 2},
                {title: "Dima", value: 3}
            ]
        }
    />
}

export const ChangeMode = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion
        onClick={onClicked}
        value={"About Us"}
        collapsed={value}
        onChange={() => setValue(!value)}
        item={
            [
                {title: "Egor", value: 1},
                {title: "Denis", value: 2},
                {title: "Dima", value: 3}
            ]
        }
    />
}






