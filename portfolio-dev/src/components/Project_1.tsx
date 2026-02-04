import { Cog, Eye, ScrollText, ExternalLink } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import heroImage from "../assets/SE Image.jpg";
import RepoButton from "./buttons/RepoButton";
import { Link } from "react-router-dom";

const Project_1 = () => {
  const cvLink =
    "https://rawcdn.githack.com/AdithyaShenal/AdithyaShenal.github.io/b7fe6d816cc9470e9f61b7551c58f375d92c335e/jayani_anuththara_intern_cv.pdf";

  const handleViewCV = () => {
    window.open(cvLink, "_blank", "noopener,noreferrer");
  };

  const devRepos = [
    {
      name: "Backend",
      link: "https://github.com/AdithyaShenal/milkflow-backend",
    },
    {
      name: "Frontend",
      link: "https://github.com/AdithyaShenal/milkflow-admin-web",
    },
    {
      name: "Driver App",
      link: "https://github.com/AdithyaShenal/milkflow-driver-android",
    },
    {
      name: "Farmer App",
      link: "https://github.com/AdithyaShenal/milkflow-farmer-android",
    },
  ];

  const techStack = [
    { icon: "springboot", name: "Spring Boot" },
    { icon: "spring", name: "Spring" },
    { icon: "nodedotjs", name: "Node.js" },
    { icon: "react", name: "React" },
    { icon: "reactquery", name: "React-Query" },
    { icon: "vite", name: "Vite" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "tailwindcss", name: "Tailwind" },
    { icon: "daisyui", name: "Daisy UI" },
    { icon: "github/black/white", name: "GitHub" },
    { icon: "githubactions", name: "GitHub Actions" },
    { icon: "docker", name: "Docker" },
    { icon: "nginx", name: "Nginx" },
    { icon: "digitalocean", name: "Digital Ocean" },
    { icon: "leaflet", name: "Leaflet.js" },
    { icon: "maplibre", name: "MapLibre" },
    { icon: "openstreetmap", name: "OpenStreetMap" },
    { icon: "capacitor", name: "Capacitor" },
    { icon: "framework7", name: "Framework7" },
  ];

  return (
    <div className="relative">
      <button className="btn btn-primary">View Full CV</button>

      {/* ─── TOP BADGE ROW ─── */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
          Featured Project
        </span>
        <span className="text-xs text-gray-500 font-medium bg-base-300/80 border border-white/10 px-3 py-1 rounded-full">
          Final Year Project
        </span>
        <span className="text-xs text-gray-500 font-medium bg-base-300/80 border border-white/10 px-3 py-1 rounded-full">
          Team Leader
        </span>
      </div>

      {/* ─── MAIN CARD ─── */}
      <div className="relative bg-base-200/50 border border-blue-500/40 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* subtle ambient glow behind image */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* ─── LEFT COLUMN – IMAGE (2/5) ─── */}
          <div className="lg:col-span-2 relative">
            <div className="relative group overflow-hidden rounded-tl-2xl rounded-bl-none lg:rounded-bl-2xl rounded-tr-2xl lg:rounded-tr-none h-full min-h-80">
              <img
                src={heroImage}
                alt="Milk Flow Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* floating action pills */}
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <button className="inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-400 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  <Eye className="size-3.5" />
                  Live Demo
                </button>
                <button className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur border border-white/25 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5">
                  Driver App
                </button>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN – CONTENT (3/5) ─── */}
          <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center gap-5">
            {/* title + description */}
            <div>
              <h5 className="text-3xl font-bold tracking-tight mb-1.5">
                Milk Flow
              </h5>
              <p className="text-sm leading-relaxed max-w-lg text-base-content/80">
                An intelligent supply chain management &amp; route optimization
                system built for the milk processing industry — connecting
                farmers, drivers, and processors in real time.
              </p>
            </div>
            {/* live URL */}
            <a
              href="http://milkflow.adithyashenal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors w-fit group"
            >
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              www.milkflow.adithyashenal.me
            </a>
            {/* action buttons row */}
            <div className="flex flex-wrap gap-2.5">
              <button className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                <ScrollText size={14} />
                Documentation
              </button>
              <button className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 hover:bg-blue-500/25 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                <Cog size={14} />

                <Link to="projectOneArch">System Architecture</Link>
              </button>
            </div>

            {/* production repo pill */}
            <RepoButton
              text={"Production Repository · Deployed"}
              link="https://github.com/AdithyaShenal/milk-flow-production"
            />
            {/* ─── TECH STACK ─── */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2.5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t) => (
                  <SmallTechIcons
                    key={t.name}
                    iconName={t.icon}
                    techName={t.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DEV REPOS ROW ─── */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold whitespace-nowrap">
          Dev Repos
        </p>
        <div className="flex flex-wrap gap-2">
          {devRepos.map((item) => (
            <RepoButton text={item.name} key={item.name} link={item.link} />
          ))}
        </div>
      </div>

      {/* ─── PROJECT OVERVIEW ─── */}
      <div className="mt-6 border border-blue-500/40 rounded-xl px-5 py-4">
        <p className="text-sm uppercase tracking-widest text-base-content/60 font-semibold mb-2">
          Project Overview
        </p>
        <p className="text-base-content/90 text-sm leading-relaxed text-justify max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          molestiae nostrum assumenda sint consectetur reprehenderit perferendis
          hic porro placeat optio, quasi vitae distinctio provident architecto
          error! Eveniet animi quia libero amet quisquam qui doloremque
          recusandae maxime iure officia blanditiis, dolor iusto officiis
          pariatur soluta magni consequatur in magnam excepturi velit.
        </p>
      </div>
    </div>
  );
};

export default Project_1;
