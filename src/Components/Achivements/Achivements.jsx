
const Achivements = () => {
    return (
        <>
            <div className="mx-2">

                <h2 className="text-3xl my-4 font-semibold ">
                    My <span className="text-[#1AC0EC]">Achivements</span>{" "}
                </h2>

                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">December 2023</p>
                    <h3 className="text-xl text-white font-medium">Web development Certificate</h3>
                    <p className="font-extralight">Programmine Hero</p>
                    <p className="text-base text-white">I&apos;ve got certificate for completig my web development professional course with programming hero. Here&apos;s the <span className="text-[#38BDF8] "><a href="/public/certificate.pdf" download>Certificate</a></span></p>
                </div>
                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">Mars 2024</p>
                    <h3 className="text-xl text-white font-medium">Recommendation Letter</h3>
                    <p className="font-extralight">Programming Hero</p>
                    <p className="text-base text-white">Currently pursuing a Bachelor of Science degree at Government Titumir College Dhaka.</p>
                </div>
                <div className="bg-[#1E293B] ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">2020 - 2022</p>
                    <h3 className="text-xl text-white font-medium">Higher Secondary Certificate</h3>
                    <p className="font-extralight">Hajiganj Model Govt. College</p>
                    <p className="text-base text-white">I completed my HSC at department of Humanities with CGPA of 4.94 out of 5</p>
                </div>
            </div>
        </>
    );
};

export default Achivements;