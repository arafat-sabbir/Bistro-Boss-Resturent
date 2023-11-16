import PropTypes from "prop-types";
const Foodlist = ({ item }) => {
  const { price, image, recipe, name } = item;
  return (
    <div className="grid grid-cols-2 justify-center gap-10 my-20">
      {item.map((it) => (
        <div key={it._id} className="flex gap-5">
          <img
            style={{ borderRadius: "0px 200px 200px 200px" }}
            className="w-[118px] h-[104px]"
            src={it.image}
            alt=""
          />
          <div>
            <h1>{it.name}------------------</h1>
            <h3>{it.recipe}</h3>
          </div>
          <p className="text-yellow-500">{price}</p>
        </div>
      ))}
    </div>
  );
};

Foodlist.propTypes = {
  item: PropTypes.obj,
};
export default Foodlist;
