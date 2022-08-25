import React from "react"
import classes from "./myPosts.module.css"
import Post from "./Post/post"
import {addPostActionCreator, updateNewTextActionCreator} from "../../../Redux/profileReducer"

const myPosts = (props) => {

    let postElement = props.postData.map(post => <Post name={post.name} message={post.message} img={post.img} like={post.like} />)

    let textAreaV = React.createRef()

    let text = () => {
        if (props.newPostText !== "") {
            props.dispatch(addPostActionCreator())
            props.dispatch(updateNewTextActionCreator(""))
        }
    }

    let onChangePost = () => {
        let textPost = textAreaV.current.value
        props.dispatch(updateNewTextActionCreator(textPost))
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