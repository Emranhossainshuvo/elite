import Banner from "../../Components/Banner/Banner";
import RecentProjects from "../../Components/RecentProjects/RecentProjects";

const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <RecentProjects></RecentProjects>
            <h3>This is home page</h3>
        </div>
    );
};

export default Home;