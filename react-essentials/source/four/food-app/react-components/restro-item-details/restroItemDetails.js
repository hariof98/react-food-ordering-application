import React, { useState, useContext } from "react";
import CartDetails from "../../../../../utilities/contexts/CartDetails";
import CartDetails from "../../../../../utilities/contexts/CartDetails";

const RestroItemDetails = (props) => {
    const { title, itemCards, displayToggle, changeToggle } = props;

    const restroItemLayout = (
        <div className="res-items-list">
            <div className="menu-list">
                <div className="flex">
                    <div className="restro-name">{title}</div>
                    {title !== undefined && (
                        <div
                            className="restro-name"
                            onClick={() => {
                                changeToggle();
                            }}>
                            ⬇️
                        </div>
                    )}
                </div>

                {displayToggle && (
                    <div className="item-list">
                        {itemCards?.map((data, index) => {
                            return data.itemCards ? ( // category
                                data.itemCards.map((data, index) => {
                                    return (
                                        <div className="restro-item-details" key={index}>
                                            <List data={data} />
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="restro-item-details" key={index}>
                                    <List data={data} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );

    return restroItemLayout;
};

const List = ({ data }) => {
    const { itemList, setContextItemList } = useContext(CartDetails);
    //console.log("list");

    return (
        <>
            <div>
                <div className="restro-cusine-list">{data.card.info.name}</div>
                <div className="restro-cusine">{data.card.info.description}</div>
            </div>

            <div className="img-and-add">
                <img
                    className="restro-cusine-img"
                    src={
                        data.card.info.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/` + data.card.info.imageId
                            : ""
                    }
                />

                <button
                    className="cart-btn"
                    onClick={() => {
                        const arr = [];
                        arr.push(data.card.info, ...itemList);
                        setContextItemList(arr);
                    }}>
                    Add To Cart
                </button>
            </div>
        </>
    );
};

export default RestroItemDetails;
