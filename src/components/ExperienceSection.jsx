import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section
      id="work-experience"
      className="min-h-screen flex items-center justify-center py-20 px-10 relative overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none bg-text font-black italic text-white">
        MY JOURNEY
      </div>

      <ScrollReveal className="container mx-auto z-10 text-white px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Work Experience */}
          <div className="glass-card p-8 md:p-10 flex flex-col h-full">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none border-b-4 border-blue-500 pb-4 mb-10 self-start">
              WORK
              <br />
              EXPERIENCE
            </h2>
            <div className="space-y-8 flex-1">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400">
                  Intern Graphic Design &amp; IT Technician
                </h3>
                <p className="text-sm opacity-60 font-bold uppercase tracking-widest">
                  Jul 2025 - Feb 2026
                </p>
                <p className="text-lg font-medium">
                  Fakultas Vokasi Universitas Brawijaya
                </p>
                <ul className="space-y-4 text-base opacity-70 leading-relaxed mt-4">
                  <li>
                    • Designed and edited Instagram content for the faculty
                    account using Canva.
                  </li>
                  <li>
                    • Edited promotional Reels for faculty events using CapCut.
                  </li>
                  <li>
                    • Installed and Configured storage servers &amp; IT
                    infrastructure.
                  </li>
                  <li>• LAN cable crimping &amp; PC assembly for labs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: Organization Experience */}
          <div className="glass-card p-8 md:p-10 flex flex-col h-full">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none border-b-4 border-blue-500 pb-4 mb-10 self-start">
              ORGANIZATION
              <br />
              EXPERIENCE
            </h2>
            <div className="space-y-10 flex-1">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400">
                  Staff of the Social Awareness and Concern Division
                </h3>
                <p className="text-sm opacity-60 font-bold uppercase tracking-widest">
                  Nov 2023 - Nov 2024
                </p>
                <p className="text-lg font-medium">OSIS SMKN 5 Malang</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400">
                  Head of the Division of Physical Health, Nutrition, and Sports
                </h3>
                <p className="text-sm opacity-60 font-bold uppercase tracking-widest">
                  Dec 2024 - Dec 2025
                </p>
                <p className="text-lg font-medium">OSIS SMKN 5 Malang</p>
              </div>
            </div>
          </div>

          {/* Column 3: Education */}
          <div className="glass-card p-8 md:p-10 flex flex-col h-full">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none border-b-4 border-blue-500 pb-4 mb-10 self-start">
              EDUCATION
            </h2>
            <div className="space-y-8 flex-1">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400">
                  SMK Negeri 5 Malang
                </h3>
                <p className="text-sm opacity-60 font-bold uppercase tracking-widest">
                  Jul 2023 - May 2026
                </p>
                <p className="text-lg font-medium leading-tight">
                  Pengembangan Perangkat Lunak dan Gim
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
