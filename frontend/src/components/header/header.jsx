import "./index.css"
import { Link } from "react-router-dom"


export const Header = () => {
    return (
        <nav>
            <div className="header-wrapper">
                <div className="header-content">
                    <Link to="/">
                        <div className='logo' style={{backgroundImage: `url(/flywheelbig.png)`}}>
                        </div>
                    </Link>
                    <div>
                        <Link className="header-link" to="/order">
                        Order
                        </Link>
                    </div>
                    <div>
                        <Link className="header-link" to="/browse">
                            Browse trips
                        </Link>
                    </div>
                    <div>
                        <Link className="header-link" to="/safety">
                            Safety
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}