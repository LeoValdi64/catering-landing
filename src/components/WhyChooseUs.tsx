import {
  Award,
  Clock,
  Sparkles,
  ShieldCheck,
  Users,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Award,
    title: "Award-Winning Chefs",
    description:
      "Our culinary team brings decades of experience from top restaurants and culinary programs across the country.",
  },
  {
    icon: Sparkles,
    title: "Fresh, Local Ingredients",
    description:
      "We source from local Texas farms and purveyors daily to ensure the highest quality in every dish we serve.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "Meticulous planning and execution means your event runs seamlessly. We arrive early and leave everything spotless.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description:
      "Complete peace of mind with full liability coverage, health certifications, and TABC-certified bartenders.",
  },
  {
    icon: Users,
    title: "Dedicated Event Coordinator",
    description:
      "Every event is assigned a personal coordinator who works with you from first call through last cleanup.",
  },
  {
    icon: Truck,
    title: "Full-Service Setup",
    description:
      "Equipment, linens, tableware, service staff, and cleanup all included. You simply enjoy the event.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-[family-name:var(--font-lato)]">
              The GoldenPlate Difference
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-playfair)]">
              Why Choose Us
            </h2>
            <div className="w-24 h-px bg-gold/40 mb-8" />
            <p className="text-cream/60 text-lg leading-relaxed mb-8 font-[family-name:var(--font-lato)] font-light">
              With over 15 years of culinary excellence in Houston, GoldenPlate
              Catering has earned a reputation for transforming events into
              extraordinary experiences. We don&apos;t just serve food &mdash; we
              create memories.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                  500+
                </div>
                <div className="text-cream/50 text-sm mt-1 font-[family-name:var(--font-lato)]">
                  Events Catered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                  15+
                </div>
                <div className="text-cream/50 text-sm mt-1 font-[family-name:var(--font-lato)]">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                  98%
                </div>
                <div className="text-cream/50 text-sm mt-1 font-[family-name:var(--font-lato)]">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-charcoal-light border border-gold/10 rounded-lg p-6 hover:border-gold/25 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-cream font-semibold text-lg mb-2 font-[family-name:var(--font-playfair)]">
                  {title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
