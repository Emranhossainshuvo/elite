const Banner = () => {
  return (
    <>
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2">
          <h3 className=" text-3xl font-semibold">
            <span className="text-white">Hello, I&apos;m Md.{" "}</span>
            <span className="text-[#1AC0EC]">Emran Hossain</span>
          </h3>
          <p className="text-lg text-white font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            nobis quasi a suscipit eaque non, vero reiciendis harum sapiente
            culpa aliquam illum nemo dolorum explicabo modi temporibus quis!
            Iure, beatae.
          </p>
          <ul className="flex gap-5 mt-10">
            <li className="w-10">
              <a
                href="https://www.flaticon.com/free-icons/linkedin"
                title="linkedin icon"
              >
                <img src="https://i.ibb.co/1qwMjsT/linkedin-1.png" alt="" />
              </a>
            </li>

            <li className="w-10">
              <a
                href="https://www.flaticon.com/free-icons/linkedin"
                title="twitter icon"
              >
                <img src="https://i.ibb.co/xLTp5Zw/twitter-2.png" alt="" />
              </a>
            </li>

            <li className="w-10">
              <a

                href="https://www.flaticon.com/free-icons/linkedin"
                title="github icon"
              >
                <img src="https://i.ibb.co/FmxMcn6/github.png" alt="" />
              </a>
            </li>

            <li className="w-10">
              <a
                href="https://www.flaticon.com/free-icons/linkedin"
                title="github icon"
              >
                <img src="https://i.ibb.co/HdwsW2t/medium.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img className="w-5/6"
            src="https://i.ibb.co/3rhzz4M/IMG-20231209-080753-removebg-4-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
