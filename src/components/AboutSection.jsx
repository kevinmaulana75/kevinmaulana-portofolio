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
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
