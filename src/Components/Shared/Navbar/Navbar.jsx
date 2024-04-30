const Navbar = () => {
  return (
    <>
      <div className="md:flex justify-between text-xl font-medium pt-5 items-center">
        <div>
            <p className="text-[#0891B2]">Md. Emran Hossain</p>
        </div>
        <div className="text-white">
            <ul className="flex items-center gap-3">
                <li><a target="blank" href="https://medium.com/@emran.shuvo.dev">Blogs</a></li>
                <li className="bg-[#38BDF8] p-1 rounded-md text-white"><a href="/public/Emran.hossain.developer.pdf" download>Resume</a></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
