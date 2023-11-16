const OrderFoodList = ({items}) => {
    return (
        <div className="grid grid-cols-4 gap-10 my-10">
            {items.map(item => (
                <div key={item._id} className="card w-[370px] bg-base-100 border-2">
                <figure><img src={item.image} alt="Shoes" className="w-full" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.recipe}</p>
                  <div className="card-actions justify-center">
                    <button className="btn border-b-2  hover:border-b-yellow-500 border-b-yellow-500">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
};

export default OrderFoodList;