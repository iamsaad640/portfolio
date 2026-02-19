"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  Star,
  Users,
  Zap,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Layers,
  Grid3X3,
  FolderKanban,
  Lock,
  ShieldCheck,
  Briefcase,
  Bot,
  FileText,
  Workflow,
  Activity,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Project = (typeof projects)[0];

// Project icon mapping
const projectIcons: Record<number, LucideIcon> = {
  1: Briefcase,    // TopCareersCaribbean - job board
  2: Bot,          // AI Chatbot SaaS
  3: FileText,     // AI Resume Builder
  4: Workflow,     // n8n Multi-Tenant
  5: Activity,     // Human Activity Recognition
  6: BarChart3,    // Stock Suggestion Tool
};

// Gradient colors for each project
const projectGradients: Record<number, string> = {
  1: "from-blue-500/20 via-cyan-500/10 to-transparent",
  2: "from-pink-500/20 via-purple-500/10 to-transparent",
  3: "from-amber-500/20 via-orange-500/10 to-transparent",
  4: "from-emerald-500/20 via-teal-500/10 to-transparent",
  5: "from-violet-500/20 via-indigo-500/10 to-transparent",
};

const projectAccents: Record<number, string> = {
  1: "bg-blue-500",
  2: "bg-pink-500",
  3: "bg-amber-500",
  4: "bg-emerald-500",
  5: "bg-violet-500",
};

// Featured Project Card - Large
function FeaturedProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "group relative overflow-hidden cursor-pointer border-0",
          "bg-card/50 backdrop-blur-sm",
          "hover:bg-card/80 transition-all duration-500"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onSelect}
      >
        {/* Background gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500",
            projectGradients[project.id] || projectGradients[1],
            isHovered && "opacity-80"
          )}
        />

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.1), transparent 40%)`,
          }}
        />

        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 rounded-xl bg-primary/10"
                animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                {(() => { const Icon = projectIcons[project.id] || Briefcase; return <Icon className="w-7 h-7 text-primary" />; })()}
              </motion.div>
              <div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-0 gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </Badge>
                  {project.nda && (
                    <Badge
                      variant="secondary"
                      className="bg-amber-500/10 text-amber-400 border-0 gap-1"
                    >
                      <ShieldCheck className="w-3 h-3" />
                      NDA Protected
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <motion.div
              className="p-2 rounded-full bg-primary/10"
              animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10">
          <CardDescription className="text-base leading-relaxed mb-6">
            {project.description}
          </CardDescription>

          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(project.stats).map(([key, value], i) => (
                <div
                  key={key}
                  className="text-center p-3 rounded-xl bg-background/50 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize mt-1">{key}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-background/50 border-border/50 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="relative z-10 pt-0 gap-3">
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="rounded-full gap-2"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {project.nda && (
            <Badge
              variant="outline"
              className="px-3 py-1.5 text-xs bg-amber-500/5 text-amber-400 border-amber-500/20 gap-1"
            >
              <Lock className="w-3 h-3" />
              Source code under NDA
            </Badge>
          )}
        </CardFooter>

        {/* Accent line */}
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 h-1 rounded-full",
            projectAccents[project.id] || projectAccents[1]
          )}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}

// Regular Project Card - Compact
function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "group relative overflow-hidden cursor-pointer h-full border-0",
          "bg-card/30 backdrop-blur-sm",
          "hover:bg-card/60 transition-all duration-300"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onSelect}
      >
        {/* Background gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-300",
            projectGradients[project.id] || projectGradients[1],
            isHovered && "opacity-60"
          )}
        />

        <CardHeader className="relative z-10 pb-2">
          <div className="flex items-center justify-between">
            <motion.div
              className="p-2 rounded-xl bg-primary/10"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {(() => { const Icon = projectIcons[project.id] || Briefcase; return <Icon className="w-6 h-6 text-primary" />; })()}
            </motion.div>
            <motion.div
              animate={{ x: isHovered ? 3 : 0 }}
              className="text-muted-foreground"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
          <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          {project.nda && (
            <Badge
              variant="secondary"
              className="mt-1.5 w-fit bg-amber-500/10 text-amber-400 border-0 gap-1 text-xs"
            >
              <ShieldCheck className="w-3 h-3" />
              NDA Protected
            </Badge>
          )}
        </CardHeader>

        <CardContent className="relative z-10 pb-4">
          <CardDescription className="text-sm line-clamp-2 mb-4">
            {project.description}
          </CardDescription>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-background/30 border-border/30 text-xs px-2 py-0"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge
                variant="outline"
                className="bg-background/30 border-border/30 text-xs px-2 py-0"
              >
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        {/* Accent line */}
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 h-0.5 rounded-full",
            projectAccents[project.id] || projectAccents[1]
          )}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}

// Project Detail Modal
function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border/50">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-2xl bg-primary/10">
              {(() => { const Icon = projectIcons[project.id] || Briefcase; return <Icon className="w-10 h-10 text-primary" />; })()}
            </div>
            <div>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription className="mt-1">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Preview Area */}
        <div
          className={cn(
            "relative aspect-video rounded-xl overflow-hidden mb-6",
            "bg-gradient-to-br",
            projectGradients[project.id] || projectGradients[1]
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {(() => { const Icon = projectIcons[project.id] || Briefcase; return <Icon className="w-20 h-20 text-primary/30" />; })()}
          </div>
        </div>

        {/* Stats */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(project.stats).map(([key, value], i) => {
              const icons = [Users, TrendingUp, Zap];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={key}
                  className="text-center p-4 rounded-xl bg-background/50 border border-border/50"
                >
                  <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs text-muted-foreground capitalize">{key}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Description */}
        <div className="space-y-4 mb-6">
          {project.longDescription.split("\n\n").map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            Built With
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {project.liveUrl ? (
            <Button className="flex-1 rounded-full gap-2" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
            </Button>
          ) : null}
          {project.nda ? (
            <div className="flex-1 flex items-center justify-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-sm py-2">
              <Lock className="w-4 h-4" />
              Source code protected under NDA
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"featured" | "all">("featured");

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-sm bg-orange-500/10 text-orange-400 border-orange-500/20"
          >
            <FolderKanban className="w-4 h-4 mr-2" />
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve built, from open-source tools to production applications
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as typeof viewMode)}>
            <TabsList className="bg-card/50 backdrop-blur-sm border border-border/50">
              <TabsTrigger value="featured" className="gap-2 data-[state=active]:bg-primary/20">
                <Star className="w-4 h-4" />
                Featured
              </TabsTrigger>
              <TabsTrigger value="all" className="gap-2 data-[state=active]:bg-primary/20">
                <Grid3X3 className="w-4 h-4" />
                All Projects
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === "featured" ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Projects - Large Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </div>

              {/* Other Projects - Compact Grid */}
              {otherProjects.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground">
                    More Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onSelect={() => setSelectedProject(project)}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
