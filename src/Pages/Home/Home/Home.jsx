
import Title from "../../../Shared/Title/Title";
import Cheackout from "../CheakOut/Cheakout";
import OrderNow from "../OrderNow/OrderNow";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Title helmet={"Home"}></Title>
           <Banner></Banner>
           <OrderNow></OrderNow>
           <PopularMenu></PopularMenu>
           <Cheackout></Cheackout>
        </div>
    );
};

export default Home;