import classes from './profile.module.css';
import MyPosts from './MyPosts/myPosts';
import PersonalInfo from './PersonalInfo/personalInfo';

function profile() {
  return (
    <main className={classes.content}>
      <div className={classes.bgPhoto}></div>
      <PersonalInfo />
      <MyPosts />
    </main>
  )
}

export default profile