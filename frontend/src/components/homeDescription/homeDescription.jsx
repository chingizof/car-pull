import "./index.css"
import { Link } from "react-router-dom"

export const HomeDescription = () => {
    return (
        <div className="home-wrapper" style={{ backgroundImage: `url(/flywheel-back.png)` }}>
            <div className="container">
                <div className='container-description'>
                    <h1 className='container-text'>Want to go to Walmart nearby or travel to New York almost for free?</h1>
                    <span className="container-span">FlyWheel is a carpooling app created by and for Lehigh University students who are tired of insane taxi prices and want to have an affordable transportation options with peers.</span>
                    {/* start playing button  */}
                    <div className="play-now">
                        <Link to={"/order"}>
                            Search Now!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}