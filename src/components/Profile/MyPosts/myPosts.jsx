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
                <hr></hr>
                <Post name="Katia" message="Hello,React it's awesome!!!" img="https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" like="52" />
                <Post name="Marta" message="React???Angular more better" img="https://i.iheart.com/v3/re/new_assets/6297b1025c828d267a93f142?ops=contain(1480,0)" like="2" />
                <Post name="Katia" message="I disagrre..." img="https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" like="17" />
                <Post name="Katia" message="REACT TOP" img="https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" like="119" />
            </div>
        </div>
    )
}

export default myPosts