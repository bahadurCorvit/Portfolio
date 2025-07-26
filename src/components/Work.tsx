import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const projects = [

  {
    image: project1,
    title: "Vision-Language Model for Deepfake Detection",
    description: "Multimodal analysis using image-text consistency for fake video detection.",
    demo: "#",
    code: "https://github.com/yourusername/vision-language-deepfake"
  },
  {
    image: project2,
    title: "Thermal Imaging-based Robust Detection",
    description: "Created deepfake detection system using thermal domain cues.",
    demo: "#",
    code: "https://github.com/yourusername/thermal-fake-detector"
  },
  {
    image: project3,
    title: "Knowledge Distilled MiniNet",
    description: "Compressed deepfake detection model while preserving performance.",
    demo: "#",
    code: "https://github.com/yourusername/knowledge-distilled-model"
  }
];

const Work = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#f9fafb]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" id="work">
        <div className="sm:mt-96">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600">Work</p>
          <p className="py-6 text-black text-xl">A selection of my recent AI-based deepfake research and development projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(({ image, title, description, demo, code }, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
            >
              <div className="opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 w-full h-full flex flex-col justify-center items-center p-4 text-center rounded-md">
                <span className="text-2xl font-bold text-white tracking-wider">{title}</span>
                <p className="text-white text-sm mt-2">{description}</p>
                <div className="pt-4">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm">Demo</button>
                  </a>
                  <a href={code} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm">Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
