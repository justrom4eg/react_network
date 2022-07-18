import classes from './messageItem.module.css'

const messageItem = (props) => {

    return (
        <div className={classes.itemDiv}>
            <span className={classes.itemSpan}>{props.text}</span>
        </div>
    )
}

export default messageItem