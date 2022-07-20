import React from "react"
import classes from "./myPosts.module.css"
import Post from "./Post/post"

const myPosts = (props) => {

    let postElement = props.postData.map(post => <Post name={post.name} message={post.message} img={post.img} like={post.like} />)

    let textAreaV = React.createRef()

    let text = () => {
        props.addPost()
        props.updateNewText("")
    }

    let onChangePost = () =>{
        let text = textAreaV.current.value
        props.updateNewText(text)
    }

    return (
        <div>
            <div className={classes.newPost}>
                <div>
                    <textarea onChange={onChangePost} className={classes.textarea} ref={textAreaV} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button className={classes.buttAddNewPost} onClick={text} >Add New Post</button>
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