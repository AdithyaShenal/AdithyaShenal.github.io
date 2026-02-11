import {
  Server,
  Layout,
  Boxes,
  GitBranch,
  Database,
  Smartphone,
} from "lucide-react";
import TechIcon from "./TechIcon";
import SectionHeading from "./SectionHeading";

const techCategories = [
  {
    icon: Server,
    title: "Backend & APIs",
    accent: "blue",
    skills: [
      { iconName: "nodedotjs", techName: "Node.js" },
      { iconName: "spring", techName: "Spring" },
      { iconName: "springboot", techName: "Spring Boot" },
      { iconName: "express/black/white", techName: "Express" },
      { iconName: "typescript", techName: "TypeScript" },
      { iconName: "socketdotio/black/white", techName: "Socket.io" },
    ],
  },
  {
    icon: Database,
    title: "Databases & Caching",
    accent: "blue",
    skills: [
      { iconName: "mysql", techName: "MySQL" },
      { iconName: "mongodb", techName: "MongoDB" },
      { iconName: "redis", techName: "Redis" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend & UI",
    accent: "blue",
    skills: [
      { iconName: "react", techName: "React" },
      { iconName: "vite", techName: "Vite" },
      { iconName: "typescript", techName: "TypeScript" },
      { iconName: "javascript", techName: "JavaScript" },
      { iconName: "tailwindcss", techName: "Tailwind" },
      { iconName: "daisyui", techName: "Daisy UI" },
      { iconName: "html5", techName: "HTML5" },
      { iconName: "css", techName: "CSS" },
    ],
  },
  {
    icon: Boxes,
    title: "DevOps & Cloud",
    accent: "blue",
    skills: [
      { iconName: "docker", techName: "Docker" },
      { iconName: "kubernetes", techName: "Kubernetes" },
      { iconName: "nginx", techName: "Nginx" },
      { iconName: "digitalocean", techName: "Digital Ocean" },
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control & CI/CD",
    accent: "blue",
    skills: [
      { iconName: "git", techName: "Git" },
      { iconName: "github/black/white", techName: "GitHub" },
      { iconName: "githubactions", techName: "GitHub Actions" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    accent: "blue",
    skills: [
      { iconName: "capacitor", techName: "Capacitor" },
      { iconName: "framework7", techName: "Framework7" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="bg-base-200 py-16 px-4 relative overflow-hidden">
      {/* ─── AMBIENT BACKGROUND GLOW ─── */}

      <div className="relative z-10 mx-auto w-full max-w-6xl font-inter">
        <SectionHeading
          preHeading="My Expertise"
          heading_1="Technical"
          heading_2="Skills"
          subTitle="Technologies and tools I use to bring ideas to life"
        />

        {/* ─── TECH GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {techCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="relative group bg-base-200/50 border border-blue-500/40 rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-black/10"
              >
                {/* subtle glow per card */}

                <div className="relative z-10 p-5">
                  {/* ── category header ── */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* icon shell */}
                    <div className="size-9 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                      <Icon className="size-4 text-blue-400" />
                    </div>

                    {/* title */}
                    <h3 className="text-base font-bold tracking-tight">
                      {category.title}
                    </h3>

                    {/* skill count badge */}
                    <span className="ml-auto text-xs text-gray-500 font-semibold bg-base-300/60 border border-white/8 px-2 py-0.5 rounded-full">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* ── tech icons ── */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechIcon
                        key={skill.techName}
                        iconName={skill.iconName}
                        techName={skill.techName}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── OPTIONAL: PROFICIENCY NOTE ─── */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-inter">
            Actively learning and expanding this toolkit — always exploring new
            technologies to solve problems more effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
