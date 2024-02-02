import { CDN_URL } from "../utils/constants.js";

export default RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <p className="cuisines">{cuisines.slice(0, 3).join(", ")}</p>
      <p>{avgRatingString} stars</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};
