import { useEffect } from "react";

const Expertise = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const percentage = (bar as HTMLElement).getAttribute("data-percentage");
      if (percentage) {
        (bar as HTMLElement).style.width = `${percentage}%`;
      }
    });
  }, []);

  const skills = [
    { name: "PyTorch", percentage: 90, color: "bg-red-600" },
    { name: "TensorFlow", percentage: 85, color: "bg-orange-500" },
    { name: "Computer Vision", percentage: 88, color: "bg-blue-600" },
    { name: "Python", percentage: 95, color: "bg-yellow-500" },
    { name: "OpenCV", percentage: 87, color: "bg-green-600" },
    { name: "Deep Learning", percentage: 85, color: "bg-purple-600" },
    { name: "Model Optimization", percentage: 80, color: "bg-pink-600" },
    { name: "Medical Imaging", percentage: 75, color: "bg-teal-500" },
  ];

  return (
    <div className="bg-gray-50 py-16 mt-24 z-10">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Research Expertise
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            My technical proficiency in AI/ML and computer vision technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg p-6 text-center border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 pt-4">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-100 rounded-full h-4 mt-6 relative overflow-hidden">
                <div
                  className={`progress-bar ${skill.color} h-4 rounded-full`}
                  data-percentage={skill.percentage}
                  style={{
                    width: "0%",
                    transition: "width 3s ease-in-out",
                  }}
                ></div>
                <span className="absolute right-2 top-0 text-xs text-gray-700 font-medium">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Research Specializations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Deepfake detection and analysis
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Multimodal learning (vision-language models)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Biological feature verification
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Knowledge distillation techniques
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Medical image analysis
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Model interpretability
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;