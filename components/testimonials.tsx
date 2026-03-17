import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "MoneyMonkey completely changed how I think about saving. I've saved more in 6 months than I did in the previous 2 years.",
    author: "Sarah Chen",
    role: "Product Designer",
    avatar: "SC",
  },
  {
    quote: "The investment tracking feature is incredible. I can finally see all my portfolios in one place with real insights.",
    author: "Marcus Johnson",
    role: "Software Engineer",
    avatar: "MJ",
  },
  {
    quote: "As a small business owner, managing personal and business finances was a nightmare. MoneyMonkey made it effortless.",
    author: "Emily Rodriguez",
    role: "Entrepreneur",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Loved by thousands of users
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our community has to say about their experience with MoneyMonkey.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card border border-border rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
