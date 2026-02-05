"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Holiday Gathering",
  "BBQ & Outdoor",
  "Brunch Event",
  "Other",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="quote" className="py-24 lg:py-32 bg-charcoal-light">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-charcoal border border-gold/20 rounded-lg p-12">
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-cream mb-4 font-[family-name:var(--font-playfair)]">
              Thank You!
            </h2>
            <p className="text-cream/60 text-lg font-[family-name:var(--font-lato)]">
              We&apos;ve received your quote request. Our team will review the
              details and get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 lg:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-[family-name:var(--font-lato)]">
              Let&apos;s Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-playfair)]">
              Request a Free Quote
            </h2>
            <div className="w-24 h-px bg-gold/40 mb-8" />
            <p className="text-cream/60 text-lg leading-relaxed mb-10 font-[family-name:var(--font-lato)] font-light">
              Tell us about your event and we&apos;ll put together a customized
              proposal with menu options and pricing. No obligation, no pressure
              &mdash; just great food planning.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold font-[family-name:var(--font-playfair)]">
                    Call Us
                  </h4>
                  <p className="text-cream/50 font-[family-name:var(--font-lato)]">
                    (713) 555-0198
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold font-[family-name:var(--font-playfair)]">
                    Email Us
                  </h4>
                  <p className="text-cream/50 font-[family-name:var(--font-lato)]">
                    events@goldenplatecatering.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-semibold font-[family-name:var(--font-playfair)]">
                    Availability
                  </h4>
                  <p className="text-cream/50 font-[family-name:var(--font-lato)]">
                    We recommend booking 2&ndash;4 weeks in advance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-charcoal border border-gold/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <input
                    type="text"
                    required
                    placeholder="John & Jane Smith"
                    className="w-full bg-charcoal-light border border-gold/10 rounded px-10 py-3 text-cream placeholder:text-cream/30 focus:border-gold/40 focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full bg-charcoal-light border border-gold/10 rounded px-10 py-3 text-cream placeholder:text-cream/30 focus:border-gold/40 focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                    <input
                      type="tel"
                      placeholder="(713) 555-0000"
                      className="w-full bg-charcoal-light border border-gold/10 rounded px-10 py-3 text-cream placeholder:text-cream/30 focus:border-gold/40 focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                    />
                  </div>
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                    Event Type
                  </label>
                  <select
                    required
                    className="w-full bg-charcoal-light border border-gold/10 rounded px-4 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors font-[family-name:var(--font-lato)] appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-cream/30">
                      Select event type
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-charcoal-light">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                    <input
                      type="date"
                      required
                      className="w-full bg-charcoal-light border border-gold/10 rounded px-10 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                    />
                  </div>
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                  Estimated Guest Count
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <input
                    type="number"
                    min="10"
                    placeholder="e.g. 150"
                    className="w-full bg-charcoal-light border border-gold/10 rounded px-10 py-3 text-cream placeholder:text-cream/30 focus:border-gold/40 focus:outline-none transition-colors font-[family-name:var(--font-lato)]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-cream/70 text-sm mb-2 font-[family-name:var(--font-lato)]">
                  Tell Us About Your Event
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gold/40" />
                  <textarea
                    rows={4}
                    placeholder="Describe your event, dietary needs, theme, or any special requests..."
                    className="w-full bg-charcoal-light border border-gold/10 rounded px-10 py-3 text-cream placeholder:text-cream/30 focus:border-gold/40 focus:outline-none transition-colors resize-none font-[family-name:var(--font-lato)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-charcoal py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/20 font-[family-name:var(--font-lato)]"
              >
                <Send className="w-5 h-5" />
                Submit Quote Request
              </button>

              <p className="text-cream/30 text-xs text-center font-[family-name:var(--font-lato)]">
                We&apos;ll respond within 24 hours. No spam, no obligations.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
