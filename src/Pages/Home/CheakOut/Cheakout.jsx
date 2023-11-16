import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import cheakout from "../../../assets/home/featured.jpg";
import "./CheackOut.css";

const Cheackout = () => {
  return (
    <div className="my-20 py-20 text-white" id="Cheackout">
      <div className="">
        <SectionTitle
          Title={"FROM OUR MENU"}
          subTitle={"---Check it out---"}
        ></SectionTitle>
        <div className="flex items-center justify-center py-10">
          <div className="">
            <img src={cheakout} className="w-7/12 ml-auto mr-20" alt="" />
          </div>
          <div className="">
            <h3>March 20, 2023</h3>
            <p>
              WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error voluptate facere, deserunt dolores maiores
              quod nobis quas quasi. Eaque repellat recusandae ad laudantium
              tempore consequatur consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0  border-b-4">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheackout;
