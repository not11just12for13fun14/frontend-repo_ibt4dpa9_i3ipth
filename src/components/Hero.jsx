export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Explore the New Seven Wonders of the World
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Journey through breathtaking monuments, timeless architecture, and human ingenuity. Scroll to discover stories, facts, and stunning imagery.
          </p>
          <a href="#wonders" className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow">
            Start Exploring
          </a>
        </div>
        <div className="relative">
          <img src="/wonders/hero-collage.jpg" alt="Seven Wonders Collage" className="rounded-2xl shadow-xl ring-1 ring-black/10 object-cover w-full h-80" />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-lg ring-1 ring-black/5 text-sm">
            2007 • Global Poll by New7Wonders Foundation
          </div>
        </div>
      </div>
    </section>
  );
}
