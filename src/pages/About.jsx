export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 lg:px-32 py-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I’m Sylviah Rutto
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl">
        I build digital experiences that drive growth. I solve business problems through clean, scalable, and high-performance web solutions. I specialize in frontend and fullstack development, integrating modern technologies to deliver results.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
