import React from 'react';

const services = [
  {
    title: "AI Integration",
    desc: "Custom ChatGPT, Gemini, and LLM integrations for your business workflows.",
    icon: "⚡"
  },
  {
    title: "Vibe Coding",
    desc: "AI-assisted development training for teams to ship features 10x faster.",
    icon: "🚀"
  },
  {
    title: "Automation",
    desc: "Business process optimization using autonomous agents and smart triggers.",
    icon: "⚙️"
  },
  {
    title: "Consulting",
    desc: "Strategic AI roadmaps and cloud configuration for enterprise scale.",
    icon: "📈"
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Digital Solutions</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We provide end-to-end digital transformation powered by the latest breakthroughs in artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl glass hover:bg-white/5 transition-all group border-white/5 hover:border-primary/50 border">
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
