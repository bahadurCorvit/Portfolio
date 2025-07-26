import img1 from "../assets/Worktime.gif";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      <div
        className="flex flex-col justify-center items-center w-full h-full py-16"
        id="about"
      >
        {/** Header Section */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-8">
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-4xl font-bold inline text-black border-b-4 border-blue-600">
              Final Year Project
            </p>
          </div>
          <div></div>
        </div>

        {/** Content Section */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-32 px-6">
          {/** Text Section */}
          <div className="order-2 sm:order-1 text-center sm:text-left text-lg leading-relaxed">
            <p className="text-gray-700">
              During my final year project, I was involved in several key tasks related to deepfake detection:
            </p>
            
            <ul className="mt-4 list-disc pl-5 text-gray-700">
              <li>Explored Knowledge Distillation techniques to compress deepfake detection models while maintaining accuracy.</li>
              <li>Developed an interpretable detection framework using Rule-Based Representation Learning (RRL) </li>
              <li>Implemented Vision-Language Models for multimodal analysis in deepfake detection.</li>
              <li>Investigated the use of Thermal Imaging to create robust detection systems under varying conditions.</li>
              <li>Explored the utilization of Biological Features such as gaze, lip reading, and facial attributes for verification.</li>
              <li>Experimented with Constellation Loss to improve feature separation for classification tasks.</li>
            </ul>
            
            <p className="text-gray-700 mt-6 font-medium">
              Currently seeking research collaborations and graduate study opportunities to advance state-of-the-art computer vision techniques.
            </p>
          </div>

          {/** Image Section */}
          <div className="order-1 sm:order-2 flex justify-center items-center">
            <img
              src={img1}
              alt="AI Research Illustration"
              className="rounded-2xl w-[100%] md:w-[100%] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;