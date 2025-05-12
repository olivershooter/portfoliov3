import { Link, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export const Navbar = () => {
  const router = useRouter();
  const links = [
    { link: "/projects", label: "Projects" },
    { link: "/skills", label: "Skills" },
    { link: "/about", label: "About" },
  ];

  const scrollTo = (hash: string) => {
    const id = hash.replace("#", "");

    // First try immediately
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", hash);
      return;
    }

    // If not found, try again after a short delay (for Firefox)
    const retry = () => {
      const delayedElement = document.getElementById(id);
      if (delayedElement) {
        delayedElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", hash);
      }
    };

    // Try after 100ms and 300ms to handle Firefox timing issues
    setTimeout(retry, 100);
    setTimeout(retry, 300);
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith("/#")) {
      scrollTo(path);
    } else {
      router.navigate({ to: path });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full py-4">
        <Link to="/">
          <img src="/26.png" width="50rem" height="50rem" />
        </Link>

        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className="block leading-6 px-4 py-2 rounded-sm no-underline text-amber-800 font-bold hover:text-amber-600 transition-colors"
              onClick={(e) => handleNavClick(e, link.link)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
