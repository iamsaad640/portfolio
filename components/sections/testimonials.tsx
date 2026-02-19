"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote, MessageCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Folder Card Component with zoom effect
function FolderCard({
  testimonial,
  index,
  isActive,
  onClick,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Staggered colors for folder tabs
  const folderColors = [
    "from-violet-500 to-purple-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-amber-600",
    "from-pink-500 to-rose-600",
  ];

  const color = folderColors[index % folderColors.length];

  return (
    <motion.div
      className="relative cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Folder Tab */}
      <div
        className={cn(
          "absolute -top-3 left-4 h-6 rounded-t-lg px-3",
          "bg-gradient-to-r inline-flex items-center",
          color
        )}
      >
        <span className="text-[10px] font-medium text-white/90 uppercase tracking-wider whitespace-nowrap">
          {testimonial.company}
        </span>
      </div>

      {/* Main Card */}
      <motion.div
        className={cn(
          "relative glass rounded-2xl rounded-tl-none overflow-hidden",
          "border border-white/10",
          "transition-shadow duration-300",
          isActive && "ring-2 ring-primary/50",
          isHovered && "shadow-2xl shadow-black/30"
        )}
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? -2 : 0,
          rotateY: isHovered ? 2 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Decorative corner fold */}
        <div
          className={cn(
            "absolute top-0 right-0 w-12 h-12",
            "bg-gradient-to-br from-white/10 to-transparent"
          )}
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />

        <div className="p-6">
          {/* Quote Icon */}
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
              "bg-gradient-to-br",
              color
            )}
          >
            <Quote className="w-5 h-5 text-white" />
          </div>

          {/* Content */}
          <p className="text-sm text-foreground/80 leading-relaxed mb-6 line-clamp-4">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                "bg-gradient-to-br",
                color
              )}
            >
              <span className="text-sm font-bold text-white">
                {testimonial.author
                  ? testimonial.author.split(" ").map((n) => n[0]).join("")
                  : testimonial.company.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              {testimonial.author && (
                <p className="font-semibold text-sm">{testimonial.author}</p>
              )}
              <p className="text-xs text-muted-foreground">
                {testimonial.company}
              </p>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex gap-0.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </motion.div>
    </motion.div>
  );
}

// Conversation Bubble Component
function ConversationBubble({
  testimonial,
  index,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isActive: boolean;
}) {
  const isLeft = index % 2 === 0;

  const bubbleColors = [
    "from-violet-500/20 to-purple-500/10",
    "from-blue-500/20 to-cyan-500/10",
    "from-emerald-500/20 to-teal-500/10",
  ];

  const avatarColors = [
    "from-violet-500 to-purple-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
  ];

  return (
    <motion.div
      className={cn(
        "flex gap-4 items-start",
        isLeft ? "flex-row" : "flex-row-reverse"
      )}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Avatar */}
      <motion.div
        className={cn(
          "flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center",
          "bg-gradient-to-br shadow-lg",
          avatarColors[index % avatarColors.length]
        )}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-lg font-bold text-white">
          {testimonial.author
            ? testimonial.author.split(" ").map((n) => n[0]).join("")
            : testimonial.company.split(" ").map((n) => n[0]).join("")}
        </span>
      </motion.div>

      {/* Message Bubble */}
      <motion.div
        className={cn(
          "relative flex-1 max-w-xl glass rounded-2xl p-5",
          "bg-gradient-to-br",
          bubbleColors[index % bubbleColors.length],
          isLeft ? "rounded-tl-sm" : "rounded-tr-sm"
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Tail */}
        <div
          className={cn(
            "absolute top-4 w-3 h-3 bg-white/5 rotate-45",
            isLeft ? "-left-1.5" : "-right-1.5"
          )}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">
              {testimonial.company}
            </span>
          </div>

          <p className="text-foreground/90 leading-relaxed mb-4">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          <div className="flex items-center justify-between">
            <div>
              {testimonial.author && (
                <p className="font-semibold text-sm">{testimonial.author}</p>
              )}
              <p className="text-xs text-muted-foreground">{testimonial.company}</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Gallery View with Zoom Cards
function GalleryView({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <FolderCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

// Conversation View
function ConversationView() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {testimonials.map((testimonial, index) => (
        <ConversationBubble
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          isActive={false}
        />
      ))}
    </div>
  );
}

// Featured Testimonial Spotlight
function SpotlightView({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  const testimonial = testimonials[activeIndex];

  const colors = [
    "from-violet-500 to-purple-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
  ];

  const color = colors[activeIndex % colors.length];

  return (
    <div className="relative">
      {/* Main Spotlight Card */}
      <motion.div
        key={activeIndex}
        className="glass rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left - Visual */}
          <div
            className={cn(
              "lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center items-center",
              "bg-gradient-to-br",
              color
            )}
          >
            <motion.div
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              <span className="text-3xl lg:text-4xl font-bold text-white">
                {testimonial.author
                  ? testimonial.author.split(" ").map((n) => n[0]).join("")
                  : testimonial.company.split(" ").map((n) => n[0]).join("")}
              </span>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {testimonial.author && (
                <h4 className="text-xl font-bold text-white mb-1">
                  {testimonial.author}
                </h4>
              )}
              <p className="text-white/80 text-sm">{testimonial.company}</p>

              <div className="flex gap-1 justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-white text-white"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <motion.p
              className="text-lg lg:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {testimonial.content}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
            )
          }
          className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "bg-primary w-8"
                  : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setActiveIndex(
              activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
            )
          }
          className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"gallery" | "conversation" | "spotlight">("gallery");

  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            What People Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Feedback from colleagues and clients I&apos;ve had the pleasure to work with
          </p>

          {/* View Toggle */}
          <div className="inline-flex gap-2 p-1 rounded-full glass">
            {[
              { id: "gallery", label: "Gallery" },
              { id: "conversation", label: "Conversation" },
              { id: "spotlight", label: "Spotlight" },
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setViewMode(view.id as typeof viewMode)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  viewMode === view.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-white/10"
                )}
              >
                {view.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        {viewMode === "gallery" && (
          <GalleryView activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        )}
        {viewMode === "conversation" && <ConversationView />}
        {viewMode === "spotlight" && (
          <SpotlightView activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        )}
      </div>
    </section>
  );
}
