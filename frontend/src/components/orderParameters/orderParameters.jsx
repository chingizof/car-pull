import "./index.css"
import { Link } from 'react-router-dom'

export const OrderParameters = () => {
    console.log("Hi")
    return(
        <div className="parameters-wrapper">
            <div className="parameters-handler">
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Street 1" name="name" id='name' required />
                </div>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Street 2" name="name" id='name' required />
                </div>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Time" name="name" id='name' required />
                </div>
                <div>
                    <div className="search">
                        <Link to={"/nopage"} style={{"color": "black"}}>
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}