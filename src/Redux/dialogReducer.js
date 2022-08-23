const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

let initialState = {
    contactData: [
        { name: "Nata", id: 0, img: "https://p16-amd-va.tiktokcdn.com/musically-maliva-obj/6e71afae52d3f41c651557df13b57515~c5_720x720.webp?x-expires=1653516200&x-signature=Id73Y9rgtsav-Qdss1q9ei3Zz9l%3D" },
        { name: "Dima", id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERXUGkaruU8cBozZF_YDkbM1IOPoqDkTrqg&usqp=CAU" },
        { name: "Katia", id: 2, img: "https://i.pinimg.com/736x/d1/a7/32/d1a7328c125fc100eec718cd86e1004e.jpg" },
        { name: "Nazar", id: 3, img: "https://mi100.info/wp-content/uploads/2018/12/avatarka-1041x1041.jpg" },
        { name: "Ira", id: 4, img: "https://news.direttagoal.it/wp-content/uploads/2022/02/Megan-Fox-20220209-newsdirettagoal-1.jpg" },
        { name: "Ivan", id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHyYLNbAa87Y1ngLYHptQEVl2i6ahqhbMxw&usqp=CAU" }
    ],
    messageData: [
        { message: "Hello", id: 0 },
        { message: "Hi!", id: 1 },
        { message: "How are you?", id: 2 }
    ],
    newMessageText: ""
}

let dialogReducer = (state = initialState, action) => {

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