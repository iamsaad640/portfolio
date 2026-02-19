"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Sparkles,
  Calendar,
} from "lucide-react";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="John Doe"
            required
            className="bg-white/5 border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="john@example.com"
            required
            className="bg-white/5 border-white/10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subject: e.target.value }))
          }
          placeholder="What's this about?"
          required
          className="bg-white/5 border-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Tell me about your project or idea..."
          required
          className="bg-white/5 border-white/10 min-h-[150px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

function ContactInfoCard() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-primary",
    },
  ];

  const socials = [
    { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Get in Touch
        </h3>

        <div className="space-y-4">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-white/5">
                <method.icon className={cn("w-5 h-5", method.color)} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{method.label}</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-semibold mb-4">Connect with me</h3>
        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-105 transition-all flex flex-col items-center gap-2"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
              <span className="text-xs text-muted-foreground">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={() => document.getElementById("name")?.focus()}
          className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
        >
          <Calendar className="w-6 h-6 text-blue-400" />
          <span className="text-sm font-medium">Schedule a call</span>
        </button>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="pt-24 md:pt-32 pb-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <ContactInfoCard />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm">
            Built with ❤️ by {personalInfo.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
