import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 shadow ring-1 ring-black/5" />
          <span className="font-semibold text-slate-800 text-lg">Seven Wonders</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#wonders" className="hover:text-slate-900 transition-colors">Wonders</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
