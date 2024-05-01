import Banner from "../../Components/Banner/Banner";
import Education from "../../Components/Education/Education";
import RecentProjects from "../../Components/RecentProjects/RecentProjects";
import Footer from "../../Components/Shared/Footer/Footer";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <RecentProjects></RecentProjects>
            <Skills></Skills>
            <Education></Education>
            <Footer></Footer>
        </div>
    );
};

export default Home;