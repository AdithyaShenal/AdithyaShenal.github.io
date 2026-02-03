import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    era: "2017 – 2020",
    phase: "G.C.E A/L",
    icon: BookOpen,
    institution: "G.C.E Advanced Level (A/L)",
    degree: "Advanced Level",
    stream: "Physical Science Stream",
    location: "Gampaha, Sri Lanka",
    highlight: "Z-Score: 1.3905",
    tags: ["Combined Mathematics - B", "I.C.T - B", "Physics - C"],
    accent: "text-gray-400",
    glowColor: "bg-gray-500/8",
    borderColor: "border-gray-500/20",
    dotColor: "bg-gray-400",
    dotGlow: "shadow-gray-500/30",
    pillBg: "bg-gray-500/10",
    pillBorder: "border-gray-500/25",
    pillText: "text-gray-400",
  },
  {
    era: "2021 – 2022",
    phase: "Diploma",
    icon: Award,
    institution: "IMBS Green Campus",
    degree: "Diploma in Human Resource Management (HRM)",
    stream: "Human Resource Management",
    location: "Gampaha, Sri Lanka",
    highlight: "Passed with 1st class GPA of 3.75",
    tags: ["Business Law - A", "Management - A", "HRM - A"],
    accent: "text-blue-300",
    glowColor: "bg-blue-500/8",
    borderColor: "border-blue-500/20",
    dotColor: "bg-blue-400",
    dotGlow: "shadow-blue-500/40",
    pillBg: "bg-blue-500/10",
    pillBorder: "border-blue-500/25",
    pillText: "text-blue-400",
  },
  {
    era: "2022 – Present",
    phase: "Undergraduate",
    icon: GraduationCap,
    institution: "University of Ruhuna Sri Lanka",
    degree: "Bachelor of Computer Science (Undergraduate)",
    stream: "Computer Science",
    location: "Matara, Sri Lanka",
    highlight: "Passed with higher GPA of 3.91",
    tags: ["Data Structures - A", "OOP - A", "DBMS - A"],
    accent: "text-blue-400",
    glowColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    dotGlow: "shadow-blue-500/50",
    pillBg: "bg-blue-500/15",
    pillBorder: "border-blue-500/30",
    pillText: "text-blue-400",
    isCurrent: true,
  },
];

const EducationSection = () => {
  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="mx-auto w-full max-w-6xl">
        {/* ─── SECTION HEADING ─── */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Education &amp;{" "}
            <span className="text-blue-500">Certifications</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto mt-3 leading-relaxed">
            Academic background and professional development milestones
          </p>
        </div>

        {/* ─── TIMELINE ─── */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isRight = index % 2 === 0; // alternates: left, right, left

              return (
                <div key={index} className="relative flex items-start">
                  {/* ─── DOT + ERA (center node) ─── */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    {/* era label — sits above the dot on desktop */}
                    <span className="hidden sm:block text-xs text-gray-500 font-semibold tracking-wide whitespace-nowrap mb-2">
                      {edu.era}
                    </span>

                    {/* glowing dot */}
                    <div
                      className={`size-4 rounded-full ${edu.dotColor} shadow-md ${edu.dotGlow} ring-2 ring-base-200 transition-transform duration-300 hover:scale-125`}
                    />
                  </div>

                  {/* ─── CARD ─── */}
                  {/* Mobile: always full-width left-offset. Desktop: alternates left / right. */}
                  <div
                    className={`
                      w-full pl-14 sm:pl-0
                      ${isRight ? "sm:pr-[calc(50%+2rem)] sm:pl-0" : "sm:pl-[calc(50%+2rem)] sm:pr-0"}
                    `}
                  >
                    <div
                      className={`
                        relative group bg-base-200/60 border ${edu.borderColor} backdrop-blur-sm
                        rounded-xl overflow-hidden transition-all duration-300
                        hover:border-white/20 hover:shadow-lg hover:shadow-black/20
                      `}
                    >
                      {/* ambient glow inside card */}
                      <div
                        className={`absolute -top-10 ${isRight ? "-right-10" : "-left-10"} w-40 h-40 ${edu.glowColor} blur-3xl rounded-full pointer-events-none`}
                      />

                      <div className="relative z-10 p-5">
                        {/* ─── top row: phase badge + era (mobile) ─── */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 ${edu.pillBg} border ${edu.pillBorder} ${edu.pillText} text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full`}
                          >
                            {edu.isCurrent && (
                              <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
                            )}
                            <Icon className="size-3" />
                            {edu.phase}
                          </span>

                          {/* era on mobile only */}
                          <span className="sm:hidden text-xs text-gray-500 font-semibold tracking-wide">
                            {edu.era}
                          </span>
                        </div>

                        {/* ─── institution + degree ─── */}
                        <h4 className="text-base font-bold tracking-tight leading-snug">
                          {edu.institution}
                        </h4>
                        <p
                          className={`text-sm font-semibold mt-0.5 ${edu.accent}`}
                        >
                          {edu.degree}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {edu.stream} · {edu.location}
                        </p>

                        {/* ─── highlight line ─── */}
                        <p className="text-xs text-gray-400 mt-2.5 leading-relaxed border-l-2 border-white/10 pl-2.5">
                          {edu.highlight}
                        </p>

                        {/* ─── tags ─── */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-base-300/60 border border-white/8 text-gray-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
