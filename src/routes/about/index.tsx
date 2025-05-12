import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-8">About Me</h1>
        <div className="prose max-w-3xl">
          <p>
            Here you can write about yourself, your background, and your
            professional journey.
          </p>
        </div>
      </div>
    </section>
  );
}
