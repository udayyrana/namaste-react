export default RestaurantCard = (props) => {
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
