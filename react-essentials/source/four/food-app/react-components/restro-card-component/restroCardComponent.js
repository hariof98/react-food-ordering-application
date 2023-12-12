import { Link } from "react-router-dom";

const RestroCardComponent = (props) => {
    const { restaurantAllDetails } = props;
    //console.log(restaurantAllDetails);
    //console.log(props);

    const { cloudinaryImageId, name, cuisines, avgRating, sla, id } = restaurantAllDetails;

    return (
        <Link to={"/restaurants/" + id}>
            <div className="restaurant-cards">
                <div className="restaurant-image">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
                </div>

                <div className="restaurant-details">
                    <div className="restaurant-name-cusine">
                        <h3 className="restaurant-name">{name}</h3>
                        <div className="restaurant-cusine">
                            {cuisines.map((cuisineData) => {
                                return cuisineData === cuisines[cuisines.length - 1] ? cuisineData : cuisineData + ", ";
                            })}
                        </div>
                    </div>
                    <div className="restaurant-ratings-eta">
                        <div className="restaurant-ratings">
                            <span>{avgRating}/5</span>
                        </div>
                        <div className="restaurant-eta">{sla.deliveryTime + " mins"}</div>
                    </div>
                </div>

                <div className="restaurant-description">
                    McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and
                    Maurice McDonald, in San Bernardino, California, United States.
                </div>

                <div className="restaurant-share">Share</div>
            </div>
        </Link>
    );
};

export default RestroCardComponent;
