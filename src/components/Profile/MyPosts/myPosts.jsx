import classes from "./myPosts.module.css"
import Post from "./Post/post"

const myPosts = (props) => {

    let postElement = props.postData.map(post => <Post name={post.name} message={post.message} img={post.img} like={post.like} />)

    return (
        <div>
            <div className={classes.newPost}>
                <div>
                    <textarea className={classes.textarea}></textarea>
                </div>
                <div>
                    <button className={classes.buttAddNewPost}>Add New Post</button>
                </div>
            </div>
            <div className={classes.post}>
                <hr></hr>
                {postElement}
            </div>
        </div>
    )
}

export default myPosts