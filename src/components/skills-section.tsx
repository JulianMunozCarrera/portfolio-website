"use client";
import { portfolioConfig } from "@/config/portfolio";
import { Code2, Server, Wrench } from "lucide-react";

const categoryIcons = [Code2, Server, Wrench];

export function SkillsSection() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="bg-black py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {skills.map((group, i) => {
            const Icon = categoryIcons[i] ?? Code2;
            return (
              <div key={group.category} className="bg-black p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Icon size={20} className="text-blue-400" />
                  <h3 className="text-white font-semibold tracking-widest uppercase text-sm">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/60 text-sm group">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
