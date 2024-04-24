import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;