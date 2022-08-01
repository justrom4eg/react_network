import classes from './profile.module.css';
import MyPosts from './MyPosts/myPosts';
import PersonalInfo from './PersonalInfo/personalInfo';

function profile(props) {
  return (
    <main className={classes.content}>
      <div className={classes.bgPhoto}></div>
      <PersonalInfo />
      <MyPosts postData={props.postData} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </main>
  )
}

export default profile