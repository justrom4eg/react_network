import classes from './profile.module.css';
import MyPosts from './MyPosts/myPosts';

function profile() {
  return (
    <main className={classes.content}>
      <div className={classes.bgPhoto}></div>
      <div className={classes.mainInfo}>
        <div className={classes.avatarka}></div>
        <div className={classes.personalData}>
          <span className={classes.personName}>Jason Statham</span>
          <div className={classes.personInfo}>
            <span className={classes.personBirthday}>Birthday: 26 July</span>
            <span className={classes.personCity}>City: Shirebrook, England</span>
            <span className={classes.personHeight}>Height: 1.78 m</span>
            <span className={classes.personRelationship}>Partner: Rosie Huntington-Whiteley</span>
          </div>
        </div>
      </div>
      <MyPosts />
    </main>
  )
}

export default profile