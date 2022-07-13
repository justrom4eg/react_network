import classes from './profile.module.css';

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

      <div>New post</div>
      <div className={classes.items}>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 2</div>
      </div>
    </main>
  )
}

export default profile