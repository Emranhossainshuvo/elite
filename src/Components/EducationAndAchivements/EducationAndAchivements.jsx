
import { RiTimeLine } from "react-icons/ri";

const EducationAndAchivements = () => {
    return (

        <>

            <h2 className="text-3xl my-5 font-medium ">
                <span className="text-custom-text"></span> <span className="text-black">Education <span className="text-custom-text">and</span> Achivements</span>{" "}
            </h2>

            <div>


                <div className="my-5">
                    <div className="py-10 px-[2%] sm:px-[5%] lg:px-[8%]">
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle">
                                    <RiTimeLine className="text-2xl text-sky-100 animate-spin" />
                                </div>
                                <div className="timeline-start  hover:shadow-2xl duration-300 transition hover:scale-95 px-2 py-3 space-y-2 md:text-end mb-9">
                                    <div className="text-2xl font-bold text-[#e5c466] ">
                                        Web development 
                                    </div>
                                    <p className="font-semibold max-w-sm text-sky-200">
                                    I did a  online professional course for around 8 month with Programming hero
                                    </p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <RiTimeLine className="text-2xl text-sky-100 animate-spin" />
                                </div>
                                <div className="timeline-end hover:shadow-2xl duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2">
                                    <div className="text-2xl font-semibold text-[#e5c466]">
                                        B.Sc Geography and Environment
                                    </div>
                                    <p className="font-semibold max-w-sm text-sky-200">

                                    Currently pursuing a Bachelor of Science degree at Government Titumir College Dhaka.
                                    </p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <RiTimeLine className="text-2xl text-sky-100 animate-spin" />
                                </div>
                                <div className="timeline-start hover:shadow-2xl duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2 md:text-end">
                                    <div className="text-2xl font-semibold text-[#e5c466]">
                                    Web development Certificate
                                    </div>
                                    <p className="font-semibold max-w-sm text-sky-200">

                                    I&apos;ve got certificate for completig my web development professional course with programming hero. Here&apos;s the <span className="text-[#38BDF8] "><a href="/public/certificate.pdf" download>Certificate</a></span>
                                    </p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <RiTimeLine className="text-2xl text-sky-100 animate-spin" />
                                </div>
                                <div className="timeline-end hover:shadow-2xl duration-300 transition hover:scale-95 mb-9 px-2 py-3 space-y-2">
                                    <div className="text-2xl font-semibold text-[#e5c466]">
                                    Higher Secondary Certificate
                                    </div>
                                    <p className="font-semibold max-w-sm text-sky-200">

                                    I completed my HSC at department of Humanities with CGPA of 4.94 out of 5
                                    </p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <RiTimeLine className="text-2xl text-sky-100 animate-spin" />
                                </div>
                                <div className="timeline-start hover:shadow-2xl duration-300 transition hover:scale-95 py-3 px-3 md:text-end">
                                    <div className="text-2xl font-semibold text-[#e5c466]">
                                    Recommendation Letter
                                    </div>
                                    <p className="font-semibold text-sky-200">

                                    I was part fo two month long Programming-Hero endgame programm It&apos;s like a shadow internship. Here&apos;s the <a className="text-[#38BDF8]" href="/public/Md. Emran Hossain.pdf" download>Recommendation Letter</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    );
};

export default EducationAndAchivements;

