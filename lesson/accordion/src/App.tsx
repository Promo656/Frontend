import React, {useState} from 'react';
import {Accordion, SubTitle} from "./components/Accordion/Accordion";
import {PropsRating, Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/onOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

function AppTitle(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}

export function App() {

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [toggle,setToggle]=useState<boolean>(true)
    let [rating,setRating]=useState<RatingValueType>(0)

    return (
        <div>
            <AppTitle title="This is APP component"/>
            <SubTitle title={"Controlled Accordion + useState"}/>
            <Accordion
                value="Menu"
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
            />
            <SubTitle title={"Uncontrolled Accordion"}/>
            <UnControlledAccordion value={"Menu"} collapsed={true}/>
            <UnControlledAccordion value={"Users"} collapsed={true}/>
            <SubTitle title={"Controlled Rating + useState"}/>
            <Rating value={rating} onChange={setRating}/>
            <SubTitle title={"Uncontrolled Rating"}/>
            <UnControlledRating/>
            <SubTitle title={"Controlled Toggle"}/>
            <OnOff on={toggle} onChange={setToggle}/>
        </div>
    );
}

