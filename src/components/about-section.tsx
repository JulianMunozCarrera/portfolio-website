"use client";
import { portfolioConfig } from "@/config/portfolio";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

export function AboutSection() {
  const { name, title, bio, github, email, linkedin, twitter, resume } = portfolioConfig;

  const socials = [
    { Icon: GithubIcon, label: "GitHub", href: `https://github.com/${github}`, show: !!github },
    { Icon: Mail, label: "Email", href: `mailto:${email}`, show: !!email },
    { Icon: LinkedinIcon, label: "LinkedIn", href: `https://linkedin.com/in/${linkedin}`, show: !!linkedin },
    { Icon: TwitterIcon, label: "Twitter", href: `https://x.com/${twitter}`, show: !!twitter },
    { Icon: FileText, label: "Resume", href: resume, show: !!resume },
  ].filter((s) => s.show);

  return (
    <section id="about" className="relative bg-black py-32 px-6">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/0 to-black pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {name}
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{bio}</p>

            <div className="flex gap-4 flex-wrap">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white border border-white/20 hover:border-white/60 px-4 py-2 text-sm transition-all duration-300 group"
                >
                  <Icon size={16} className="group-hover:text-blue-400 transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {[
              { label: "Title", value: title },
              { label: "Location", value: "Remote" },
              { label: "Available", value: "Open to work" },
              { label: "Focus", value: "Full Stack" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-black p-8">
                <p className="text-blue-400 text-xs tracking-[0.2em] uppercase mb-2">{label}</p>
                <p className="text-white font-semibold text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
