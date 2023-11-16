import { Link } from "react-router-dom";
import Foodlist from "../../../Shared/FoodList/Foodlist";
import SectionCover from "../../../Shared/SectionCover/SectionCover";

const FoodCategory = ({ item, title, img }) => {
  return (
    <div>
      {title && <SectionCover img={img} title={title}></SectionCover>}
      <Foodlist item={item}></Foodlist>
      <div className="flex justify-center mx-auto ">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mb-10 -mt-8">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCategory;
