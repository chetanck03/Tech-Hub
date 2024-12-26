import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="decorative" className="object-cover w-full h-full" />
  </div>
);

const Contact = () => {
  const [open, setOpen] = useState(false); // Snackbar state
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ndpm3lg", // Replace with your EmailJS service ID
        "template_7cvlk3k", // Replace with your EmailJS template ID
        form.current,
        "R07fw9vAwA2mJdqCO" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("Email sending failed:", error.text);
        }
      );
  };

  return (
    <div id="contact" className="my-20 w-full px-6 sm:px-10">
      <div className="relative bg-gray-900 text-white py-24 rounded-lg shadow-lg overflow-hidden">
        {/* Decorative images */}
        <div className="absolute -left-20 top-0 hidden h-full sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Decorative swordman images */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center text-center space-y-10 px-6 sm:px-10">
          <p className="text-xs uppercase font-semibold tracking-widest text-gray-400">Ck Tech Hub</p>

          <AnimatedTitle
            title="Let’s b<u>uild</u> the <br /> future of <br /> IT & b<l>lockchain</l> together."
            className="special-font text-4xl sm:text-5xl md:text-6xl w-full font-extrabold leading-tight tracking-tight"
          />
          <p className="text-xs uppercase font-semibold tracking-widest text-gray-400">Contact Form</p>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-6"
          >
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="mt-5 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Snackbar */}
          {open && (
            <div className="mt-5 w-full max-w-md text-green-500 mx-auto p-4 rounded-lg bg-gray-800 flex justify-between items-center shadow-lg transform transition-all duration-300 ease-in-out">
              <span className="font-medium">Email sent successfully!</span>
              <button
                onClick={() => setOpen(false)}
                className="ml-4 text-red-600 bg-transparent hover:text-red-500  transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Contact;
