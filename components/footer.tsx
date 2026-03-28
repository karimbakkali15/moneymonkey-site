import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="relative inline-flex w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image src="/app-icon.png" alt="Meridian" fill className="object-cover" sizes="36px" />
              </span>
              <span className="font-serif font-semibold text-lg tracking-tight text-foreground">Meridian</span>
            </Link>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Calm, intelligent finance — bank connections, budgets, and AI that respects your data.
            </p>
          </div>

          <div>
            <h4 className="type-meta-caps text-[#c7a870] mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="type-meta-caps text-[#c7a870] mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/support.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Help centre
                </Link>
              </li>
              <li>
                <a
                  href="mailto:karimbakkali15@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="type-meta-caps text-[#c7a870] mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy.html"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 Meridian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
