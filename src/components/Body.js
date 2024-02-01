import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
export default Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListofRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};
