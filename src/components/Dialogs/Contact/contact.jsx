import { NavLink } from 'react-router-dom'
import classes from './contact.module.css'

const contact = (props) => {
    return (
        <div className={classes.contact}>
            <NavLink to='/messages'>{props.name}</NavLink>
        </div>
    )
}

export default contact