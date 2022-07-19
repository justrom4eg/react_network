import classes from "./sidebar.module.css"

const sidebar = (props) => {

    let item = props.contactData[Math.floor(Math.random()*props.contactData.length)]

    return (
        <div className={classes.sidebar}>
                <div className={classes.friend}>
                    <img src={item.img}/>
                    <div>
                        {item.name}
                    </div>
                </div>
            </div>
    )
}

export default sidebar