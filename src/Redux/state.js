let rerenderEntireTree=()=>{
    console.log("rerender tree")
}

let state = {
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
}

export const addMessage = () => {
    let message = {
        id: 3,
        message: state.dialog.newMessageText,
    }
    state.dialog.messageData.push(message);
    rerenderEntireTree(state)
}

export const addPost = () => {
    let post = {
        id: 4,
        name: "Katia",
        message: state.posts.newPostText,
        like: 0,
        img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg"
    }
    state.posts.postData.push(post);
    rerenderEntireTree(state)
}

export const updateNewText = (newText) => {
    state.posts.newPostText = newText
    rerenderEntireTree(state)
}

export const updateNewMessage = (newText) => {
    state.dialog.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscriber = (observer) =>{
    rerenderEntireTree = observer
}



export default state