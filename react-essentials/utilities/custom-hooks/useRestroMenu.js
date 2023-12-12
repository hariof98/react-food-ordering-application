import { RESTAURANT_MENU_API } from "../constants.js";
import { useState, useEffect } from "react";

const useRestroMenu = (id) => {
    const [menuListHook, setMenuListHook] = useState({});

    useEffect(() => {
        getMenuList();
    }, []);

    const getMenuList = () => {
        fetch(RESTAURANT_MENU_API + `restaurantId=${id}`)
            .then((data) => {
                return data.json();
            })
            .then((response) => {
                const finalData = {
                    restroDetails: response.data.cards[0].card.card.info,
                    itemDetails: response.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards,
                };
                setMenuListHook(finalData);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    console.log(menuListHook);
    return menuListHook;
};

export default useRestroMenu;
