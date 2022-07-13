import classes from './nav.module.css';

function nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href='#'>Home</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Messages</a>
            </div>
            <div className={classes.item}>
                <a href='#'>News</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}

export default nav