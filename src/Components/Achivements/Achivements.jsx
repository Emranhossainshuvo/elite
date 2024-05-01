
const Achivements = () => {
    return (
        <>
            <div className="mx-auto">

                <h2 className="text-3xl my-4 font-semibold ">
                    My <span className="text-[#1AC0EC]">Achivements</span>{" "}
                </h2>

                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">December 2023</p>
                    <h3 className="text-xl text-white font-medium">Web development Certificate</h3>
                    
                    <p className="text-base text-white">I&apos;ve got certificate for completig my web development professional course with programming hero. Here&apos;s the <span className="text-[#38BDF8] "><a href="/public/certificate.pdf" download>Certificate</a></span></p>
                </div>
                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">Mars 2024</p>
                    <h3 className="text-xl text-white font-medium">Recommendation Letter</h3>
                    <p className="text-base text-white">I was part fo two month long Programming-Hero endgame programm It&apos;s like a shadow internship. Here&apos;s the <a className="text-[#38BDF8]" href="/public/Md. Emran Hossain.pdf" download>Recommendation Letter</a> </p>
                </div>
            </div>
        </>
    );
};

export default Achivements;