import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../assets/Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOST_KEY;
const imageHostingAPi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Additem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (item) => {
    const addItem = toast.loading("Adding Item");
    const imagefile = { image: item.photoUrl[0] };
    const res = await axiosPublic.post(imageHostingAPi, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: item.name,
        recipe: item.details,
        image: res.data.data.display_url,
        price: item.price,
        category: item.category,
      };
      axiosSecure.post("/menu", menuItem).then((res) => {
        if (res.data.insertedId) {
          toast.success("Item Added SuccessFully", { id: addItem });
        }
        console.log(res.data);
      });
    }
  };
  return (
    <div className="my-10 max-w-6xl mx-auto">
      <SectionTitle
        Title={"Add An Item"}
        subTitle={"What's New"}
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 bg-[#F3F3F3] rounded-xl my-16"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-10 flex gap-4">
            <select
              {...register("category")}
              defaultValue={"selected"}
              className="select w-1/2  select-bordered "
            >
              <option disabled value={"selected"}>
                Choose A Category?
              </option>
              <option>dessert</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>drinks</option>
              <option>popular</option>
            </select>
            <div className="form-control w-1/2 -mt-10">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price")}
                type="Number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered h-44"
              placeholder="Recipe"
            ></textarea>
          </div>
          <input
            {...register("photoUrl")}
            type="file"
            className="file-input mt-8 w-full max-w-xs"
          />
          <button className="btn flex mt-4 bg-main hover:bg-main text-white">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additem;
