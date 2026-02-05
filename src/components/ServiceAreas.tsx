import { MapPin, Car } from "lucide-react";

const primaryAreas = [
  "Downtown Houston",
  "River Oaks",
  "The Woodlands",
  "Sugar Land",
  "Katy",
  "Pearland",
  "Memorial",
  "Galleria / Uptown",
];

const extendedAreas = [
  "League City",
  "Cypress",
  "Spring",
  "Tomball",
  "Missouri City",
  "Friendswood",
  "Baytown",
  "Conroe",
  "Richmond",
  "Pasadena",
  "Humble",
  "Kingwood",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-[family-name:var(--font-lato)]">
            Where We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-playfair)]">
            Service Areas
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg font-[family-name:var(--font-lato)] font-light">
            Proudly serving the Greater Houston metropolitan area and surrounding
            communities within a 60-mile radius.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Primary areas */}
          <div className="bg-charcoal-light border border-gold/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-bold text-cream font-[family-name:var(--font-playfair)]">
                Primary Service Areas
              </h3>
            </div>
            <p className="text-cream/50 mb-6 font-[family-name:var(--font-lato)]">
              No delivery fee for events within these locations.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {primaryAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-cream/70 font-[family-name:var(--font-lato)]"
                >
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Extended areas */}
          <div className="bg-charcoal-light border border-gold/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-bold text-cream font-[family-name:var(--font-playfair)]">
                Extended Service Areas
              </h3>
            </div>
            <p className="text-cream/50 mb-6 font-[family-name:var(--font-lato)]">
              Available with a small travel fee. Contact us for details.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {extendedAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-cream/70 font-[family-name:var(--font-lato)]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-cream/40 text-sm mt-8 font-[family-name:var(--font-lato)]">
          Don&apos;t see your area? Contact us &mdash; we frequently accommodate
          events outside our standard service radius.
        </p>
      </div>
    </section>
  );
}
