import "./index.css"
import { Link } from "react-router-dom"

export const SafetyDescription = () => {
    return(
        <div className="home-wrapper" style={{ backgroundImage: `url(/flywheel-back.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="container">
                <div className='container-description'>
                    <h1 className='container-text'><i>We value your safety</i></h1>
                    <span className="container-span">FlyWheel is a carpooling app created by and for Lehigh University students who are tired of insane taxi prices and want to have an affordable transportation options with peers.<Link to="/nopage"> Learn more.</Link></span>
                    
                </div>
            </div>
        </div>
    )
}
