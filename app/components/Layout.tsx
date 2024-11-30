import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-romanticPink text-warmRed p-6 flex flex-col items-center">
      <header className="text-4xl font-bold mb-8">💖 Date Night Ideas 💖</header>
      {children}
      <footer className="mt-auto text-center text-sm mt-8">
        <p className="mb-4">
          Built with ❤️ and shared for the world! Follow my journey as I <strong>build in public</strong>:
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://github.com/gustavovalle23"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gustavovalle-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-500"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/gustavovalledev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-500"
          >
            Instagram
          </a>
        </div>
        <p>Crafted with love 💕</p>
      </footer>
    </div>
  );
}
