import Navigation from "../Navigation/Navigation";
import UserProfile from "../User/UserProfile";

const LeftSidebar = () => {
    return (
        <div className="relative h-full">
            <UserProfile />
            <div className="absolute bottom-0 h-[20%] left-0 w-full">
                <Navigation />
            </div>
        </div>
    )
}

export default LeftSidebar;