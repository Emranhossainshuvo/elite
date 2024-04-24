const Banner = () => {
  return (
    <>
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2">
          <h3 className=" text-3xl font-semibold">
            Hello, I&apos;m Md. <span className="text-[#1AC0EC]">Emran Hossain</span>
          </h3>
          <p className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            nobis quasi a suscipit eaque non, vero reiciendis harum sapiente
            culpa aliquam illum nemo dolorum explicabo modi temporibus quis!
            Iure, beatae.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/9VtwWnR/IMG-20231209-080753-removebg-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;