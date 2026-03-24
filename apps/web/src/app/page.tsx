import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      {/* Navigation (Simplified for MVP) */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter gradient-text">Flexi.com</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Training</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-white/90 transition-colors">
            Book Call
          </button>
        </div>
      </nav>

      <Hero />
      <Services />

      {/* Footer (Simplified) */}
      <footer className="py-20 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 text-center text-white/30 text-sm">
          © 2026 Flexi.com AI Digital Solutions. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
