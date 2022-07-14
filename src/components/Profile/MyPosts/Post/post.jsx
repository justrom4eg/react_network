import classes from './post.module.css'

const post = (props) => {
    return (
        <div className={classes.items}>
            <div className={classes.ava}>
                <img src={props.img} alt="" />
            </div>
            <div className={classes.postInfo}>
                <span className={classes.postName}>{props.name}</span>
                <div className={classes.postText}>
                    <div className={classes.item}>{props.message}</div>
                </div>
                <span className={classes.likes}>Like {props.like}</span>
            </div>
        </div>
    )
}

export default post