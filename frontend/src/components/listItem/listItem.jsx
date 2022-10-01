import "./index.css"

export const ListItem = () => {
    return(
        <div className="item-wrapper">
            <div className="img-holder">
                <img src="https://m.media-amazon.com/images/I/81Ym4d8Iu7L._AC_UL640_FMwebp_QL65_.jpg"></img>
            </div>
            <div className="item-data">
                <span id="name">Name</span>
                <span>Car</span>
                <span>Time</span>
            </div>
        </div>
    )
}