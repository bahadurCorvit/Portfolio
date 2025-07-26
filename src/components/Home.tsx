import Pic from "../assets/pic.jpg";
import { HiArrowCircleRight } from "react-icons/hi";

const Home = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full pt-32 sm:pt-52 bg-gray-100" id="home">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center h-full">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between">
          {/* Text Container */}
          <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:mr-12 text-lg text-center sm:text-left">
            <p className="text-blue-600 text-lg sm:text-xl mb-2">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
              Muhammad Fawad
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-600 mt-2">
              Deep Learning | Computer Vision | DeepFake
            </h2>
            <p className="text-gray-700 py-6 leading-relaxed max-w-[700px] mx-auto sm:mx-0">
            As a Research Assistant at Islamia College, I focus on DeepFake detection within the domain of Digital Image Processing, utilizing expertise in Machine Learning and Computer Vision. My journey from a Computer Science undergraduate to a dedicated researcher has been driven by a strong commitment to innovation and a desire to contribute meaningfully to advancements in AI technologies.
        </p>
        <p>
            Supported by a solid academic foundation at Islamia College, our research team is making significant progress in the field. Our collaborative efforts reflect the power of aligning passion with the pursuit of knowledge, aiming to push the boundaries of what's possible through applied AI research.
            </p>

            <div className="text-gray-700 mb-4 text-sm leading-relaxed">
              <p><strong>Email:</strong> <a href="mailto:201355@icp.edu.pk" className="text-blue-700 hover:underline">201355@icp.edu.pk</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammad-fawad-15a841319" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">muhammad-fawad</a></p>
              <p><strong>Location:</strong> Digital Image Processing Lab, Islamia College Peshawar, Pakistan</p>
            </div>

            <div>
              <button
                onClick={scrollToWork}
                className="text-white bg-blue-700 border-2 border-blue-700 px-6 py-3 my-4 flex items-center rounded-md hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
              >
                View My Work
                <span className="ml-3 group-hover:rotate-90 duration-300">
                  <HiArrowCircleRight />
                </span>
              </button>
            </div>
          </div>

          {/* Image */}
          <img
            className="rounded-full mb-6 sm:mb-0 sm:ml-16 w-[250px] sm:w-[300px] lg:w-[350px]"
            src={Pic}
            alt="Muhammad Fawad Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
