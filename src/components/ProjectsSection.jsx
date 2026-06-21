import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Akademik Mobile App",
    image: "/images/project/project1.png",
    alt: "Website 1",
    link: "https://github.com/kevinmaulana75",
  },
  {
    title: "PRADIPTA Event Ticketing System",
    image: "/images/project/project2.png",
    alt: "Website 2",
    link: "https://github.com/kevinmaulana75/tiket-pradipta.git",
  },
  {
    title: "Bookavy Library Management System",
    image: "/images/project/project3.png",
    alt: "Website 3",
    link: "https://github.com/kevinmaulana75",
  },
  {
    title: "Portfolio 2.0",
    image: "/images/project/project4.png",
    alt: "Website 4",
    link: "https://github.com/kevinmaulana75/kevinmaulana-portofolio.git",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-6 lg:p-24 relative overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none bg-text font-black italic text-white">
        PROJECTS
      </div>

      <ScrollReveal className="container mx-auto z-10 space-y-16">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase text-center md:text-left leading-none">
          PROJECT
          <br />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 group cursor-pointer hover:border-blue-400/50 transition-all duration-500 block text-white hover:text-white no-underline"
            >
              <div className="rounded-[3rem] overflow-hidden aspect-video bg-blue-900/50">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8 flex justify-between items-center">
                <h3 className="text-2xl font-bold uppercase tracking-tight">
                  {project.title}
                </h3>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
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
              </div>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
