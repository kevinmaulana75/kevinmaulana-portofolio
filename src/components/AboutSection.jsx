import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-10 relative overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none bg-text font-black italic text-white">
        ABOUT
      </div>

      <ScrollReveal className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center justify-center">
          {/* Image Side */}
          <div className="w-full md:w-[400px] relative group">
            <div className="aspect-[3/4] w-full bg-blue-600 rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white/20">
              <img
                src="/images/profile/about.jpg"
                alt="About Kevin"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-2xl -z-10 animate-pulse hidden md:block" />
          </div>

          {/* Content Side */}
          <div className="flex-1 max-w-2xl glass-card floating p-10 md:p-14 text-center shadow-2xl shadow-blue-500/20">
            <div className="space-y-10">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                Creative techie blending design &amp; tech — UI/UX, web
                development, visual content, and IT infrastructure. Driven by
                teamwork, leadership, and making technical things look great.
                Let&apos;s connect!
              </p>

              {/* View CV Button (Google Drive Link) */}
              <div className="flex justify-center">
                <a
                  id="view-cv-btn"
                  href="https://drive.google.com/file/d/1DMi8rRcnBLyIxznGl8SB_bdegRAUuSQR/view?usp=drive_link" // Replace with your actual Google Drive CV link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border border-white/10 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <span>View CV</span>
                  <svg
                    className="w-4 h-4 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
