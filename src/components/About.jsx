const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden text-white">
      {/* Aurora Layers */}
      <div className="absolute inset-0">
        {/* Layer 1 */}
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 rounded-full animate-aurora1"></div>
        {/* Layer 2 */}
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 opacity-40 rounded-full animate-aurora2"></div>
        {/* Layer 3 */}
        <div className="absolute w-[180%] h-[180%] bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-30 rounded-full animate-aurora3"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide drop-shadow-lg">
          About Me
        </h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto drop-shadow-md">
          I'm a passionate Full-Stack Developer with experience in building modern web applications using React, Tailwind CSS, and ASP.NET.
        </p>
        <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
          I love turning ideas into reality with clean and efficient code.
        </p>
      </div>

      {/* Custom Aurora Animations */}
      <style jsx>{`
        @keyframes aurora1 {
          0% { transform: translate(-20%, -10%) rotate(0deg); }
          50% { transform: translate(20%, 10%) rotate(180deg); }
          100% { transform: translate(-20%, -10%) rotate(360deg); }
        }
        @keyframes aurora2 {
          0% { transform: translate(10%, -20%) rotate(0deg); }
          50% { transform: translate(-10%, 20%) rotate(-180deg); }
          100% { transform: translate(10%, -20%) rotate(-360deg); }
        }
        @keyframes aurora3 {
          0% { transform: translate(-15%, 15%) rotate(0deg); }
          50% { transform: translate(15%, -15%) rotate(180deg); }
          100% { transform: translate(-15%, 15%) rotate(360deg); }
        }

        .animate-aurora1 { animation: aurora1 25s linear infinite; }
        .animate-aurora2 { animation: aurora2 35s linear infinite; }
        .animate-aurora3 { animation: aurora3 45s linear infinite; }
      `}</style>
    </section>
  );
};

export default About;
