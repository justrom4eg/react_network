import { NavLink } from 'react-router-dom'
import classes from './contactItem.module.css'

const contactItem = (props) => {

    const setActive = navActive => navActive.isActive ? classes.active : ""
    let path = "/messages/" + props.id

    return (
        <div className={classes.item}>
            <NavLink className={setActive} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default contactItem