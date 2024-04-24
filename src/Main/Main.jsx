import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;