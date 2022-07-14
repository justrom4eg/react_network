import classes from './post.module.css'

function post() {
    return (
        <div className={classes.items}>
            <img src="https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" alt="" />
            <div className={classes.item}>Post</div>
            <div>
                <span>Like 0</span>
            </div>
        </div>
    )
}

export default post