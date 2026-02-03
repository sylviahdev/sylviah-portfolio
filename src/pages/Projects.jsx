import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const projects = [
    {
      title: "TaskTracker",
      description: "A task management app built with React and localStorage. Track your daily tasks easily and efficiently.",
      tech: ["React", "LocalStorage", "Tailwind"],
      live: "#",
      github: "#",
    },
    {
      title: "WeatherToday",
      description: "A real-time weather application using OpenWeather API. Check current weather and forecasts for any city.",
      tech: ["React", "API", "Tailwind"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
