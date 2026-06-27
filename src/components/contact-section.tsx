"use client";
import { portfolioConfig } from "@/config/portfolio";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

export function ContactSection() {
  const { name, email, github, linkedin, twitter } = portfolioConfig;

  const links = [
    { Icon: Mail, label: "Email", value: email, href: `mailto:${email}`, show: !!email },
    { Icon: GithubIcon, label: "GitHub", value: `github.com/${github}`, href: `https://github.com/${github}`, show: !!github },
    { Icon: LinkedinIcon, label: "LinkedIn", value: `linkedin.com/in/${linkedin}`, href: `https://linkedin.com/in/${linkedin}`, show: !!linkedin },
    { Icon: TwitterIcon, label: "Twitter / X", value: `@${twitter}`, href: `https://x.com/${twitter}`, show: !!twitter },
  ].filter((l) => l.show);

  return (
    <section id="contact" className="bg-black py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Whether you have a project in mind, a question, or just want to say hello — my inbox
            is always open.
          </p>
        </div>

        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 transition-all duration-300 mb-16 group"
        >
          Say Hello
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10">
          {links.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="bg-black p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500 transition-colors">
                <Icon size={16} className="text-white/50 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-1">{label}</p>
                <p className="text-white text-sm group-hover:text-blue-400 transition-colors truncate">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with Next.js · Three.js · GSAP · shadcn/ui
          </p>
        </div>
      </div>
    </section>
  );
}
