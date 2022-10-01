import "./index.css" 
import { ListItem } from "../listItem/listItem"
import MapComponent from "../map/map"

export const OrderList = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 0,
        lng: 0,
      } 
    return (

        <div className="order-wrapper">
            <div className="list-wrapper">
                <ListItem />
                <ListItem />
            </div>
            <div className="map-wrapper">
                <div className="map-holder">
                    <MapComponent location={location} zoomLevel={17}/>
                </div>
            </div>

        </div>

        
    )
}