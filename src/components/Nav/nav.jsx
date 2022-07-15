import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';

const setActive = navActive => navActive.isActive ? classes.active : ""

const nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className = {setActive}>Home</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages'className = {setActive}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'className = {setActive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'className = {setActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'className = {setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default nav