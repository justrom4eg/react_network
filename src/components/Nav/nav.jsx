import classes from './nav.module.css';

const nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href='/profile'>Home</a>
            </div>
            <div className={classes.item}>
                <a href='/messages'>Messages</a>
            </div>
            <div className={classes.item}>
                <a href='/news'>News</a>
            </div>
            <div className={classes.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default nav