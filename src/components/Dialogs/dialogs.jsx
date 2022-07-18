import classes from './dialogs.module.css';
import ContactItem from './ContactItem/contactItem';
import MessageItem from './MessageItem/messageItem';

const dialogs = (props) => {

    let dialogsElement = props.contactData.map(dialog => <ContactItem name={dialog.name} id={dialog.id} />)

    let messageElement = props.messageData.map(message => <MessageItem text={message.message} id={message.id} />)

    return (
        <div className={classes.content}>
            <div className={classes.contact}>
                {dialogsElement}
            </div>
            <div className={classes.message}>
                {messageElement}
            </div>
        </div>
    )
}

export default dialogs