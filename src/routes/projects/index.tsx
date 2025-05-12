import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-8">My Projects</h1>
        <div className="grid gap-8">
          {/* Project cards would go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-600">Project description goes here...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
