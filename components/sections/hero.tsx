import Image from "next/image";
import { cn } from "@/lib/utils";
import { personalInfo, stats } from "@/lib/data";
import {
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function BentoItem({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-5 card-3d",
        "animate-[bento-appear_0.7s_ease-out_both]",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const socials = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center px-4 pt-24 pb-20"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <BentoItem className="relative overflow-hidden" delay={0}>
            <div className="flex flex-col items-center text-center">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />

              {/* Avatar */}
              <div className="relative mb-6 z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] pulse-glow">
                  <Image
                    src="/saad-pic.jpeg"
                    alt={personalInfo.name}
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-indicator" />
                    {personalInfo.status}
                  </span>
                </div>

                <h1 className="text-3xl font-bold mb-2">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                <h2 className="text-lg text-muted-foreground mb-3">
                  {personalInfo.title}
                </h2>

                <p className="text-base text-foreground/80 mb-4">
                  {personalInfo.tagline}
                </p>

                <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mb-5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalInfo.location}</span>
                </div>

                <div className="flex justify-center gap-2 mb-6">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="gap-2 rounded-full glow-primary w-full" asChild>
                    <a href="#contact">
                      Let&apos;s Connect
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 rounded-full w-full" asChild>
                    <a href={personalInfo.resumeUrl} download>
                      <Download className="w-4 h-4" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>

              {/* Compact Stats Row */}
              <div className="grid grid-cols-4 gap-2 mt-6 pt-6 border-t border-white/10 w-full">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </BentoItem>
        </div>

        {/* Desktop Layout - Bento Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)]">
          {/* Main Hero Card */}
          <BentoItem
            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden"
            delay={0}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-indicator" />
                    {personalInfo.status}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
                  {personalInfo.title}
                </h2>

                <p className="text-lg text-foreground/80">
                  {personalInfo.tagline}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-3 mt-6">
                <Button className="gap-2 rounded-full glow-primary" asChild>
                  <a href="#contact">
                    Let&apos;s Connect
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 rounded-full" asChild>
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </BentoItem>

          {/* Avatar Card */}
          <BentoItem
            className="flex items-center justify-center relative overflow-hidden"
            delay={100}
          >
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] pulse-glow">
                <Image
                  src="/saad-pic.jpeg"
                  alt={personalInfo.name}
                  width={128}
                  height={128}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </BentoItem>

          {/* Social Links Card */}
          <BentoItem className="flex flex-col justify-center" delay={300}>
            <p className="text-sm text-muted-foreground mb-3">Find me on</p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </BentoItem>

          {/* Stats Cards */}
          {stats.slice(0, 2).map((stat, i) => (
            <BentoItem key={stat.label} className="flex flex-col justify-center" delay={400 + i * 100}>
              <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </BentoItem>
          ))}

          {stats.slice(2).map((stat, i) => (
            <BentoItem key={stat.label} className="flex flex-col justify-center" delay={700 + i * 100}>
              <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </BentoItem>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-muted-foreground">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
