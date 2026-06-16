"use client";

import { useState } from "react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const openPopup = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      alert("Mohon masukkan format email yang valid (contoh: nama@email.com).");
    } else {
      alert("Terima kasih! Pesan Anda telah berhasil dikirim.");
      setFormData({ name: "", email: "", message: "" });
      closePopup();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      {/* GET IN TOUCH Button (exposed for Footer to use) */}
      <div
        id="get-in-touch-btn"
        onClick={openPopup}
        className="flex flex-col items-center gap-8 mt-10 md:mt-0 p-10 md:p-16 rounded-[3rem] bg-blue-600 shadow-2xl shadow-blue-600/20 group hover:scale-105 hover:bg-blue-700 transition-all duration-300 mx-auto relative z-20 cursor-pointer"
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white flex items-center gap-4 transition-colors duration-300">
          GET IN TOUCH
          <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </h2>
      </div>

      {/* Contact Pop-up Form */}
      {isOpen && (
        <div
          id="contact-popup"
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] flex items-center justify-center opacity-100 pointer-events-auto transition-opacity duration-300"
          onClick={handleBackdropClick}
        >
          <div className="glass-card p-8 md:p-12 max-w-lg w-full mx-4 relative rounded-3xl shadow-2xl">
            <button
              id="close-popup-btn"
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              onClick={closePopup}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-8 text-center">
              Get In Touch
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold uppercase tracking-widest text-white/70 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold uppercase tracking-widest text-white/70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-widest text-white/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors uppercase tracking-widest"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
