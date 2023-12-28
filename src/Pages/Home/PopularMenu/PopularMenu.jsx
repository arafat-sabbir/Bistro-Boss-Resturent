import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import Foodlist from "../../../Shared/FoodList/Foodlist";
import UseMenu from "../../../assets/Hooks/UseMenu/UseMenu";

const PopularMenu = () => {
  const {menu, loading} = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-20">
      <SectionTitle
        Title={"FROM OUR MENU"}
        subTitle={"---Check it out---"}
      ></SectionTitle>

      <div className="mt-10">
        {loading ? (
          <p className="loading-infinity">Loading</p>
        ) : (
          <Foodlist item={popular}></Foodlist>
        )}
      </div>
    </div>
  );
};

export default PopularMenu;
