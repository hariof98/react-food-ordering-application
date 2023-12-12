import RestroCardComponent from "../restro-card-component/restroCardComponent.js";
import SkeletonLoader from "../skeleton-loader-component/skeletonLoader.js";
import { MOCK_API_DATA } from "../../../../../utilities/constants.js";
import { SWIGGY_MAIN_API } from "../../../../../utilities/constants.js";
import { useState, useEffect } from "react";

const BodyComponent = () => {
    // normal variable creation
    var apiData = MOCK_API_DATA;

    // state variable creation
    var [apiData, setApiData] = useState([]); // hooks should be called only inside a functional component

    //let [searchText, setSearchText] = useState("");

    // state variable creation for search
    let [dataForSearch, setDataForSearch] = useState([]);

    const bodyLayout = (
        <div className="body-container">
            <div className="restaurant-filters">
                <button
                    className="btn-contanier"
                    onClick={() => {
                        const filteredData = apiData.filter((data) => {
                            return data.info.avgRating > 4.1;
                        });
                        /* on click we are trying to filter the data. By the time you click this button, the data/content will be rendered in DOM.
                        Without state variable, the data will be modified, but in order to re-render the filtered data in DOM, to maintain consistency
                        between Data Layer and UI Layer, we should use a "Super Powerful Variable (state variables) in React" instead of normal JS Variables */
                        setApiData(filteredData); /* whenever setApiData function is called, then react will automatically re-render the component.
                        This means that the state variable is changed and React will re-render this component to display the updated data */
                    }}>
                    Top Rated Restaurants
                </button>

                <input
                    type="text"
                    className="search-restraunts"
                    placeholder="Search Restraunts"
                    //value={searchText}
                    onChange={(event) => {
                        const value = event.target.value;
                        //setSearchText(value);

                        if (value != "") {
                            const searchedData = apiData.filter((data) => {
                                return data.info.name.toLowerCase().includes(value.toLowerCase());
                            });

                            setDataForSearch(searchedData);
                        } else {
                            setDataForSearch([]);
                        }
                    }}
                />
            </div>

            <div className="restaurant-contanier">
                {apiData.length === 0 ? (
                    <>
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                    </>
                ) : dataForSearch.length === 0 ? (
                    apiData.map((data, index) => {
                        return <RestroCardComponent key={index} restaurantAllDetails={data.info} />;
                    })
                ) : (
                    dataForSearch.map((data, index) => {
                        return <RestroCardComponent key={index} restaurantAllDetails={data.info} />;
                    })
                )}
            </div>
        </div>
    );

    /* useEffect hook will be only called when the whole component is rendered.
       This hook will execute the data inside it only once after the initial render when an empty array is given as the dependency array.
       We are using this approach to fetch the data after the component is rendered to provide better user experience.
       This is effective because, fetching external api data may take some time to get back, so in the mean time, we can make the user experince better by implementing various methods
    */
    useEffect(() => {
        fetchSwiggyData();
    }, []);

    const fetchSwiggyData = () => {
        fetch(SWIGGY_MAIN_API)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const updatedRestaurantData = data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
                setApiData(updatedRestaurantData); // re-rendering of live data happens
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return bodyLayout;
};

export default BodyComponent;
