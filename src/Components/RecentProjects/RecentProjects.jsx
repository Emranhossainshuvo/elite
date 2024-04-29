const RecentProjects = () => {
  return (
    <>
      {/* main div that will contain everything in this page */}
      <div className="m-2">
        <h2 className="text-3xl font-semibold ">
          Recent <span className="text-[#1AC0EC]">projects</span>{" "}
        </h2>
        {/* div to carry all three cards for projects */}
        <div>
          {/* first project */}
          <div className="p-8 mt-4 rounded-md bg-[#1E293B]">
            <div className="md:flex gap-4 justify-start rounded-md items-center">
              <img
                className="md:w-20 mb-3 w-28 mx-auto"
                src="https://i.ibb.co/d5hj4FG/restaurant.png"
                alt=""
              />
              <div className="md:ms-8">
                <div className="md:flex items-center gap-3 mb-4">
                  <h4 className="text-2xl font-semibold">Bistro boss Restaurent</h4>
                  <ul className="flex gap-3 text-center">
                    <li className="bg-[#E879F9] rounded-md w-16 font-medium text-xs text-[#701A75] p-1">Firebase</li>
                    <li className="bg-[#A3E635] rounded-md w-16 font-medium text-xs text-[#365316] p-1">Node</li>
                    <li className="bg-[#38BDF8] rounded-md w-16 font-medium text-xs text-[#0C589A] p-1">React</li>
                    <li className="bg-[#FB7185] rounded-md w-16 font-medium text-xs text-[#9E1C37] p-1">Mongodb</li>
                  </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p></div>
            </div>

          </div>
          {/* second project */}
          <div className="p-8 mt-4 rounded-md bg-[#1E293B]">
            <div className="md:flex gap-4 justify-start rounded-md items-center">
              <img
                className="md:w-20 mb-3 w-28 mx-auto"
                src="https://i.ibb.co/Hzn23c8/healthcare.png"
                alt=""
              />
              <div className="md:ms-8">
                <div className="md:flex items-center gap-3 mb-4">
                  <h4 className="text-2xl font-semibold">Revive (Team project)</h4>
                  <ul className="flex gap-3 text-center">
                    <li className="bg-[#38BDF8] rounded-md w-16 font-medium text-xs text-[#12589D] p-1">React</li>
                    <li className="bg-[#34D399] rounded-md w-16 font-medium text-xs text-[#365316] p-1">Express</li>
                    <li className="bg-[#FACC15] rounded-md w-16 font-medium text-xs text-[#0C589A] p-1">JWT</li>
                    <li className="bg-[#FB7185] rounded-md w-16 font-medium text-xs text-[#9E1C37] p-1">Mongodb</li>
                  </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p></div>
            </div>

          </div>
          {/* third project */}
          <div className="p-8 mt-4 rounded-md bg-[#1E293B]">
            <div className="md:flex gap-4 justify-start rounded-md items-center">
              <img
                className="md:w-20 mb-3 w-28 mx-auto"
                src="https://i.ibb.co/njGVcd1/tic-tac-toe-1.png"
                alt=""
              />
              <div className="md:ms-8">
                <div className="md:flex items-center gap-3 mb-4">
                  <h4 className="text-2xl font-semibold">Tik tak toe</h4>
                  <ul className="flex gap-3 text-center">
                    <li className="bg-[#E879F9] rounded-md w-16 font-medium text-xs text-[#701A75] p-1">Firebase</li>
                    <li className="bg-[#A3E635] rounded-md w-16 font-medium text-xs text-[#365316] p-1">Node</li>
                    <li className="bg-[#38BDF8] rounded-md w-16 font-medium text-xs text-[#0C589A] p-1">React</li>
                    <li className="bg-[#FB7185] rounded-md w-16 font-medium text-xs text-[#9E1C37] p-1">Mongodb</li>
                  </ul>
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
