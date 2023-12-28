import useAuth from "../../../assets/Hooks/UseMenu/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl">Welcome {
               user.displayName? <span>{user.displayName}</span>:'Back'
            }</h3>
            
        </div>
    );
};

export default UserHome;