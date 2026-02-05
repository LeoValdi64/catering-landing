import {
  Heart,
  Building2,
  PartyPopper,
  Snowflake,
  Flame,
  Coffee,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceCardProps[] = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Make your special day truly unforgettable with bespoke menus, elegant presentations, and impeccable service from cocktail hour through the last dance.",
    features: ["Custom tasting sessions", "Cake & dessert stations", "Full bar service"],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Impress clients and celebrate your team with polished catering solutions. From working lunches to gala dinners, we deliver professionalism on every plate.",
    features: ["Boxed lunches & buffets", "Branded presentations", "AV-friendly setup"],
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, graduations, or just because. Let us handle the food so you can be the guest at your own party.",
    features: ["Themed menus", "Passed appetizers", "Interactive food stations"],
  },
  {
    icon: Snowflake,
    title: "Holiday Gatherings",
    description:
      "Bring warmth and joy to your holiday celebrations with seasonal menus featuring traditional favorites and creative twists.",
    features: ["Thanksgiving feasts", "Christmas dinner packages", "New Year's Eve menus"],
  },
  {
    icon: Flame,
    title: "BBQ & Outdoor",
    description:
      "Texas-style BBQ done right. Slow-smoked meats, homestyle sides, and all the fixings for your outdoor celebration.",
    features: ["Slow-smoked brisket & ribs", "On-site grilling", "Outdoor setup included"],
  },
  {
    icon: Coffee,
    title: "Brunch Events",
    description:
      "Elevate your morning or midday gathering with artisanal brunch spreads featuring fresh, locally sourced ingredients.",
    features: ["Mimosa & coffee bars", "Waffle & omelet stations", "Pastry displays"],
  },
];

function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-charcoal-light border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
      <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
        <Icon className="w-7 h-7 text-gold" />
      </div>
      <h3 className="text-2xl font-bold text-cream mb-3 font-[family-name:var(--font-playfair)]">
        {title}
      </h3>
      <p className="text-cream/60 mb-6 leading-relaxed font-[family-name:var(--font-lato)]">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-cream/50 font-[family-name:var(--font-lato)]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-[family-name:var(--font-lato)]">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-playfair)]">
            Our Catering Services
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg font-[family-name:var(--font-lato)] font-light">
            Whether it&apos;s an elegant wedding reception or a lively backyard BBQ,
            we bring the same dedication to quality, flavor, and presentation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
