const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT"

let profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: let post = {
            id: 4,
            name: "Katia",
            message: state.newPostText,
            like: 0,
            img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg"
        }
            state.postData.push(post);
            return state
        case UPDATE_NEW_TEXT: state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export let addPostActionCreator = () => { 
    return { type: ADD_POST }
}

export let updateNewTextActionCreator = (newText) =>{
    return { 
        type: UPDATE_NEW_TEXT,
        newText: newText 
    }
}

export default profileReducer