"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { personalInfo, education, certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  GraduationCap,
  Award,
  Code,
  Coffee,
  Rocket,
  Heart,
  ChevronRight,
  GitBranch,
} from "lucide-react";

// Journey milestones
const journey = [
  {
    year: "2020",
    title: "Started Software Engineering",
    description: "Enrolled in BS Software Engineering at University of Gujrat",
    icon: GraduationCap,
    type: "education",
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "First Professional Role",
    description: "Web Developer at PITB — NEP / NIC, shipping real products",
    icon: Code,
    type: "work",
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Graduated & Full Stack Role",
    description: "Completed BS SE and joined Rutal, Inc as Full Stack Developer",
    icon: Rocket,
    type: "milestone",
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Software Engineer at Teczon LLC",
    description: "Building AI-native SaaS platforms and autonomous agents",
    icon: Award,
    type: "work",
    color: "bg-amber-500",
  },
  {
    year: "Now",
    title: "Scaling AI Systems",
    description: "Shipping multi-tenant AI products and freelancing globally",
    icon: Coffee,
    type: "current",
    color: "bg-primary",
  },
];

// Git-style commit timeline - Compact version
function CommitTimeline() {
  return (
    <div className="relative">
      {/* Git branch line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted" />

      <div className="space-y-4">
        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-4 items-start"
          >
            {/* Commit dot */}
            <div
              className={cn(
                "relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                item.color,
                item.type === "current" && "ring-4 ring-primary/30"
              )}
            >
              <item.icon className="w-4 h-4 text-white" />
            </div>

            {/* Commit content */}
            <div className="flex-1 min-w-0 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-primary font-semibold">
                  {item.year}
                </span>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px] px-1.5 py-0 h-4",
                    item.type === "current" && "bg-primary/10 text-primary border-primary/30",
                    item.type === "milestone" && "bg-purple-500/10 text-purple-400 border-purple-500/30",
                    item.type === "education" && "bg-blue-500/10 text-blue-400 border-blue-500/30",
                    item.type === "work" && "bg-green-500/10 text-green-400 border-green-500/30"
                  )}
                >
                  {item.type}
                </Badge>
              </div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Bio Section
function BioSection() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10">
            <User className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-xl">About Me</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {personalInfo.bio.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-muted-foreground text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Fun facts */}
        <div className="grid grid-cols-4 gap-2 pt-4">
          {[
            { emoji: "🏸", label: "Badminton" },
            { emoji: "🏏", label: "Cricket" },
            { emoji: "🎙️", label: "Podcasts" },
            { emoji: "🍕", label: "Pizza" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="text-lg">{fact.emoji}</span>
              <span className="text-[10px] text-muted-foreground">{fact.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Education Section
function EducationSection() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10">
            <GraduationCap className="w-5 h-5 text-blue-400" />
          </div>
          <CardTitle className="text-xl">Education</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {education.map((edu) => (
          <div key={edu.school}>
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">{edu.school}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {edu.startDate} - {edu.endDate} • GPA: {edu.gpa}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {edu.highlights.map((highlight) => (
                <Badge
                  key={highlight}
                  variant="outline"
                  className="text-[10px] bg-blue-500/5 text-blue-400 border-blue-500/20"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Certifications Section
function CertificationsSection() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <CardTitle className="text-xl">Certifications</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div>
              <p className="font-medium text-sm">{cert.name}</p>
              <p className="text-xs text-muted-foreground">
                {cert.issuer} • {cert.date}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </CardContent>
    </Card>
  );
}

// Journey Timeline Section
function JourneySection() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            journey.log
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="font-mono text-xs text-muted-foreground mb-4 flex items-center gap-2">
          <GitBranch className="w-3 h-3" />
          <span><span className="text-green-400">$</span> git log --oneline</span>
        </div>
        <CommitTimeline />
      </CardContent>
    </Card>
  );
}

// Mobile-optimized content components (without card wrapper)
function BioContent() {
  return (
    <div className="space-y-4">
      {personalInfo.bio.split("\n\n").map((paragraph, i) => (
        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}
      <div className="grid grid-cols-4 gap-2 pt-4">
        {[
          { emoji: "🏸", label: "Badminton" },
          { emoji: "🏏", label: "Cricket" },
          { emoji: "🎙️", label: "Podcasts" },
          { emoji: "🍕", label: "Pizza" },
        ].map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50"
          >
            <span className="text-lg">{fact.emoji}</span>
            <span className="text-[10px] text-muted-foreground">{fact.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div>
      {education.map((edu) => (
        <div key={edu.school}>
          <p className="font-semibold">{edu.degree}</p>
          <p className="text-sm text-muted-foreground">{edu.school}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {edu.startDate} - {edu.endDate} • GPA: {edu.gpa}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {edu.highlights.map((highlight) => (
              <Badge
                key={highlight}
                variant="outline"
                className="text-[10px] bg-blue-500/5 text-blue-400 border-blue-500/20"
              >
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function JourneyContent() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted" />
      <div className="space-y-3">
        {journey.map((item) => (
          <div key={item.year} className="relative flex gap-3 items-start">
            <div
              className={cn(
                "relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                item.color
              )}
            >
              <item.icon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 min-w-0 pb-2">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-xs text-primary font-semibold">
                  {item.year}
                </span>
              </div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificationsContent() {
  return (
    <div className="space-y-2">
      {certifications.map((cert) => (
        <a
          key={cert.name}
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
        >
          <div>
            <p className="font-medium text-sm">{cert.name}</p>
            <p className="text-xs text-muted-foreground">
              {cert.issuer} • {cert.date}
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </a>
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-sm bg-blue-500/10 text-blue-400 border-blue-500/20"
          >
            <User className="w-4 h-4 mr-2" />
            Get to know me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            From writing my first &quot;Hello World&quot; to building scalable systems - here&apos;s my story
          </p>
        </motion.div>

        {/* Mobile Layout - Tabs */}
        <div className="md:hidden">
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="w-full grid grid-cols-4 bg-card/50 backdrop-blur-sm border border-border/50 p-1 h-auto">
              <TabsTrigger
                value="bio"
                className="flex flex-col gap-1 py-2 px-1 data-[state=active]:bg-primary/20"
              >
                <User className="w-4 h-4" />
                <span className="text-[10px]">Bio</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex flex-col gap-1 py-2 px-1 data-[state=active]:bg-primary/20"
              >
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px]">Education</span>
              </TabsTrigger>
              <TabsTrigger
                value="journey"
                className="flex flex-col gap-1 py-2 px-1 data-[state=active]:bg-primary/20"
              >
                <GitBranch className="w-4 h-4" />
                <span className="text-[10px]">Journey</span>
              </TabsTrigger>
              <TabsTrigger
                value="certs"
                className="flex flex-col gap-1 py-2 px-1 data-[state=active]:bg-primary/20"
              >
                <Award className="w-4 h-4" />
                <span className="text-[10px]">Certs</span>
              </TabsTrigger>
            </TabsList>

            <Card className="mt-4 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <TabsContent value="bio" className="mt-0">
                  <BioContent />
                </TabsContent>
                <TabsContent value="education" className="mt-0">
                  <EducationContent />
                </TabsContent>
                <TabsContent value="journey" className="mt-0">
                  <JourneyContent />
                </TabsContent>
                <TabsContent value="certs" className="mt-0">
                  <CertificationsContent />
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>

        {/* Desktop Layout - Bento Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bio - Takes 2 columns on lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <BioSection />
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <EducationSection />
          </motion.div>

          {/* Journey Timeline - Takes 2 columns on lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <JourneySection />
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <CertificationsSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
