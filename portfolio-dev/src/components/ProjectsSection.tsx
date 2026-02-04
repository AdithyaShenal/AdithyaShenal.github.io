import Project_1 from "./Project_1";

const ProjectsSection = () => (
  <section className="bg-base-200 py-16 px-4">
    <div className="mx-auto w-full max-w-6xl">
      {/* ─── SECTION HEADING ─── */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-base-content/80 font-semibold mb-2">
          Featured Work
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p className="text-sm text-base-content/80 max-w-lg mx-auto mt-3 leading-relaxed">
          A collection of my most impactful projects, showcasing full-stack
          development, system architecture, and modern design principles.
        </p>
      </div>

      {/* ─── PROJECT 1 ─── */}
      <Project_1 />

      {/* ─── DIVIDER ─── */}
      <div className="flex items-center gap-4 my-14 max-w-2xl mx-auto">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-white/15" />
        <span className="text-gray-600 text-xs tracking-widest uppercase font-semibold">
          More Work
        </span>
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-white/15" />
      </div>

      {/* ─── PROJECT 2 ─── */}
      <Project_1 />
    </div>
  </section>
);

export default ProjectsSection;
