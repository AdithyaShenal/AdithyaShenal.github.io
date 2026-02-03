import heroImage from "../assets/SE Image.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          {/* Image column */}
          <div className="w-full lg:w-3/5 flex justify-center">
            <img
              src={heroImage}
              className="w-full  rounded-lg shadow-2xl h-120"
            />
          </div>

          {/* Text column */}
          <div className="w-full lg:w-2/5">
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
