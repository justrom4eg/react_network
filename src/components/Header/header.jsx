import classes from './header.module.css';

const header = () => {
    return (
        <header className={classes.header}>
            <img src='http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png'></img>
            <span className={classes.logoSpan}>Social React World</span>
        </header>
    )
}

export default header