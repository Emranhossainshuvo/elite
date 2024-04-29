
const Skills = () => {
    return (
        <>
            <div className="mx-2 mt-5">
                <h2 className="text-3xl font-semibold ">
                    My <span className="text-[#1AC0EC]">skills</span>{" "}
                </h2>
                {/* a div for contain my all skills */}
                <div className="md:grid md:grid-cols-2 gap-3 mt-5 ">
                    <div>
                        <div className="flex justify-between items-center">
                            <h4>HTML</h4>
                            <p>70%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="70" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>CSS</h4>
                            <p>60%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="60" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>JavaScript</h4>
                            <p>40%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="40" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>TailwindCSS</h4>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="80" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>React</h4>
                            <p>60%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="60" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>Node</h4>
                            <p>50%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="50" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>Express</h4>
                            <p>40%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="40" max="100"></progress>
                    </div>
                    <div  >
                        <div className="flex justify-between items-center">
                            <h4>Mongodb</h4>
                            <p>60%</p>
                        </div>
                        <progress className="progress progress-info w-full" value="60" max="100"></progress>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;