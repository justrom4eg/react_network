import { NavLink } from 'react-router-dom'
import classes from './contactItem.module.css'

const contactItem = (props) => {

    const setActive = navActive => navActive.isActive ? classes.active : ""
    let path = "/messages/" + props.id

    return (
        <div className={classes.item}>
            <NavLink className={setActive} to={path}>
                <span className={classes.imgContact}>
                    <div>
                        <img src={props.img} alt="" />
                        {props.name}
                    </div>
                </span>
            </NavLink>
        </div>
    )
}

export default contactItem