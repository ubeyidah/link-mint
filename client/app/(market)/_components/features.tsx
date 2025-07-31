import Wrapper from "@/components/share/wrapper";
import {
  Clock,
  Globe,
  Zap,
  Gift,
  DollarSign,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: <Gift className="text-primary w-6 h-6" />,
    title: "Free to Start",
    desc: "Get started with free coins, pay only when you need more credits.",
  },
  {
    icon: <LayoutDashboard className="text-primary w-6 h-6" />,
    title: "Dashboard Overview",
    desc: "Manage all your shortened URLs in one clean, easy-to-use dashboard.",
  },
  {
    icon: <Clock className="text-primary w-6 h-6" />,
    title: "Link Expiry",
    desc: "Set expiration dates for your links to control access over time.",
  },
  {
    icon: <Zap className="text-primary w-6 h-6" />,
    title: "Easy & Modern UI",
    desc: "Enjoy a sleek, responsive, and intuitive user interface on all devices.",
  },
  {
    icon: <Zap className="text-primary w-6 h-6" />,
    title: "Quick Link Creation",
    desc: "Create short URLs in seconds with a simple form and instant results.",
  },
  {
    icon: <Globe className="text-primary w-6 h-6" />,
    title: "Multilingual Support",
    desc: "Use LinkMint in English, Amharic, or Arabic with localized experience.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#00001917]">
      <Wrapper className="relative py-16 text-center">
        <h2 className="text-3xl font-medium font-sans mb-3">Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Designed for simplicity and power. everything you need to manage your
          links smarter.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card shadow-md text-left space-y-4 hover:scale-[1.09] hover:-rotate-3 transition-all duration-300"
            >
              {feature.icon}
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
