"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { navItems, personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Download,
  Home,
  User,
  Code2,
  FolderKanban,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const sectionIcons: Record<string, React.ElementType> = {
  hero: Home,
  about: User,
  skills: Code2,
  projects: FolderKanban,
  experience: Briefcase,
  testimonials: MessageSquare,
  contact: Mail,
};

const sectionColors: Record<string, string> = {
  hero: "from-violet-500 to-purple-500",
  about: "from-blue-500 to-cyan-500",
  skills: "from-emerald-500 to-teal-500",
  projects: "from-orange-500 to-amber-500",
  experience: "from-pink-500 to-rose-500",
  testimonials: "from-indigo-500 to-violet-500",
  contact: "from-green-500 to-emerald-500",
};

export function DynamicIsland() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const islandRef = useRef<HTMLDivElement>(null);

  // Track scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "projects", "experience", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (islandRef.current && !islandRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsExpanded(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const ActiveIcon = sectionIcons[activeSection] || Home;
  const activeColor = sectionColors[activeSection] || sectionColors.hero;

  return (
    <>
      {/* Desktop Navigation - Full Width */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="mx-auto px-6 pt-4">
          <nav
            className={cn(
              "max-w-5xl mx-auto flex items-center justify-between",
              "bg-black/70 backdrop-blur-2xl",
              "border border-white/10 rounded-full",
              "px-4 transition-all duration-300",
              isScrolled ? "py-2" : "py-3"
            )}
          >
            {/* Logo / Name */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-3 group"
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white",
                  "bg-gradient-to-br",
                  activeColor
                )}
              >
                {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="font-semibold text-sm text-white hidden lg:block">
                {personalInfo.name}
              </span>
            </a>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = sectionIcons[item.href.slice(1)] || Home;
                const isActive = activeSection === item.href.slice(1);

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavDesktop"
                        className={cn(
                          "absolute inset-0 rounded-full bg-gradient-to-r",
                          activeColor
                        )}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="hidden lg:inline">{item.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {[
                { icon: Github, href: personalInfo.socials.github },
                { icon: Linkedin, href: personalInfo.socials.linkedin },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation - Dynamic Island */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden" ref={islandRef}>
        <motion.div
          className={cn(
            "bg-black/90 backdrop-blur-2xl",
            "border border-white/10",
            "shadow-2xl shadow-black/50",
            "overflow-hidden relative"
          )}
          initial={false}
          animate={{
            width: isExpanded ? 300 : 160,
            height: isExpanded ? 250 : 48,
            borderRadius: isExpanded ? 24 : 24,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        >
          {/* Glow effect */}
          {isScrolled && !isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className={cn(
                "absolute -inset-[1px] rounded-full bg-gradient-to-r blur-sm -z-10",
                activeColor
              )}
            />
          )}

          {/* Collapsed State */}
          <motion.button
            onClick={() => setIsExpanded(true)}
            className="absolute inset-0 flex items-center justify-between w-full h-12 px-3"
            initial={false}
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: isExpanded ? "none" : "auto" }}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center",
                  "bg-gradient-to-br",
                  activeColor
                )}
              >
                <ActiveIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-medium text-white capitalize">
                {activeSection === "hero" ? "Home" : activeSection}
              </span>
            </div>
            <Menu className="w-4 h-4 text-white/60" />
          </motion.button>

          {/* Expanded State */}
          <motion.div
            className="p-4"
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              scale: isExpanded ? 1 : 0.95,
            }}
            transition={{
              duration: 0.2,
              delay: isExpanded ? 0.15 : 0,
            }}
            style={{ pointerEvents: isExpanded ? "auto" : "none" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    "bg-gradient-to-br from-primary to-accent"
                  )}
                >
                  <span className="text-xs font-bold text-white">
                    {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-xs text-white">{personalInfo.name}</p>
                  <p className="text-[10px] text-white/50">{personalInfo.title}</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1.5 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* Navigation Grid */}
            <nav className="grid grid-cols-2 gap-1.5 mb-3">
              {navItems.map((item) => {
                const Icon = sectionIcons[item.href.slice(1)] || Home;
                const isActive = activeSection === item.href.slice(1);
                const color = sectionColors[item.href.slice(1)];

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavMobile"
                        className={cn("absolute inset-0 rounded-xl bg-gradient-to-r", color)}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5 relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Quick Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="flex gap-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-1">
                {[
                  { icon: Github, href: personalInfo.socials.github },
                  { icon: Linkedin, href: personalInfo.socials.linkedin },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
