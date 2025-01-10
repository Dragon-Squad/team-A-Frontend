// ProjectList.tsx
import React, { useState, useEffect } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface Project {
  id: string;
  title: string;
  category: string;
  status: "Active" | "Halted" | "Completed";
  targetAmount: number;
  progress: number;
}

const ProjectList: React.FC<{ onEdit: (projectId: string) => void }> = ({
  onEdit,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Simulate fetching projects (replace with API call)
    async function fetchProjects() {
      const data = [
        {
          id: "1",
          title: "Improve Education",
          category: "Education",
          status: "Active",
          targetAmount: 50000,
          progress: 75,
        },
        {
          id: "2",
          title: "Provide Clean Water",
          category: "Health",
          status: "Completed",
          targetAmount: 30000,
          progress: 100,
        },
      ];
      setProjects(data);
    }

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || project.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Project List</h3>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Halted">Halted</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <ul className="space-y-4">
        {filteredProjects.map((project) => (
          <li
            key={project.id}
            className="flex justify-between items-center border border-gray-200 rounded-lg p-4"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">
                {project.title}
              </p>
              <p className="text-xs text-gray-500">
                Category: {project.category}
              </p>
              <p className="text-xs text-gray-500">Status: {project.status}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => onEdit(project.id)}
                className="text-blue-500 hover:underline text-sm"
              >
                <IconEdit size={16} /> Edit
              </button>
              <button className="text-red-500 hover:underline text-sm">
                <IconTrash size={16} /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
