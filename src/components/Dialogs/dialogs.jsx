import classes from './dialogs.module.css';
import ContactItem from './ContactItem/contactItem';
import MessageItem from './MessageItem/messageItem';

const dialogs = () => {
    return (
            <div className={classes.content}>
                <div className={classes.contact}>
                    <ContactItem name="Nata" id="1"/>
                    <ContactItem name="Dima" id="2"/>
                    <ContactItem name="Katia" id="3"/>
                    <ContactItem name="Nazar" id="4"/>
                    <ContactItem name="Ira" id="5"/>
                    <ContactItem name="Ivan" id="6"/>
                </div>
                <div className={classes.message}>
                    <MessageItem text="Hello"/>
                    <MessageItem text="Hi!"/>
                    <MessageItem text="How are you?"/>              
                </div>
            </div>
    )
}

export default dialogs