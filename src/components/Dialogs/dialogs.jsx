import classes from './dialogs.module.css';
import ContactItem from './ContactItem/contactItem';
import MessageItem from './MessageItem/messageItem';

const dialogs = () => {

    let contactData = [
        {name: "Nata", id: 0},
        {name: "Dima", id: 1},
        {name: "Katia", id: 2},
        {name: "Nazar", id: 3},
        {name: "Ira", id: 4},
        {name: "Ivan", id: 5}
    ];

    let dialogsElement = contactData.map( (dialog) => <ContactItem name={dialog.name} id={dialog.id}/>)

    let messageData = [
        {message: "Hello", id:0},
        {message: "Hi!", id:1},
        {message: "How are you?", id:2}
    ]

    let messageElement = messageData.map(message => <MessageItem text={message.message} id={message.id}/>)

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