const Banner = () => {
  return (
    <>
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2">
          <h3 className=" text-3xl font-medium ms-1 pb-5">
            <span className="text-white">Hello, I&apos;m Md.{" "}</span>
            <span className="text-[#1AC0EC]">Emran Hossain</span>
          </h3>
          <p className="text-lg text-white font-medium ms-1">
            I&apos; m a Junior MERN stack developer. I love to create dynamic full stack web applications. I love the way I bring life in an web application.I believe in smoother experience
          </p>
          <ul className="flex md:w-2/4 w-4/6 md:my-10 md:mx-1 mx-auto  gap-5 mt-10">
            <li className=" ">
              <a target="_blank"
                href="https://www.linkedin.com/in/md-emran-hossain-shuvo/"
                title="linkedin icon"
              >
                <img src="https://i.ibb.co/1qwMjsT/linkedin-1.png" alt="" />
              </a>
            </li>

            <li className=" ">
              <a target="_blank"
                href="https://twitter.com/Shuvo0031770590"
                title="twitter icon"
              >
                <img src="https://i.ibb.co/xLTp5Zw/twitter-2.png" alt="" />
              </a>
            </li>

            <li className=" ">
              <a target="_blank"

                href="https://github.com/Emranhossainshuvo"
                title="github icon"
              >
                <img src="https://i.ibb.co/FmxMcn6/github.png" alt="" />
              </a>
            </li>

            <li className=" ">
              <a target="_blank"
                href="https://medium.com/@emran.shuvo.dev"
                title="medium icon"
              >
                <img src="https://i.ibb.co/HdwsW2t/medium.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img className="w-5/6 mx-auto"
            src="https://i.ibb.co/3rhzz4M/IMG-20231209-080753-removebg-4-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
