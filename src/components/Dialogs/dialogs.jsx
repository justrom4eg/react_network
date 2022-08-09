import React from 'react';
import classes from './dialogs.module.css';
import ContactItem from './ContactItem/contactItem';
import MessageItem from './MessageItem/messageItem';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/dialogReducer'

const dialogs = (props) => {
    console.log(props)

    let dialogsElement = props.contactData.map(dialog => <ContactItem name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messageElement = props.messageData.map(message => <MessageItem text={message.message} id={message.id} />)

    let messageArea = React.createRef()

    let text = () => {
        if (props.newMessageText !== "") {
            props.dispatch(addMessageActionCreator())
            props.dispatch(updateNewMessageActionCreator(""))
        }
    }

    let onChangeMessage = () => {
        let text = messageArea.current.value
        props.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <div className={classes.content}>
            <div className={classes.contact}>
                {dialogsElement}
            </div>
            <div className={classes.message}>
                <div>
                    {messageElement}
                </div>
                <div>
                    <textarea onChange={onChangeMessage} className={classes.textarea} ref={messageArea} value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={text}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default dialogs