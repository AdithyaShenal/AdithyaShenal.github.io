import { ArrowUpRight, Cog, Eye, ScrollText } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import heroImage from "../assets/SE Image.jpg";

const Project_2 = () => {
  return (
    <>
      <div className="space-y-14">
        {/* ================= FEATURED PROJECT ================= */}
        <div className="bg-base-200/40 backdrop-blur rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT : IMAGE */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-gray-400">
                Featured Project - 2 · Personal Project
              </p>

              <div className="relative group">
                <img
                  src={heroImage}
                  alt="Milk Flow Project"
                  className="rounded-2xl w-full object-cover shadow-lg"
                />

                {/* Overlay buttons */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button className="btn btn-sm btn-primary rounded-full">
                    <Eye className="size-4" />
                    Live Demo
                  </button>

                  <button className="btn btn-sm btn-neutral border border-white/30 rounded-full">
                    Driver App
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT : CONTENT */}
            <div className="space-y-7">
              {/* Title + Description */}
              <div className="space-y-2">
                <h5 className="text-3xl font-semibold">Zaphyr</h5>
                <p className="text-gray-400 leading-relaxed">
                  Websockets (Socket.io) based chat application
                </p>
              </div>

              <div>
                <a href="http://milkflow.adithyashenal.me">
                  <u>www.milkflow.adithyashenal.me</u>
                </a>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-sm btn-outline btn-primary rounded-full gap-2">
                  <ScrollText size={16} />
                  Documentation
                </button>

                <button className="btn btn-sm btn-primary rounded-full gap-2">
                  <Cog size={16} />
                  System Architecture
                </button>
              </div>

              {/* Production Repo */}
              <button className="btn btn-sm btn-neutral border border-white/20 rounded-full gap-2 w-fit">
                <img
                  height="14"
                  width="14"
                  src="https://cdn.simpleicons.org/github/white"
                  alt="GitHub"
                />
                Production Repository - Deployed
                <ArrowUpRight className="size-4 ml-5" />
              </button>

              {/* Tech Stack */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  <SmallTechIcons
                    iconName="springboot"
                    techName="Spring Boot"
                  />{" "}
                  <SmallTechIcons iconName="spring" techName="Spring" />{" "}
                  <SmallTechIcons iconName="nodedotjs" techName="Node.js" />{" "}
                  <SmallTechIcons iconName="react" techName="React" />{" "}
                  <SmallTechIcons
                    iconName="reactquery"
                    techName="React-Query"
                  />{" "}
                  <SmallTechIcons iconName="vite" techName="Vite" />{" "}
                  <SmallTechIcons iconName="typescript" techName="TypeScript" />{" "}
                  <SmallTechIcons iconName="tailwindcss" techName="Tailwind" />{" "}
                  <SmallTechIcons iconName="daisyui" techName="Daisy UI" />{" "}
                  <SmallTechIcons
                    iconName="github/black/white"
                    techName="GitHub"
                  />{" "}
                  <SmallTechIcons
                    iconName="githubactions"
                    techName="GitHub Actions"
                  />{" "}
                  <SmallTechIcons iconName="docker" techName="Docker" />{" "}
                  <SmallTechIcons iconName="nginx" techName="Nginx" />{" "}
                  <SmallTechIcons
                    iconName="digitalocean"
                    techName="Digital Ocean"
                  />{" "}
                  <SmallTechIcons iconName="leaflet" techName="Leaflet.js" />{" "}
                  <SmallTechIcons iconName="maplibre" techName="MapLibre" />{" "}
                  <SmallTechIcons
                    iconName="openstreetmap"
                    techName="OpenStreetMap"
                  />{" "}
                  <SmallTechIcons iconName="capacitor" techName="Capacitor" />{" "}
                  <SmallTechIcons iconName="framework7" techName="Framework7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Repositories - Development Phase
          </p>

          <div className="flex flex-wrap gap-2">
            {["Backend", "Frontend", "Driver App", "Farmer App"].map((item) => (
              <button
                key={item}
                className="btn btn-sm btn-neutral border border-white/20 rounded-full gap-2"
              >
                <img
                  height="14"
                  width="14"
                  src="https://cdn.simpleicons.org/github/white"
                  alt="GitHub"
                />
                {item} Repository
                <ArrowUpRight className="size-4 ml-5" />
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl space-y-3">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Project Overview
          </p>

          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            molestiae nostrum assumenda sint consectetur reprehenderit
            perferendis hic porro placeat optio, quasi vitae distinctio
            provident architecto error! Eveniet animi quia libero amet quisquam
            qui doloremque recusandae maxime iure officia blanditiis, dolor
            iusto officiis pariatur soluta magni consequatur in magnam excepturi
            velit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Project_2;
