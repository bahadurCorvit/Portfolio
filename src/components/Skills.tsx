import Python from "../assets/python.jpg";
import OpenCV from "../assets/opencv.png";
import NumPy from "../assets/numpy.png";
import Pandas from "../assets/pandas.png";
import Matplotlib from "../assets/matplotlib.jpg";
import Seaborn from "../assets/seaborn.png";
import TensorFlow from "../assets/tensorflow.jpg";
import PyTorch from "../assets/pytorch.png";
import Sklearn from "../assets/sklearn.png";
import Git from "../assets/git.png";
import VSCode from "../assets/vscode.png";
import Jupyter from "../assets/src/modelsArts.jpg";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-gray-300" id="skills">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-xl">
            Artificial Intelligence | Deep Learning | Computer Vision | DeepFake
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8">
          {[ // Create an array of skill objects for cleaner structure
            { src: Python, name: "Python" },
            { src: OpenCV, name: "OpenCV" },
            { src: NumPy, name: "NumPy" },
            { src: Pandas, name: "Pandas" },
            { src: Matplotlib, name: "Matplotlib" },
            { src: Seaborn, name: "Seaborn" },
            { src: TensorFlow, name: "TensorFlow" },
            { src: PyTorch, name: "PyTorch" },
            { src: Sklearn, name: "Scikit-learn" },
            { src: Git, name: "Git" },
            { src: VSCode, name: "VS Code" },
            { src: Jupyter, name: "ModelArts" },
          ].map((tech, index) => (
            <div
              key={index}
              className="shadow-md shadow-white hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={tech.src} alt={`${tech.name}-icon`} />
              <p className="my-4">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
