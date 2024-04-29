import Banner from "../../Components/Banner/Banner";
import RecentProjects from "../../Components/RecentProjects/RecentProjects";
import Footer from "../../Components/Shared/Footer/Footer";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <RecentProjects></RecentProjects>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;