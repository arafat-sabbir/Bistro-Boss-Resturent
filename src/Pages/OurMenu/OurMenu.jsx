import SectionCover from "../../Shared/SectionCover/SectionCover";
import Title from "../../Shared/Title/Title";
import UseMenu from "../../assets/Hooks/UseMenu/UseMenu";
import MenuIgm from "../../assets/home/banner.jpg";
import FoodCategory from "./FoodCategory/FoodCategory";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";

const OurMenu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  console.log(offered);
  return (
    <div>
      <Title helmet={"Our Menu"}></Title>
      <SectionCover
        img={MenuIgm}
        title={"our Menu"}
        subtitle={"Would you like to try a dish?"}
      ></SectionCover>
      {/* Offered Food List */}
      <FoodCategory item={offered}></FoodCategory>
      {/* dessert food list */}
      <FoodCategory item={dessert} title={"dessert"} img={dessertimg}></FoodCategory>
      <FoodCategory item={salad} title={"salad"} img={saladimg}></FoodCategory>
      <FoodCategory item={soup} title={"soup"} img={soupimg}></FoodCategory>
      <FoodCategory item={pizza} title={"pizza"} img={pizzaimg}></FoodCategory>
    </div>
  );
};

export default OurMenu;
