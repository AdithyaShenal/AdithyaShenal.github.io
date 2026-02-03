import TechIcon from "./TechIcon";

const TechStackSection = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="flex flex-col text-center gap-3 mb-10">
          <p className="text-md uppercase tracking-wide text-gray-500 font-semibold">
            My Expertise
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Category */}
        <div className="flex flex-col gap-6">
          <div className="border border-blue-500/40 rounded-xl p-4 sm:p-6">
            <p className="font-semibold mb-3">Backend & Caching</p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              <TechIcon iconName="nodedotjs" techName="Node.js" />
              <TechIcon iconName="spring" techName="Spring" />
              <TechIcon iconName="springboot" techName="Spring Boot" />
              <TechIcon iconName="express/black/white" techName="Express 5" />
              <TechIcon iconName="typescript" techName="TypeScript" />
              <TechIcon
                iconName="socketdotio/black/white"
                techName="Socket.io"
              />
              <TechIcon iconName="redis" techName="Redis" />
            </div>
          </div>

          <div className="border border-blue-500/40 rounded-xl p-4 sm:p-6">
            <p className="font-semibold mb-3">Frontend</p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              <TechIcon iconName="react" techName="React" />
              <TechIcon iconName="vite" techName="Vite" />
              <TechIcon iconName="typescript" techName="TypeScript" />
              <TechIcon iconName="javascript" techName="JavaScript" />
              <TechIcon iconName="tailwindcss" techName="Tailwind" />
              <TechIcon iconName="daisyui" techName="Daisy UI" />
              <TechIcon iconName="html5" techName="HTML" />
              <TechIcon iconName="css" techName="CSS" />
              {/* <TechIcon iconName="github/black/white" techName="GitHub" /> */}
            </div>
          </div>

          <div className="border border-blue-500/40 rounded-xl p-4 sm:p-6">
            <p className="font-semibold mb-3">DevOps & Infrastructure</p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              <TechIcon iconName="docker" techName="Docker" />
              <TechIcon iconName="kubernetes" techName="Kubernetes" />
              <TechIcon iconName="nginx" techName="Nginx" />
              <TechIcon iconName="digitalocean" techName="Digital Ocean" />
            </div>
          </div>

          <div className="border border-blue-500/40 rounded-xl p-4 sm:p-6">
            <p className="font-semibold mb-3">Version Control & CI/CD</p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              <TechIcon iconName="git" techName="Git" />
              <TechIcon iconName="github/black/white" techName="GitHub" />
              <TechIcon iconName="githubactions" techName="GitHub Actions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
