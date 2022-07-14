import classes from './personalInfo.module.css'

const personalInfo = () => {
    return (
        <div className={classes.mainInfo}>
            <div className={classes.avatarka}></div>
            <div className={classes.personalData}>
                <span className={classes.personName}>Jason Statham</span>
                <div className={classes.personInfo}>
                    <span className={classes.personBirthday}>Birthday: 26 July</span>
                    <span className={classes.personCity}>City: Shirebrook, England</span>
                    <span className={classes.personHeight}>Height: 1.78 m</span>
                    <span className={classes.personRelationship}>Partner: Rosie Huntington-Whiteley</span>
                    <span className={classes.status}>Status: REACT ONE LOVE!!!!</span>
                </div>
            </div>
        </div>
    )
}

export default personalInfo