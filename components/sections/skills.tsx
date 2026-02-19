"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/data";
import { Zap, Wrench, Clock, BookOpen } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiFastapi,
  SiPrisma,
  SiOpenai,
} from "react-icons/si";
import { IconType } from "react-icons";

// Tech icons mapping with real logos
const techIcons: Record<string, { color: string; bg: string; icon: IconType | null }> = {
  // Frontend
  react: { color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)", icon: SiReact },
  nextjs: { color: "#ffffff", bg: "rgba(255, 255, 255, 0.1)", icon: SiNextdotjs },
  typescript: { color: "#3178C6", bg: "rgba(49, 120, 198, 0.1)", icon: SiTypescript },
  tailwind: { color: "#06B6D4", bg: "rgba(6, 182, 212, 0.1)", icon: SiTailwindcss },
  materialui: { color: "#007FFF", bg: "rgba(0, 127, 255, 0.1)", icon: SiMui },
  // Backend
  nodejs: { color: "#339933", bg: "rgba(51, 153, 51, 0.1)", icon: SiNodedotjs },
  python: { color: "#3776AB", bg: "rgba(55, 118, 171, 0.1)", icon: SiPython },
  nestjs: { color: "#E0234E", bg: "rgba(224, 35, 78, 0.1)", icon: SiNestjs },
  fastapi: { color: "#009688", bg: "rgba(0, 150, 136, 0.1)", icon: SiFastapi },
  prisma: { color: "#2D3748", bg: "rgba(45, 55, 72, 0.15)", icon: SiPrisma },
  // AI & LLMs
  langchain: { color: "#1C3C3C", bg: "rgba(28, 60, 60, 0.15)", icon: null },
  openai: { color: "#412991", bg: "rgba(65, 41, 145, 0.1)", icon: SiOpenai },
  rag: { color: "#F97316", bg: "rgba(249, 115, 22, 0.1)", icon: null },
  vllm: { color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.1)", icon: null },
  agent: { color: "#06B6D4", bg: "rgba(6, 182, 212, 0.1)", icon: null },
  // Databases
  postgresql: { color: "#4169E1", bg: "rgba(65, 105, 225, 0.1)", icon: SiPostgresql },
  mongodb: { color: "#47A248", bg: "rgba(71, 162, 72, 0.1)", icon: SiMongodb },
  mysql: { color: "#4479A1", bg: "rgba(68, 121, 161, 0.1)", icon: SiMysql },
  pgvector: { color: "#336791", bg: "rgba(51, 103, 145, 0.1)", icon: null },
  qdrant: { color: "#DC382C", bg: "rgba(220, 56, 44, 0.1)", icon: null },
};

// Category colors
const categoryColors: Record<string, { gradient: string; color: string }> = {
  Frontend: { gradient: "from-blue-500 to-cyan-500", color: "#06B6D4" },
  Backend: { gradient: "from-green-500 to-emerald-500", color: "#10B981" },
  "AI & LLMs": { gradient: "from-purple-500 to-violet-500", color: "#8B5CF6" },
  Databases: { gradient: "from-orange-500 to-amber-500", color: "#F59E0B" },
};

// Orbiting skill visualization
function SkillOrbit() {
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const allSkills = skills.flatMap((s) => s.items);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Distribute skills across 3 rings
  const ringDistribution = [5, 7, 8];
  const ringRadii = [90, 160, 230];

  return (
    <div className="relative w-full h-[520px] mx-auto flex items-center justify-center">
      {/* Center Core */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow z-10 shadow-2xl">
        <Zap className="w-10 h-10 text-white" />
      </div>

      {/* Orbit rings */}
      {ringRadii.map((radius, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />
      ))}

      {/* Orbiting skills */}
      {allSkills.slice(0, 20).map((skill, index) => {
        let ringIndex = 0;
        let positionInRing = index;
        let totalInRing = ringDistribution[0];

        if (index >= 5 && index < 12) {
          ringIndex = 1;
          positionInRing = index - 5;
          totalInRing = ringDistribution[1];
        } else if (index >= 12) {
          ringIndex = 2;
          positionInRing = index - 12;
          totalInRing = ringDistribution[2];
        }

        const radius = ringRadii[ringIndex];
        const baseAngle = (360 / totalInRing) * positionInRing;
        const speed = ringIndex === 0 ? 1 : ringIndex === 1 ? 0.7 : 0.5;
        const direction = ringIndex === 1 ? -1 : 1;
        const angle = baseAngle + rotation * speed * direction;

        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const iconStyle = techIcons[skill.icon] || { color: "#888", bg: "rgba(136, 136, 136, 0.1)" };
        const isHovered = hoveredSkill === skill.name;

        return (
          <div
            key={skill.name}
            className="absolute transition-all duration-100"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              zIndex: isHovered ? 20 : 5,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg",
                isHovered && "scale-125 shadow-2xl"
              )}
              style={{
                backgroundColor: iconStyle.bg,
                boxShadow: isHovered ? `0 0 30px ${iconStyle.color}60` : undefined,
              }}
            >
              {iconStyle.icon ? (
                <iconStyle.icon className="w-7 h-7" style={{ color: iconStyle.color }} />
              ) : (
                <span className="text-base font-bold" style={{ color: iconStyle.color }}>
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            {/* Tooltip */}
            {isHovered && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-sm border border-white/10 whitespace-nowrap z-30">
                <p className="text-xs font-medium">{skill.name}</p>
                <p className="text-[10px] text-muted-foreground">{skill.level}% proficiency</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Category Legend */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        {skills.map((category) => {
          const catColor = categoryColors[category.category];
          return (
            <div key={category.category} className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: catColor?.color || "#888" }}
              />
              <span className="text-xs text-muted-foreground">{category.category}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Mobile: Compact grid of all skills
function MobileSkillsGrid() {
  const allSkills = skills.flatMap((s) => s.items);

  return (
    <div className="grid grid-cols-4 gap-2">
      {allSkills.map((skill) => {
        const iconStyle = techIcons[skill.icon] || { color: "#888", bg: "rgba(136, 136, 136, 0.1)", icon: null };
        const IconComponent = iconStyle.icon;
        return (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl glass"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: iconStyle.bg }}
            >
              {IconComponent ? (
                <IconComponent className="w-5 h-5" style={{ color: iconStyle.color }} />
              ) : (
                <span className="text-sm font-bold" style={{ color: iconStyle.color }}>
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <span className="text-[10px] text-center text-muted-foreground leading-tight">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Tech Arsenal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <MobileSkillsGrid />
        </div>

        {/* Desktop Layout - Orbit */}
        <div className="hidden md:block">
          <div className="glass rounded-3xl p-8">
            <SkillOrbit />
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-10 md:mt-16 grid grid-cols-3 gap-2 md:gap-4">
          {[
            { value: "20+", label: "Technologies", Icon: Wrench },
            { value: "3+", label: "Years Coding", Icon: Clock },
            { value: "∞", label: "Learning", Icon: BookOpen },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-3 md:p-4 text-center hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-1 md:mb-2">
                <stat.Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <p className="text-lg md:text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-[10px] md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
