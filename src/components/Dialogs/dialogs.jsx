import React from 'react';
import classes from './dialogs.module.css';
import ContactItem from './ContactItem/contactItem';
import MessageItem from './MessageItem/messageItem';

const dialogs = (props) => {

    let dialogsElement = props.contactData.map(dialog => <ContactItem name={dialog.name} id={dialog.id} img={dialog.img}/>)

    let messageElement = props.messageData.map(message => <MessageItem text={message.message} id={message.id} />)

    let messageArea = React.createRef()

    let text = ()=>{
        alert(messageArea.current.value)
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
                    <textarea name="" ref={messageArea} cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button onClick={text}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default dialogs