import classes from "./myPosts.module.css"
import Post from "./Post/post"

function myPosts() {
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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default myPosts