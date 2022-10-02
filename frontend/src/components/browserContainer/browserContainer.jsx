import "./index.css"
import { Link } from "react-router-dom"
import { DriverItem } from "../driverItem/driverItem"

export const BrowserContainer = () => {
    return (
        <div className="browser-wrapper">
            <div className="filter-side">
                <div className="filter-wrapper">
                    <h1>Filters</h1>
                    <div className="filters-list">
                        <input type="text" class="form__input" id="filter" placeholder="Category" required="" />
                        <input type="text" class="form__input" id="filter" placeholder="From where" required="" />
                        <input type="text" class="form__input" id="filter" placeholder="To where" required="" />
                        <input type="text" class="form__input" id="filter" placeholder="Date and Time" required="" />
                        <input type="text" class="form__input" id="filter" placeholder="Capacity" required="" />
                        <input type="text" class="form__input" id="filter" placeholder="Price: 0-150$" required="" />
                        <div className="search-filter">
                            <Link to={"/order"} style={{"color": "black"}}>
                                Search
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="result-side">
                <div className="result-wrapper">
                    <h1>Results: 10 </h1>
                    <div className="drivers-list">
                        <DriverItem />
                        <DriverItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

