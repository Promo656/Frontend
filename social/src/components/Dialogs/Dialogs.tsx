import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";
import {AppStateType, DialogsType} from "../../Redux/state";

type PropsType = {
    state: AppStateType
}

export function Dialogs(props: PropsType) {

    let chatItem = props.state.chatPgage.dialogs.map((d) => <DialogItem key={d.id} dialog={d}/>)
    let messageItem = props.state.chatPgage.messages.map((m) => <Message key={m.id} message={m}/>)

    let newTextElement=React.createRef<HTMLInputElement>()

    let addMessage = () => {
        if(newTextElement.current){
            let text=newTextElement.current.value
            alert(text)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {chatItem}
            </div>
            <div className={s.message}>
                {messageItem}
                <input type="text" ref={newTextElement}/>
                <input type="button" value="sent"  onClick={addMessage}/>
            </div>
        </div>
    )
}