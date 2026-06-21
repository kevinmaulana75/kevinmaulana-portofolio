import ScrollReveal from "./ScrollReveal";

// Use exact filenames from original HTML
const feedImageList = [
  "/images/feed/feed1.png",
  "/images/feed/feed2.png",
  "/images/feed/feed3.png",
  "/images/feed/feed4.png",
  "/images/feed/feed5.png",
  "/images/feed/feed6.png",
  "/images/feed/feed7.png",
  "/images/feed/feed8.png",
  "/images/feed/feed9.png",
  "/images/feed/feed10.png",
  "/images/feed/feed11.png",
  "/images/feed/feed12.png",
  "/images/feed/feed13.png",
  "/images/feed/feed14.png",
  "/images/feed/feed15.png",
  "/images/feed/feed16.png",
];

const storyImages = [
  "/images/feed/sg1.png",
  "/images/feed/sg2.png",
  "/images/feed/sg3.png",
  "/images/feed/sg4.png",
];

export default function WorksSection() {
  return (
    <section
      id="work"
      className="flex items-center justify-center pt-24 pb-10 px-6 lg:pt-32 lg:pb-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none bg-text font-black italic text-white">
        WORK
      </div>

      <ScrollReveal className="container mx-auto z-10">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-12 leading-none text-left">
          WORKS
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-start w-full">
          {/* Box 1: Featured Projects (4x4 Grid) */}
          <div className="glass-card overflow-hidden p-2 md:p-4 relative lg:w-[65%] w-full rounded-2xl md:rounded-[2.5rem]">
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {feedImageList.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Featured Feed Design"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover rounded-2xl md:rounded-[2.5rem] transition-all duration-500 hover:scale-105"
                />
              ))}
            </div>
          </div>

          {/* Box 2: Story Designs (2x Grid) */}
          <div className="glass-card overflow-hidden p-2 md:p-4 relative lg:w-[35%] w-full shrink-0 rounded-2xl md:rounded-[3rem]">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {storyImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Story Graphic Design"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[9/16] object-cover rounded-2xl md:rounded-[3rem] transition-all duration-500 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
