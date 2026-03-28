import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Meridian changed how I think about saving. The UI feels premium and the insights actually match my spending.",
    author: "Sarah Chen",
    role: "Product designer",
    avatar: "SC",
  },
  {
    quote: "Finally one place for budgets and AI questions without the clutter. The dark theme is easy on the eyes.",
    author: "Marcus Johnson",
    role: "Software engineer",
    avatar: "MJ",
  },
  {
    quote: "Open banking setup was smooth. I use it daily to check recurring bills before they hit.",
    author: "Emily Rodriguez",
    role: "Entrepreneur",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Loved by early users
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Feedback from people who want calm, capable finance tools — with a{" "}
            <span className="text-[#e0c78c] font-medium">premium</span> touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-card border border-white/[0.08] rounded-2xl p-6 shadow-sm shadow-black/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e0c78c]/85 text-[#e0c78c]" />
                ))}
              </div>

              <p className="font-sans text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3373fa]/15 ring-1 ring-[#e0c78c]/15 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-[#e0c78c]">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">{testimonial.author}</p>
                  <p className="font-sans text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
