import Header from "./components/Header";
import Hero from "./components/Hero";
import WondersGrid from "./components/WondersGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <WondersGrid />

      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About this collection</h2>
          <p className="text-slate-600 leading-relaxed">
            The New Seven Wonders of the World were chosen in 2007 through a global vote organized by the New7Wonders Foundation. While not an official UNESCO designation, they reflect modern appreciation for cultural heritage and human achievement. This site provides a simple, visual overview to inspire your next deep dive.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Are these the only wonders?</h3>
            <p className="text-slate-600">No. Many lists exist: Ancient Wonders, Natural Wonders, and more. This list captures a modern, crowd-sourced selection.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Can I visit all seven?</h3>
            <p className="text-slate-600">Absolutely—with planning. They span four continents; travel requirements and seasons vary widely. Research local guidance and conservation rules.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Where do the images come from?</h3>
            <p className="text-slate-600">Images are placeholders for illustration. Replace them with your own photos or licensed images when publishing.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
