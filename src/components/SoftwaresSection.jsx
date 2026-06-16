import ScrollReveal from "./ScrollReveal";

const appIcons = [
  {
    name: "Canva",
    src: "/logo/canva.svg",
    gradient: "from-cyan-400/20 to-purple-600/20",
  },
  {
    name: "CapCut",
    src: "/logo/capcut.svg",
    gradient: "from-gray-700/20 to-gray-900/40",
  },
  {
    name: "Figma",
    src: "/logo/figma.svg",
    gradient: "from-purple-400/20 to-pink-600/20",
  },
  {
    name: "VS Code",
    src: "/logo/vscode.svg",
    gradient: "from-blue-400/20 to-blue-600/20",
  },
  {
    name: "GitHub",
    src: "/logo/github_dark.svg",
    gradient: "from-gray-400/20 to-black/40",
  },
];

const skills = [
  "Social Media Content Design",
  "Graphic Design",
  "Video Editing",
  "Web Development",
  "UI/UX Design",
  "Team Collaboration",
  "Creative Problem Solving",
];

export default function SoftwaresSection() {
  return (
    <section
      id="apps"
      className="flex items-center justify-center py-12 md:py-16 px-10 relative overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none bg-text font-black italic text-white uppercase">
        SOFTWARES
      </div>

      <ScrollReveal className="container mx-auto z-10 text-center">
        {/* App Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
          {appIcons.map((app) => (
            <div
              key={app.name}
              className={`app-icon w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${app.gradient} rounded-[2rem] border border-white/20 flex items-center justify-center p-6 shadow-lg backdrop-blur-md`}
            >
              <img
                src={app.src}
                alt={app.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Skills List */}
        <div className="space-y-8 max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {skills.map((skill) => (
              <p
                key={skill}
                className="text-sm md:text-lg font-medium opacity-80 uppercase tracking-widest"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
