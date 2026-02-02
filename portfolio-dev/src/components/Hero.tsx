const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Software Engineer Intern</h1>
            <p className="py-6">
              Building scalable web applications with modern technologies.
              Passionate about clean code, system architecture, and creating
              exceptional user experiences.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-primary">View Projects</button>
              <button className="btn btn-primary">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
