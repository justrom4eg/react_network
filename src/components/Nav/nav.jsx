import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';
import Sidebar from './Sidebar/sidebar';

const setActive = navActive => navActive.isActive ? classes.active : ""

const nav = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={setActive}>Home</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages' className={setActive}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={setActive}>Settings</NavLink>
            </div>
            <div className={classes.sidebar}>
                <Sidebar contactData={props.contactData} />
                <Sidebar contactData={props.contactData} />
                <Sidebar contactData={props.contactData} />
            </div>
        </nav>
    )
}

export default nav