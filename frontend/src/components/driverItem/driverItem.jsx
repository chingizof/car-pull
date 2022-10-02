import "./index.css"
import { Link } from "react-router-dom"

export const DriverItem = () => {
    return (

        <div class="driver-wrapper">
            <div className="driver-content">
                <span id="title"><b>Weekend trip from Bethlehem to New York City</b></span>
                <span id="description">Going to NYC with my friends for a pacing break</span>
                <span id="from"><b>From: </b>Bethlehem</span>
                <span id="to"><b>To: </b>New York City</span>
                <span id="capacity"><b>Capacity: </b>3</span>
                <span id="when"><b>When: </b>2.00 PM 10/01/2022</span>
                <span id="contacts"><b>Contact driver:</b> 610-000-00-00, abc226@lehigh.edu</span>
                <div className="item-wrapper">
                    <div className="img-holder">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQExMd4ko1GwNQ/profile-displayphoto-shrink_800_800/0/1647900004636?e=2147483647&v=beta&t=t-yr4G5TfmjyGV8ocUwOrEjZL4eTwu_VzTkwn7xXFh8"></img>
                    </div>
                    <div className="item-data">
                        <span id="name">Alexander</span>
                        <span>Black Mercedes Benz</span>
                        <span>17:00</span>
                    </div>
                    <div className="price-tag-wrapper">
                        <div className="price-tag">
                            <Link to={{ pathname: "nopage" }} style={{"color": "black"}} target="_blank" >
                                <b>4.98$</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}