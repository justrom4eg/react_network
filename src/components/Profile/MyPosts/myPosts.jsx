import classes from "./myPosts.module.css"
import Post from "./Post/post"

const myPosts = () => {

    let postData = [
        {name: "Katia", message: "Hello,React it's awesome!!!", like: 52, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg"},
        {name: "Marta", message: "React???Angular more better", like: 3, img: "https://i.iheart.com/v3/re/new_assets/6297b1025c828d267a93f142?ops=contain(1480,0)"},
        {name: "Katia", message: "I disagree...", like: 17, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg"},
        {name: "Katia", message: "REACT TOP", like: 119, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg"}
    ]

    let postElement = postData.map( post => <Post name={post.name} message={post.message} img={post.img} like={post.like} />)

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