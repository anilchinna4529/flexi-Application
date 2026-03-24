import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 text-sm text-accent">
          <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
          Next-Gen AI Solutions for Businesses
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 gradient-text leading-tight">
          Supercharge Your Workflow <br /> with Generative AI
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-foreground/60 mb-12">
          From custom ChatGPT enterprise integrations to full-stack AI applications. 
          We build the future of automated business processes today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-2xl shadow-primary/20">
            Get Started
          </button>
          <button className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/5 transition-all">
            See Our Services
          </button>
        </div>
      </div>
      
      <div className="container mt-20 px-6 relative z-10">
        <div className="w-full h-[400px] glass rounded-3xl border border-white/10 overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
           <div className="p-8 flex flex-col h-full bg-black/40">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 font-mono text-sm text-primary/80">
                 <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary/80 pr-1">Initializing AI Engine...</p>
                 <p className="mt-2 opacity-60">{"{ status: 'optimizing', efficiency: '+42%' }"}</p>
                 <p className="mt-1 opacity-60">{"{ integration: 'complete', security: 'verified' }"}</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
