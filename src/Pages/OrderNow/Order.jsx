import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import orderimg from "../../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import UseMenu from "../../assets/Hooks/UseMenu/UseMenu";
import OrderFoodList from "./OrderFoodList";
import { useParams } from "react-router-dom";

const Order = () => {
  const {category} = useParams()
  const categories = ['dessert',"salad","soup","pizza"]
  const initialIndex = categories.indexOf(category)
  const [tabindex, setTabindex] = useState(initialIndex);
  const {menu} = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <SectionCover img={orderimg} title={"Order Now"}></SectionCover>
      <Tabs selectedIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <div className="text-center my-10 w-4/12 mx-auto">
            <Tab>Dessert</Tab>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Drinks</Tab>
          </div>
        </TabList>
        <TabPanel>
          <OrderFoodList items={dessert}></OrderFoodList>
        </TabPanel>
        <TabPanel>
        <OrderFoodList items={salad}></OrderFoodList>
        </TabPanel>
        <TabPanel>
        <OrderFoodList items={soup}></OrderFoodList>
        </TabPanel>
        <TabPanel>
        <OrderFoodList items={pizza}></OrderFoodList>
        </TabPanel>
        <TabPanel>
        <OrderFoodList items={drinks}></OrderFoodList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
