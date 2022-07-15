import classes from './dialogs.module.css';
import Contact from './Contact/contact';
import Message from './Message/message';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const dialogs = () => {
    return (
            <div className={classes.content}>
                <div className={classes.contact}>
                    <Routes>
                        <Route path='/' element={<Contact name="Nata" />}/>
                        <Route path='/' element={<Contact name="Dima" />}/>
                        <Route path='/' element={<Contact name="Katia" />}/>
                    </Routes>
                </div>
                <div className={classes.message}>
                    <Message />
                    <Message />
                    <Message />
                </div>
            </div>
    )
}

export default dialogs