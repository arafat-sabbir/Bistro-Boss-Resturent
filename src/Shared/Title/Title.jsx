import { Helmet } from "react-helmet";


const Title = ({helmet}) => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | {helmet}</title>
            </Helmet>
        </div>
    );
};

export default Title;