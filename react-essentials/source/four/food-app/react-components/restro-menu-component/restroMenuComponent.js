import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroMenu from "../../../../../utilities/custom-hooks/useRestroMenu";
import RestroItemDetails from "../restro-item-details/restroItemDetails";

const RestroMenuComponent = () => {
    const { resId } = useParams();

    const menuList = useRestroMenu(resId); // passing data in the custom-hook

    const [toggle, setToggle] = useState(1);

    const { id, name, cuisines, city, logo, avgRating, cloudinaryImageId, costForTwoMessage } = menuList.restroDetails
        ? menuList.restroDetails
        : menuList;

    const restroMenuLayout = (
        <div className="restro-menu-container">
            <div className="restro-layout">
                <div>
                    <div className="restro-name">{name}</div>
                    <div className="restro-cusine">
                        {cuisines?.map((cusineList) => {
                            return cusineList === cuisines[cuisines.length - 1] ? cusineList : cusineList + ", ";
                        })}
                    </div>
                </div>
                <div>
                    <div className="restro-cusine">{city}</div>
                </div>
            </div>

            {menuList.itemDetails
                ? menuList.itemDetails.map((data, index) => {
                      return (
                          // controlled component
                          <RestroItemDetails
                              key={index}
                              title={data?.card?.card?.title}
                              itemCards={data?.card?.card?.categories ? data?.card?.card?.categories : data?.card?.card?.itemCards}
                              displayToggle={index === toggle ? true : false}
                              changeToggle={() => setToggle(index)}
                          />
                      );
                  })
                : ""}
        </div>
    );

    return restroMenuLayout;
};

export default RestroMenuComponent;
