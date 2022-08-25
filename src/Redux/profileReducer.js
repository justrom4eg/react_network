const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT"

let initialState = {
    postData: [
        { id: 0, name: "Katia", message: "Hello,React it's awesome!!!", like: 52, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" },
        { id: 1, name: "Marta", message: "React???Angular more better", like: 3, img: "https://i.iheart.com/v3/re/new_assets/6297b1025c828d267a93f142?ops=contain(1480,0)" },
        { id: 2, name: "Katia", message: "I disagree...", like: 17, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" },
        { id: 3, name: "Katia", message: "REACT TOP", like: 119, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" }
    ],
    newPostText: ""
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
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

export let updateNewTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_TEXT,
        newText: newText
    }
}

export default profileReducer