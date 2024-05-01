
const Achivements = () => {
    return (
        <>
            <div>

                <h2 className="text-3xl my-4 font-semibold ">
                    My <span className="text-[#1AC0EC]">Achivements</span>{" "}
                </h2>

                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">December 2023</p>
                    <h3 className="text-xl text-white font-medium">Web development Certificate</h3>

                    <p className="text-base text-white">I&apos;ve got certificate for completig my web development professional <br /> course with programming hero. Here&apos;s the <span className="text-[#38BDF8] "><a href="/public/certificate.pdf" download>Certificate</a></span></p>
                </div>
                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">Mars 2024</p>
                    <h3 className="text-xl text-white font-medium">Recommendation Letter</h3>
                    <p className="text-base text-white">I was part fo two month long Programming-Hero endgame programm <br /> It&apos;s like a shadow internship. Here&apos;s the <a className="text-[#38BDF8]" href="/public/Md. Emran Hossain.pdf" download>Recommendation Letter</a> </p>
                </div>
                <div className="bg-[#1E293B] mb-2 ps-4 rounded-md py-3">
                    <p className="text-[#38BDF8]">February 2024</p>
                    <h3 className="text-xl text-white font-medium">Campus Ambassador</h3>
                    <p className="text-base text-white">Currently I am a Campus ambassador at Government Titumir College of Programming Hero. Here my selection <a className="text-[#38BDF8]" download href="/public/Emran Hossain(ps) (1).png">Banner</a>  </p>
                </div>
            </div>
        </>
    );
};

export default Achivements;