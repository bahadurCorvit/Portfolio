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
              Research Profile
            </p>
          </div>
          <div></div>
        </div>

        {/** Content Section */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-32 px-6">
          {/** Text Section */}
          <div className="order-2 sm:order-1 text-center sm:text-left text-lg leading-relaxed">
            <p className="text-gray-700">
              I am a Computer Vision researcher specializing in deepfake detection and medical image analysis. 
              My work focuses on developing interpretable AI systems using multimodal approaches including:
            </p>
            
            <ul className="mt-4 list-disc pl-5 text-gray-700">
              <li>Vision-language models and thermal imaging analysis</li>
              <li>Biological feature verification (gaze patterns, lip dynamics)</li>
              <li>Model optimization techniques (knowledge distillation, constellation loss)</li>
              <li>Robust deepfake detection frameworks</li>
            </ul>

            <p className="text-gray-700 mt-6">
              With hands-on experience in PyTorch, TensorFlow, and OpenCV, I bridge cutting-edge research 
              with practical applications in security and healthcare diagnostics. My goal is to develop 
              ethical, trustworthy AI systems that address real-world challenges.
            </p>
            
            <p className="text-gray-700 mt-6 font-medium">
              Currently seeking research collaborations and graduate study opportunities to advance state-of-the-art 
              computer vision techniques.
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