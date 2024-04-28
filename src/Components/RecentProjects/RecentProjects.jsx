const RecentProjects = () => {
  return (
    <>
      {/* main div that will contain everything in this page */}
      <div>
        <h2 className="text-3xl font-semibold ">
          Recent <span className="text-[#1AC0EC]">projects</span>{" "}
        </h2>
        {/* div to carry all three cards for projects */}
        <div>
          {/* first project */}
          <div className="p-8 rounded-md bg-[#1E293B]">
            <div className="flex gap-4 justify-start rounded-md items-center">
              <img
                className="w-20"
                src="https://i.ibb.co/d5hj4FG/restaurant.png"
                alt=""
              />
              <div className="ms-8">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-2xl font-semibold">Bistro boss Restaurent</h4>
                  <p className="bg-[#E879F9] rounded-md font-medium text-xs text-[#701A75] p-1">Firebase</p>
                  <p className="bg-[#A3E635] rounded-md font-medium text-xs text-[#365316] p-1">Node</p>
                  <p className="bg-[#38BDF8] rounded-md font-medium text-xs text-[#0C589A] p-1">React</p>
                  <p className="bg-[#FB7185] rounded-md font-medium text-xs text-[#9E1C37] p-1">Mongodb</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
