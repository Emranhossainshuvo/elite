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
          <div className="p-5 rounded-md bg-[#1E293B]">
            <div className="flex gap-4 justify-start rounded-md items-center">
              <img
                className="w-20"
                src="https://i.ibb.co/d5hj4FG/restaurant.png"
                alt=""
              />
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl font-semibold">Bistro boss Restaurent</h4>
                  <p className="bg-[#E879F9] rounded-md text-xs text-[#701A75] p-1">Firebase</p>
                  <p>Node</p>
                  <p>React</p>
                  <p>Mongodb</p>
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
