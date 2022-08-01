import { type } from "@testing-library/user-event/dist/type"

let store = {
    _state: {
        posts: {
            postData: [
                { id: 0, name: "Katia", message: "Hello,React it's awesome!!!", like: 52, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" },
                { id: 1, name: "Marta", message: "React???Angular more better", like: 3, img: "https://i.iheart.com/v3/re/new_assets/6297b1025c828d267a93f142?ops=contain(1480,0)" },
                { id: 2, name: "Katia", message: "I disagree...", like: 17, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" },
                { id: 3, name: "Katia", message: "REACT TOP", like: 119, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" }
            ],
            newPostText: ""
        },
        dialog: {
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
    },
    _rerenderEntireTree() {
        console.log("rerender tree")
    },
    getState() {
        return this._state
    },
    getRerender() {
        return this._rerenderEntireTree
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let post = {
                id: 4,
                name: "Katia",
                message: this._state.posts.newPostText,
                like: 0,
                img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg"
            }
            this._state.posts.postData.push(post);
            this._rerenderEntireTree(this._state)
        } else if (action.type === "UPDATE-NEW-TEXT") {
            this._state.posts.newPostText = action.newText
            this._rerenderEntireTree(this._state)
        } else if (action.type === "ADD-MESSAGE") {
            let message = {
                id: 3,
                message: this._state.dialog.newMessageText,
            }
            this._state.dialog.messageData.push(message);
            this._rerenderEntireTree(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialog.newMessageText = action.newText
            this._rerenderEntireTree(this._state)
        }
    }
}

export default store