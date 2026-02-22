import { personalInfo, testimonials, skills } from "@/lib/data";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  const allSkills = skills.flatMap((cat) => cat.items.map((item) => item.name));

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        description: personalInfo.tagline,
        email: `mailto:${personalInfo.email}`,
        url: "https://saad.run",
        knowsAbout: allSkills,
        sameAs: [
          personalInfo.socials.github,
          personalInfo.socials.linkedin,
          personalInfo.socials.fiverr,
          personalInfo.socials.upwork,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
      }}
    />
  );
}

export function ProfilePageJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: personalInfo.name,
          jobTitle: personalInfo.title,
          url: "https://saad.run",
        },
      }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `${personalInfo.name} — Software Engineering`,
        description: personalInfo.tagline,
        url: "https://saad.run",
        provider: {
          "@type": "Person",
          name: personalInfo.name,
        },
        serviceType: [
          "Full Stack Development",
          "AI Engineering",
          "SaaS Development",
          "Web Application Development",
        ],
        areaServed: "Worldwide",
      }}
    />
  );
}

export function ReviewsJsonLd() {
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: personalInfo.name,
        url: "https://saad.run",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: avgRating,
          reviewCount: testimonials.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: testimonials.slice(0, 10).map((t) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: t.author,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
          },
          reviewBody: t.content,
        })),
      }}
    />
  );
}
