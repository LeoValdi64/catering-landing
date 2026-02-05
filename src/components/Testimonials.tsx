import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah & David Mitchell",
    role: "Wedding Reception, The Woodlands",
    text: "GoldenPlate exceeded every expectation for our wedding. The food was absolutely exquisite, and our guests are still raving about the Chilean sea bass. The team was professional, attentive, and made our special day truly perfect.",
    rating: 5,
  },
  {
    name: "James Patterson",
    role: "VP of Operations, Patterson Energy Group",
    text: "We've used GoldenPlate for three consecutive annual galas and they deliver flawlessly every time. Their ability to serve 400 guests while maintaining fine-dining quality is remarkable. Truly the best corporate caterer in Houston.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Private Birthday Celebration",
    text: "I hired GoldenPlate for my mother's 70th birthday and it was the best decision. The menu was beautifully customized to include her favorite Mexican and American dishes. Every detail was perfect, and the staff was so warm and caring.",
    rating: 5,
  },
  {
    name: "Robert & Linda Chen",
    role: "Holiday Party, River Oaks",
    text: "Our annual Christmas party has never been better. GoldenPlate's holiday menu was creative and festive, the presentation was stunning, and their team handled everything from setup to cleanup. Absolutely worth every penny.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Bridal Brunch, Memorial Park",
    text: "The brunch catering was beyond anything I imagined. The mimosa bar was a hit, the eggs benedict station was perfection, and the pastry display looked like it belonged in a Parisian bakery. My bridal party was so impressed.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-[family-name:var(--font-lato)]">
            What Our Clients Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-playfair)]">
            Client Testimonials
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 3 in top row */}
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Bottom row - 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-charcoal border border-gold/10 rounded-lg p-8 flex flex-col hover:border-gold/20 transition-all duration-300">
      <Quote className="w-8 h-8 text-gold/30 mb-4" />

      <p className="text-cream/70 leading-relaxed mb-6 flex-1 font-[family-name:var(--font-lato)] italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div>
        <div className="flex gap-0.5 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
        </div>
        <h4 className="text-cream font-semibold font-[family-name:var(--font-playfair)]">
          {testimonial.name}
        </h4>
        <p className="text-cream/40 text-sm font-[family-name:var(--font-lato)]">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}
