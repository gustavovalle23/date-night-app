import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-romanticPink text-warmRed p-6 flex flex-col items-center">
      <header className="text-4xl font-bold mb-8">💖 Date Night Ideas 💖</header>
      {children}
      <footer className="mt-auto text-sm">Crafted with love 💕</footer>
    </div>
  );
}
