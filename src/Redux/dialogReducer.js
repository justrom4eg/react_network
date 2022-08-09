const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

let dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE: let message = {
            id: 3,
            message: state.newMessageText,
        }
            state.messageData.push(message);
            return state
        case UPDATE_NEW_MESSAGE: state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let updateNewMessageActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newText: newText
    }
}

export default dialogReducer