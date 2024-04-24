const Navbar = () => {
  return (
    <>
      <div className="md:flex justify-between text-xl font-medium pt-5 items-center">
        <div>
            <p className="text-[#0891B2]">Md. Emran Hossain</p>
        </div>
        <div>
            <ul className="flex items-center gap-3">
                <li>Blogs</li>
                <li>Github</li>
                <li>Resume</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
