/*
- named export
export const LOGO_URL = "https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png";

- for named export, the import should use {}
import { LOGO_URL } from "../../../../../utilities/constants.js";
- when you want to export multiple things in a file, use named export

- default export
const LOGO_URL = "https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png";
export default LOGO_URL;

- for default export, the import should not use {}
import LOGO_URL from "../../../../../utilities/constants.js";
- a file can have only one default export
*/

export const MOCK_API_DATA = [
    {
        "info": {
            "id": "37067",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Kilpauk",
            "areaName": "Poonamallee High Road",
            "costForTwo": "₹350 for two",
            "cuisines": ["Salads", "Snacks", "Desserts", "Beverages"],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "37067",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3900,
            },
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "41 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                    },
                ],
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                },
                            },
                        ],
                    },
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-kilpauk-poonamallee-high-road-chennai-37067",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "224433",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "ltclyiutcsq7twivwsii",
            "locality": "Brickklin Road",
            "areaName": "Purasaiwakkam",
            "costForTwo": "₹200 for two",
            "cuisines": ["Biryani", "North Indian", "Punjabi", "Healthy Food", "Desserts", "Beverages"],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "224433",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3900,
            },
            "parentId": "4925",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {},
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-brickklin-road-purasaiwakkam-chennai-224433",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "13713",
            "name": "Little Italy",
            "cloudinaryImageId": "rva9beuerw1ikwq9qupc",
            "locality": "Nungambakkam",
            "areaName": "Nungambakkam",
            "costForTwo": "₹1200 for two",
            "cuisines": ["Italian", "Pizzas", "Pastas", "Salads", "Desserts"],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "13713",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4400,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 4400,
            },
            "parentId": "600",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "45 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:00:00",
                "opened": true,
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet",
                    },
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                    },
                ],
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png",
                                },
                            },
                        ],
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                },
                            },
                        ],
                    },
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1200",
                "discountTag": "FLAT DEAL",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/little-italy-nungambakkam-chennai-13713",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "224431",
            "name": "The Good Bowl",
            "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
            "locality": "Brickklin Road",
            "areaName": "Purasaiwakkam",
            "costForTwo": "₹400 for two",
            "cuisines": ["Biryani", "North Indian", "Pastas", "Punjabi", "Desserts", "Beverages"],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "224431",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3900,
            },
            "parentId": "7918",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {},
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-brickklin-road-purasaiwakkam-chennai-224431",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "76702",
            "name": "The Red Box",
            "cloudinaryImageId": "aydhv8rxmxpmqfg1cjrd",
            "locality": "Wellington Estate",
            "areaName": "Egmore",
            "costForTwo": "₹400 for two",
            "cuisines": ["Chinese"],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "76702",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3900,
            },
            "parentId": "1636",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "46 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {},
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-red-box-wellington-estate-egmore-chennai-76702",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "383374",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "rp0skf7vyz27uxgwdblf",
            "locality": "Venkatesa Bathan Street",
            "areaName": "Purasawalkam",
            "costForTwo": "₹300 for two",
            "cuisines": ["Desserts", "Ice Cream", "Ice Cream Cakes"],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "383374",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3000,
            },
            "parentId": "582",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {},
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-venkatesa-bathan-street-purasawalkam-chennai-383374",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "224430",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
            "locality": "Brickklin Road",
            "areaName": "Purasaiwakkam",
            "costForTwo": "₹450 for two",
            "cuisines": ["Snacks", "Bakery", "Desserts", "Beverages"],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "224430",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3900,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3900,
            },
            "parentId": "4444",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {},
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-brickklin-road-purasaiwakkam-chennai-224430",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "21473",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "b4oufcrv1ejzlgbz1oyb",
            "locality": "Triplicane",
            "areaName": "Triplicane",
            "costForTwo": "₹600 for two",
            "cuisines": ["Biryani", "Barbecue", "South Indian", "Chinese", "North Indian"],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "21473",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3500,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 3500,
            },
            "parentId": "332",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "39 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-10 01:00:00",
                "opened": true,
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {},
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-triplicane-chennai-21473",
            "type": "WEBLINK",
        },
    },
    {
        "info": {
            "id": "7776",
            "name": "The Kati Roll Shop",
            "cloudinaryImageId": "vdum3tsu29etu9x95lrv",
            "locality": "Cathedral Road",
            "areaName": "Gopalapuram",
            "costForTwo": "₹250 for two",
            "cuisines": ["Street Food"],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "7776",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6200,
                    },
                    {
                        "name": "BASE_TIME",
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE",
                    },
                ],
                "totalFee": 6200,
            },
            "parentId": "210407",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "48 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY",
            },
            "availability": {
                "nextCloseTime": "2023-09-09 23:59:00",
                "opened": true,
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                    },
                ],
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                },
                            },
                        ],
                    },
                },
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                "freedelMessage": "FREE DELIVERY",
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {},
                },
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-kati-roll-shop-cathedral-road-gopalapuram-chennai-7776",
            "type": "WEBLINK",
        },
    },
];

export const MY_DETAILS = [
    {
        name: "Hari",
        description:
            "I'm Hari, a web developer at Chargebee. I have three years of experience in software engineering and have worked with two notable players in the financial landscape: Chargebee (a prominent player in the subscription management space) and Worldline (a key player in transaction payments as a service). These experiences have given me a deep understanding of the financial sector and its unique challenges, as well as the vital role that software can play in addressing them.",
        portfolio: "https://hariof98.vercel.app/",
    },
];

export const SWIGGY_MAIN_API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.03912658365103&lng=80.14768000692129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANT_MENU_API =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.760721924782347&lng=78.68391606956722&";

export const MOCK_USER_DETAILS = [
    {
        userName: "Hari",
        address: "India, Trichy - 620021.",
        mobile: 9600853062,
        swiggyMember: false,
    },
];
