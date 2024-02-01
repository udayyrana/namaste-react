import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "236763",
      name: "KFC",
      cloudinaryImageId: "w9wnwhnp644bfut7exi3",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹700 for two",
      cuisines: ["Mughlai", "Biryani", "Kebabs", "Tandoor"],
      avgRating: 4,
      parentId: "1674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10896524~p=2~eid=0000018d-55a9-e8cc-0a3c-750200c8024b~srvts=1706539215052~83645",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236763&source=collection&query=North%20Indian",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    deliveryTime: "35",
  },
  {
    info: {
      id: "236763",
      name: "KFC",
      cloudinaryImageId: "w9wnwhnp644bfut7exi3",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹700 for two",
      cuisines: ["Mughlai", "Biryani", "Kebabs", "Tandoor"],
      avgRating: 4,
      parentId: "1674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10896524~p=2~eid=0000018d-55a9-e8cc-0a3c-750200c8024b~srvts=1706539215052~83645",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236763&source=collection&query=North%20Indian",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    deliveryTime: "35",
  },
  {
    info: {
      id: "236763",
      name: "KFC",
      cloudinaryImageId: "w9wnwhnp644bfut7exi3",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹700 for two",
      cuisines: ["Mughlai", "Biryani", "Kebabs", "Tandoor"],
      avgRating: 4,
      parentId: "1674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10896524~p=2~eid=0000018d-55a9-e8cc-0a3c-750200c8024b~srvts=1706539215052~83645",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236763&source=collection&query=North%20Indian",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    deliveryTime: "35",
  },
  {
    info: {
      id: "236763",
      name: "KFC",
      cloudinaryImageId: "w9wnwhnp644bfut7exi3",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹700 for two",
      cuisines: ["Mughlai", "Biryani", "Kebabs", "Tandoor"],
      avgRating: 4,
      parentId: "1674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10896524~p=2~eid=0000018d-55a9-e8cc-0a3c-750200c8024b~srvts=1706539215052~83645",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236763&source=collection&query=North%20Indian",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    deliveryTime: "35",
  },
  {
    info: {
      id: "236763",
      name: "KFC",
      cloudinaryImageId: "w9wnwhnp644bfut7exi3",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹700 for two",
      cuisines: ["Mughlai", "Biryani", "Kebabs", "Tandoor"],
      avgRating: 4,
      parentId: "1674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10896524~p=2~eid=0000018d-55a9-e8cc-0a3c-750200c8024b~srvts=1706539215052~83645",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236763&source=collection&query=North%20Indian",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    deliveryTime: "35",
  },
  {
    info: {
      id: "236763",
      name: "KFC",
      cloudinaryImageId: "w9wnwhnp644bfut7exi3",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹700 for two",
      cuisines: ["Mughlai", "Biryani", "Kebabs", "Tandoor"],
      avgRating: 4,
      parentId: "1674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10896524~p=2~eid=0000018d-55a9-e8cc-0a3c-750200c8024b~srvts=1706539215052~83645",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236763&source=collection&query=North%20Indian",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    deliveryTime: "35",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, deliveryTime } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://content3.jdmagicbox.com/comp/chennai/p2/044pxx44.xx44.210618041853.z9p2/catalogue/kfc-adambakkam-chennai-fast-food-16x74xsxpy.jpg?clr="
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
