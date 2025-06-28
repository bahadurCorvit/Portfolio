import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AcademicImg from "../assets/academic.png"; // ✅ Import your custom image

const Footer = () => {
  return (
    <>
      <section className="w-full bg-gray-900 grid lg:grid-cols-3 grid-cols-1 gap-12 lg:p-16 p-8">
        {/* Research Contact */}
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-2xl font-bold border-b-2 border-blue-600 pb-2 inline-block">
            Research Collaborations
          </h1>
          <p className="text-gray-300">
            Interested in discussing research opportunities or potential collaborations in computer vision and AI?
          </p>
          <a 
            href="mailto:201355@icp.edu.pk" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium w-fit transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-2xl font-bold border-b-2 border-blue-600 pb-2 inline-block">
            Contact Details
          </h1>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <span className="text-gray-300">
                Digital Image Processing Laboratory<br />
                Islamia College Peshawar, Pakistan
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-400 text-xl" />
              <span className="text-gray-300">+92 312 9594710</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 text-xl" />
              <a href="mailto:201355@icp.edu.pk" className="text-gray-300 hover:text-blue-400">
                201355@icp.edu.pk
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-400 text-xl" />
              <span className="text-gray-300">9AM to 5PM (PST)</span>
            </div>
          </div>
        </div>

        {/* Academic Links */}
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-2xl font-bold border-b-2 border-blue-600 pb-2 inline-block">
            Academic Profiles
          </h1>
          <p className="text-gray-300">
            Connect with me on academic and professional networks:
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/muhammad-fawad-15a841319" 
              className="text-blue-400 hover:text-blue-300 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Academic Profile"
            >
              <img src={AcademicImg} alt="Academic Profile" className="w-6 h-6 rounded-full" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Research Updates */}
          <div className="mt-4">
            <h3 className="text-white font-medium mb-2">Research Updates</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your academic email"
                className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="w-full bg-gray-950 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-4 px-8 py-6">
        <div className="text-gray-400 text-sm text-center lg:text-left">
          © {new Date().getFullYear()} Muhammad Fawad - Computer Vision Researcher
        </div>
        <div className="text-white font-medium">
          <span className="text-blue-400">Digital Image Processing</span> Research Group
        </div>
        <div className="text-gray-400 text-sm">
          Last updated: September 2024
        </div>
      </section>
    </>
  );
};

export default Footer;
