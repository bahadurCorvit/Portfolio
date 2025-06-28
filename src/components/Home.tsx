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
              Computer Vision Researcher & AI Enthusiast
            </h2>
            <p className="text-gray-700 py-6 leading-relaxed max-w-[700px] mx-auto sm:mx-0">
              I specialize in Deepfake Detection and Medical Image Analysis, with hands-on experience 
              in Vision-Language Models, Thermal Imaging, Gaze Estimation, and Lip Dynamics. My goal 
              is to develop ethical, trustworthy AI systems for real-world applications in security 
              and healthcare. Currently, I am seeking a Master's research opportunity in Computer 
              Vision and AI, where I can contribute as a dedicated research assistant.
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
                View Research
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
