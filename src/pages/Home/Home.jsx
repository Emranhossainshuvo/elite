import Banner from "../../Components/Banner/Banner";
import RecentProjects from "../../Components/RecentProjects/RecentProjects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <RecentProjects></RecentProjects>
            <Skills></Skills>
            <h3>This is home page</h3>
        </div>
    );
};

export default Home;