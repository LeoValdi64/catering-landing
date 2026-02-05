import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-px bg-gold/60" />
          <Star className="w-4 h-4 text-gold fill-gold" />
          <div className="w-16 h-px bg-gold/60" />
        </div>

        <p className="text-gold uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-[family-name:var(--font-lato)] font-light">
          Houston&apos;s Premier Catering Experience
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.1] mb-8 font-[family-name:var(--font-playfair)]">
          Extraordinary
          <span className="block text-gold italic">Cuisine</span>
          for Every Occasion
        </h1>

        <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed font-[family-name:var(--font-lato)] font-light">
          From intimate gatherings to grand celebrations, GoldenPlate Catering
          crafts unforgettable culinary experiences that elevate your most
          important moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#quote"
            className="bg-gold text-charcoal px-8 py-4 rounded text-lg font-bold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 font-[family-name:var(--font-lato)]"
          >
            Request a Free Quote
          </a>
          <a
            href="#menus"
            className="border border-gold/40 text-gold px-8 py-4 rounded text-lg uppercase tracking-wider hover:bg-gold/10 transition-all duration-300 font-[family-name:var(--font-lato)]"
          >
            View Our Menus
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-warm-gray text-sm font-[family-name:var(--font-lato)]">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <span>500+ Events Catered</span>
          </div>
          <div className="w-px h-4 bg-warm-gray/30 hidden sm:block" />
          <span>Serving Houston Since 2010</span>
          <div className="w-px h-4 bg-warm-gray/30 hidden sm:block" />
          <span>Licensed &amp; Insured</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
