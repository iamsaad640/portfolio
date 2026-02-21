"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Briefcase,
} from "lucide-react";

type Experience = (typeof experiences)[0];

// Format date helper
function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// Calculate duration
function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths} months`;
  if (remainingMonths === 0) return `${years} year${years > 1 ? "s" : ""}`;
  return `${years} yr ${remainingMonths} mo`;
}

// Experience Card Component
function ExperienceCard({
  experience,
  index,
  isActive,
  onClick,
}: {
  experience: Experience;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const isCurrent = !experience.endDate;

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative transition-all duration-700",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      )}
    >
      {/* Timeline node */}
      <div
        className={cn(
          "absolute left-0 top-6 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300",
          isCurrent
            ? "bg-primary pulse-glow"
            : isActive
            ? "bg-accent"
            : "bg-secondary border border-primary/30"
        )}
      >
        <Briefcase className="w-3.5 h-3.5 md:w-5 md:h-5" />
      </div>

      {/* Card */}
      <div
        className={cn(
          "ml-12 md:ml-20 glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300",
          isActive && "ring-2 ring-primary/50 bg-white/5"
        )}
        onClick={onClick}
      >
        {/* Header */}
        <div className="p-4 md:p-6 pb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="min-w-0 flex-1">
              <h3 className="text-base md:text-xl font-bold">{experience.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Building2 className="w-4 h-4" />
                  {experience.company}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            {isCurrent && (
              <Badge className="bg-green-500/20 text-green-400 border-0">
                Current
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mt-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5">
                {calculateDuration(experience.startDate, experience.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <Accordion type="single" collapsible>
          <AccordionItem value="details" className="border-0">
            <AccordionTrigger className="px-6 py-3 hover:no-underline hover:bg-white/5">
              <span className="text-sm text-muted-foreground">
                View details & achievements
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="text-muted-foreground mb-4">{experience.description}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {experience.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                {experience.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

// Career Stats
function CareerStats() {
  const totalYears = experiences.reduce((acc, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();
    return acc + (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
  }, 0);

  const stats = [
    { value: Math.round(totalYears) + "+", label: "Years Experience" },
    { value: experiences.length, label: "Companies" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey through the tech industry
          </p>
        </div>

        {/* Career Stats */}
        <CareerStats />

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Timeline */}
          <div className="lg:col-span-2 relative">
            {/* Main timeline line - positioned outside cards */}
            <div className="absolute left-[15px] md:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary via-accent/50 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Side Panel - Quick Overview */}
          <div className="hidden lg:block">
            <div className="glass rounded-2xl p-6 sticky top-24">
              <h4 className="font-semibold mb-4">Quick Overview</h4>

              {/* Mini timeline */}
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl transition-all",
                      activeIndex === index
                        ? "bg-primary/20 border border-primary/30"
                        : "hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full",
                          !exp.endDate ? "bg-green-400" : "bg-muted-foreground"
                        )}
                      />
                      <span className="text-sm font-medium truncate">
                        {exp.role}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 ml-4">
                      {exp.company}
                    </p>
                  </button>
                ))}
              </div>

              {/* Skills from current selection */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-2">
                  Technologies used
                </p>
                <div className="flex flex-wrap gap-1">
                  {experiences[activeIndex].technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
