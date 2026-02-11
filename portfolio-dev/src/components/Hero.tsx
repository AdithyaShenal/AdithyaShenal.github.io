import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/Profile Photo.jpeg";

const Hero = () => {
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/AdithyaShenal" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adithyashenal?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhWE8ucKMSS29K8L0o8pl1w%3D%3D",
    },
    { icon: Mail, label: "Email", href: "mailto:washenal55@gmail.com" },
  ];

  return (
    <section
      className="bg-base-200 relative overflow-hidden flex items-center"
      id="hero"
    >
      {/* ─── AMBIENT BACKGROUND GLOWS ─── */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/7 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
      {/* subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* ════════════ LEFT – TEXT (3 / 5) ════════════ */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* ── availability badge ── */}

            {/* ── name + role ── */}
            <div style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1.5">
                Hi, I'm
              </p>
              <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight">
                Adithya Shenal
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                <span className="text-blue-500">Software Engineer</span>
                {/* <span className="text-gray-600"> Intern</span> */}
              </h2>
            </div>

            {/* ── bio ── */}
            <p
              className="text-lg text-base-content leading-relaxed max-w-md font-inter"
              style={{ animation: "fadeInUp 0.7s ease 0.25s both" }}
            >
              Software engineer with interests spanning full-stack development,
              distributed systems, and infrastructure. Focused on clean system
              design, reliability, and turning complex problems into
              maintainable software solutions.
            </p>

            {/* ── CTA buttons ── */}
            <div
              className="flex flex-wrap items-center gap-3 mt-1"
              style={{ animation: "fadeInUp 0.7s ease 0.45s both" }}
            >
              <a
                href="#projects"
                className="
                  inline-flex 
                  items-center 
                  gap-2 
                  bg-blue-500 
                  hover:bg-blue-400 
                  text-white 
                  text-sm 
                  font-semibold 
                  px-5 
                  py-2.5 
                  rounded-full 
                  shadow-md 
                  shadow-blue-500/25 
                  hover:shadow-blue-500/40 
                  transition-all 
                  duration-200 
                  hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="#contact"
                className="
                  inline-flex 
                  items-center 
                  gap-2 
                  bg-base-300 
                  border 
                  border-white/12 
                  hover:border-white/25 
                  text-sm 
                  font-semibold 
                  px-5 
                  py-2.5 
                  rounded-full 
                  transition-all 
                  duration-200 
                  hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* ── social row ── */}
            <div
              className="flex items-center gap-3 mt-2"
              style={{ animation: "fadeInUp 0.7s ease 0.55s both" }}
            >
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="size-9 rounded-full bg-base-300/50 border border-white/10 hover:border-blue-500/35 hover:bg-blue-500/10 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}

              {/* divider dot */}
              <span className="size-1 rounded-full bg-white/15 mx-1" />

              <span className="text-sm text-gray-600 font-medium">
                Sri Lanka
              </span>
            </div>
          </div>

          {/* ════════════ RIGHT – IMAGE (2 / 5) ════════════ */}
          <div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            style={{ animation: "fadeInRight 0.8s ease 0.2s both" }}
          >
            <div className="relative w-full max-w-xs">
              {/* outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/15 via-transparent to-blue-500/5 blur-xl z-0 scale-105" />

              {/* image frame */}
              <div className="relative z-10 group rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/30 bg-base-300/40">
                <img
                  src={heroImage}
                  alt="Adithya Shenal"
                  className="max-w-xs object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: "3/4" }}
                />
                {/* bottom gradient wash */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── KEYFRAMES ─── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
