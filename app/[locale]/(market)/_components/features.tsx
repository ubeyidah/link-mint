import Wrapper from "@/components/share/wrapper";
import {
  Clock,
  Globe,
  Zap,
  Gift,
  LayoutDashboard,
  Link2,
  BarChart3,
  Shield,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features">
      <Wrapper className="relative py-24 md:py-32 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Features
        </p>
        <h2 className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Everything you need
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg mb-16">
          Designed for simplicity and power. Everything you need to manage your
          links smarter.
        </p>

        {/* Bento Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
          {/* Card 1 — Large: Free to Start (spans 2 cols) */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 text-left md:col-span-2 md:row-span-1 bg-transparent">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-tight">Free to Start</h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Get started with free coins — no credit card required. Pay only
                when you need more credits to keep shortening.
              </p>
            </div>
            {/* Decorative graphic */}
            <div className="absolute bottom-4 right-6 flex items-end gap-1.5 opacity-20 transition-opacity group-hover:opacity-40">
              {[40, 56, 32, 64, 48].map((h, i) => (
                <div
                  key={i}
                  className="w-4 rounded-t-sm bg-primary"
                  style={{ height: h }}
                />
              ))}
            </div>
          </div>

          {/* Card 2 — Dashboard Overview */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 text-left md:row-span-2 bg-transparent">
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-tight">
                Dashboard Overview
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Manage all your shortened URLs in one clean, easy-to-use
                dashboard with real-time stats.
              </p>
            </div>
            {/* Mini dashboard wireframe */}
            <div className="mt-8 space-y-2.5 opacity-20 transition-opacity group-hover:opacity-40">
              <div className="flex gap-2">
                <div className="h-16 flex-[2] rounded-lg border border-primary/40 bg-primary/5" />
                <div className="h-16 flex-1 rounded-lg border border-primary/40 bg-primary/5" />
              </div>
              <div className="flex gap-2">
                <div className="h-10 flex-1 rounded-lg border border-primary/40 bg-primary/5" />
                <div className="h-10 flex-1 rounded-lg border border-primary/40 bg-primary/5" />
                <div className="h-10 flex-1 rounded-lg border border-primary/40 bg-primary/5" />
              </div>
              <div className="h-20 w-full rounded-lg border border-primary/40 bg-primary/5" />
            </div>
          </div>

          {/* Card 3 — Link Expiry */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 text-left bg-transparent">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">Link Expiry</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Set expiration dates for your links to control access over time.
              </p>
            </div>
            {/* Timer ring graphic */}
            <div className="absolute -bottom-6 -right-6 opacity-15 transition-opacity group-hover:opacity-30">
              <div className="h-28 w-28 rounded-full border-4 border-primary/60">
                <div className="absolute left-1/2 top-2 h-10 w-0.5 origin-bottom -translate-x-1/2 rotate-45 bg-primary/80" />
              </div>
            </div>
          </div>

          {/* Card 4 — Quick Link Creation */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 text-left bg-transparent">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">
                Quick Link Creation
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Create short URLs in seconds with a simple form and instant
                results.
              </p>
            </div>
            {/* URL bar graphic */}
            <div className="absolute bottom-5 left-8 right-8 opacity-15 transition-opacity group-hover:opacity-30">
              <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-3 py-2">
                <Link2 className="h-4 w-4 text-primary" />
                <div className="h-2 flex-1 rounded-full bg-primary/30" />
                <div className="h-5 w-12 rounded bg-primary/40" />
              </div>
            </div>
          </div>

          {/* Card 5 — Large: Multilingual Support (spans 2 cols) */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 text-left md:col-span-2 bg-transparent">
            <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-sm">
                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  Multilingual Support
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use LinkMint in English, Amharic, or Arabic with a fully
                  localized experience.
                </p>
              </div>
              {/* Language badges graphic */}
              <div className="flex flex-wrap gap-2">
                {["English", "አማርኛ", "العربية"].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-colors group-hover:bg-primary/10"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 6 — Modern UI */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 text-left bg-transparent">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">Easy & Modern UI</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Enjoy a sleek, responsive, and intuitive interface on all
                devices.
              </p>
            </div>
            {/* Device frames graphic */}
            <div className="absolute -bottom-2 -right-4 flex items-end gap-1.5 opacity-15 transition-opacity group-hover:opacity-30">
              <div className="h-20 w-10 rounded-t-lg border-2 border-primary/50" />
              <div className="h-28 w-16 rounded-t-lg border-2 border-primary/50" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
