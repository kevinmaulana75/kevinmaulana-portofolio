import { SpeedInsights } from "@vercel/speed-insights/next"
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-10">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Text Section */}
        <div className="flex flex-col z-10 select-none scale-110 md:scale-125 ml-12 md:ml-24">
          <h1 className="text-huge font-black animate-text delay-1">PORTO</h1>
          <h1 className="text-huge font-black animate-text delay-2 ml-16 md:ml-40">
            FOLIO
          </h1>
        </div>

        {/* Image Section (Blob) */}
        <div className="relative animate-image">
          <div className="blob w-64 h-64 md:w-[500px] md:h-[500px] overflow-hidden border-4 border-blue-400/20">
            <img
              src="/images/profile/profile.JPG"
              alt="Kevin"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-white/10 rounded-full animate-pulse" />
        </div>
      </main>
    </section>
  );
}
