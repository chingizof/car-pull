import "./index.css"
import { Link } from "react-router-dom"

export const ListItem = () => {
    return(
        <div className="item-wrapper">
            <div className="img-holder">
                <img src="https://m.media-amazon.com/images/I/81Ym4d8Iu7L._AC_UL640_FMwebp_QL65_.jpg"></img>
            </div>
            <div className="item-data">
                <span id="name">Alexander</span>
                <span>Black Mercedes Benz</span>
                <span>17:00</span>
            </div>
            <div className="price-tag-wrapper">
                <div>
                    <div className="price-tag">
                        <Link to={"/order"} style={{"color": "black"}}>
                            4.98$
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}