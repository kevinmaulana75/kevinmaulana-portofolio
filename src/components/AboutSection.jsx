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
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-2xl -z-10 animate-pulse hidden md:block" />
          </div>

          {/* Content Side */}
          <div className="flex-1 max-w-2xl glass-card floating p-10 md:p-14 text-center shadow-2xl shadow-blue-500/20">
            <div className="space-y-10">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                Creative techie blending design &amp; tech — UI/UX, web
                development, visual content, and IT infrastructure. Driven by
                teamwork, leadership, and making technical things look great.
                Let&apos;s connect!
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-3xl font-black tracking-widest mb-10 uppercase text-white" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-left">
                  {/* Phone */}
                  <a
                    href="tel:+6285284039709"
                    className="group flex items-center gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-500 transition-all duration-500 group-hover:-translate-y-2 shadow-lg border border-white/10">
                      <svg
                        className="w-8 h-8 fill-white/70 group-hover:fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.11 2.09z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        Phone
                      </span>
                      <span className="text-sm font-bold text-white/90">
                        +62 852 8403 9709
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/kevin-maulana-0b8337334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-500 transition-all duration-500 group-hover:-translate-y-2 shadow-lg border border-white/10">
                      <svg
                        className="w-8 h-8 fill-white/70 group-hover:fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        LinkedIn
                      </span>
                      <span className="text-sm font-bold text-white/90">
                        Kevin Maulana
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:kkevinmaulana72@gmail.com"
                    className="group flex items-center gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-500 transition-all duration-500 group-hover:-translate-y-2 shadow-lg border border-white/10">
                      <svg
                        className="w-8 h-8 fill-white/70 group-hover:fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        Email
                      </span>
                      <span className="text-sm font-bold text-white/90">
                        kkevinmaulana72@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/kevlnmaulana_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-500 transition-all duration-500 group-hover:-translate-y-2 shadow-lg border border-white/10">
                      <svg
                        className="w-8 h-8 fill-white/70 group-hover:fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        Instagram
                      </span>
                      <span className="text-sm font-bold text-white/90">
                        @kevlnmaulana_
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
