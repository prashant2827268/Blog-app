import { useState } from "react";
import { Menu, X } from "lucide-react"; // shadcn + lucide icon set

/**
 * Reusable responsive navbar.
 * @param {function} onLogout  – callback for the Logout click
 */
export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Brand */}
        <a href="/" className="text-lg font-semibold tracking-tight">
          MyApp
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Logout button */}
          <li>
            <button
              onClick={onLogout}
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Logout
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile slide‑in panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 transform bg-background shadow-lg transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="text-lg font-semibold">Menu</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul
          className="flex flex-col gap-4 p-4"
          onClick={() => setOpen(false)} // close after click
        >
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted/50"
              >
                {label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={onLogout}
              className="w-full rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Backdrop when mobile menu open */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
