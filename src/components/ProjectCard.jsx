export default function ProjectCard({ title, description, tech, live, github }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm mb-4">
          <strong>Tech:</strong> {tech.join(", ")}
        </p>
      </div>

      <div className="flex gap-4 mt-4">
        {live && (
          <a href={live} target="_blank" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Live
          </a>
        )}
        {github && (
          <a href={github} target="_blank" className="text-gray-800 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition font-semibold">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
