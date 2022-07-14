import classes from './post.module.css'

function post(props) {
    return (
        <div className={classes.items}>
            <img src={props.img} alt="" />
            <span>{props.name}</span>
            <div className={classes.item}>{props.message}</div>
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    )
}

export default post