"use client";
import { portfolioConfig } from "@/config/portfolio";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./social-icons";

export function ProjectsSection() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">Work</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Projects</h2>
            {portfolioConfig.github && (
              <a
                href={`https://github.com/${portfolioConfig.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <GithubIcon size={16} />
                View all on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 mb-px">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="bg-black p-8 group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Star size={20} className="text-blue-400 mt-1" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-blue-400/70 border border-blue-400/20 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="bg-black p-6 group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-1 h-8 bg-blue-500/40 group-hover:bg-blue-500 transition-colors" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                        <GithubIcon size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] text-white/40 border border-white/10 px-1.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
