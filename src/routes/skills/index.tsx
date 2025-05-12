import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-8">My Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Skill items would go here */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold">JavaScript</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
