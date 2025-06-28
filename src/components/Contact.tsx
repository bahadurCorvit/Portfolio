import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "../assets/contact.png";
import { useState } from "react";

const Contact = () => {
  const [, setError] = useState(false);
  const [, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mrwhkle",
        "template_1nxtdvm",
        templateParams,
        "nAotBHDln0-9aUzza"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setIsSending(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          setSuccess(false);
          setError(true);
          setIsSending(false);
          toast.error(
            "There was an error sending your message. Please try again."
          );
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      <section
        id="contact"
        className="w-full min-h-screen bg-gray-100 flex flex-col lg:flex-row justify-center items-center py-10 gap-8 px-4"
      >
        {/* Left Column - Contact Information */}
        <div 
          className="w-full lg:w-2/5 max-w-lg bg-white p-8 rounded-xl shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Research Inquiries</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Email</h3>
              <p className="text-gray-600">201355@icp.edu.pk</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Phone</h3>
              <p className="text-gray-600">+92 312 9594710</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Location</h3>
              <p className="text-gray-600">
                Digital Image Processing Laboratory<br />
                Islamia College Peshawar, Pakistan
              </p>
            </div>
          </div>

          <img
            src={contactImg}
            alt="Research Contact"
            className="mt-8 w-full rounded-lg"
          />
        </div>

        {/* Right Column - Contact Form */}
        <div
          className="w-full lg:w-2/5 max-w-lg bg-white p-8 rounded-xl shadow-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          
          <p className="text-gray-600 mb-6">
            Interested in discussing research collaborations, graduate opportunities, 
            or my work in computer vision? Feel free to reach out.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject (e.g., Research Collaboration)"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
            >
              {isSending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;