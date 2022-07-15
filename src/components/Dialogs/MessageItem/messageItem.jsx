import classes from './messageItem.module.css'

const messageItem = (props) =>{

    return (
        <div className={classes.item}>
            {props.text}
        </div>
    )
}

export default messageItem