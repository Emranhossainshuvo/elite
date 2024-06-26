const Navbar = () => {
  return (
    <>
      <div className="md:flex justify-between text-xl font-medium pt-5 items-center">
        <div>
            <p className="text-custom-text my-2 ms-1">Md. Emran Hossain</p>
        </div>
        <div className="text-custom-text">
            <ul className="flex items-center ms-1 gap-3">
                <li><a target="blank" href="https://medium.com/@emran.shuvo.dev">Blogs</a></li>
                <li className="bg-black p-1 rounded-md text-custom-text"><a href="/public/Emran.hossain.developer.pdf" download>Resume</a></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
