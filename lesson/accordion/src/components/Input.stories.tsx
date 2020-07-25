import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Simulate} from "react-dom/test-utils";


export default {
    title: 'Input'
};

export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const Select = () => {
    let [parentValue, setParentValue] = useState<string | undefined>("3")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value={1}>Moskva</option>
        <option value={2}>Piter</option>
        <option value={3}>Sochi</option>
    </select>
}