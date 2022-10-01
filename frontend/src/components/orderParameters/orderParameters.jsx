import "./index.css"

export const OrderParameters = () => {
    console.log("Hi")
    return(
        <div className="parameters-wrapper">
            <div className="parameters-handler">

                <input className="parameter-input" placeholder="Location 1"></input>
                <input className="parameter-input" placeholder="Location 2"></input>
                <input className="parameter-input" placeholder="Time"></input>
            </div>
        </div>
    )
}