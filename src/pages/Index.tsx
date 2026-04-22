import { useState } from "react";
import heroImg from "@/assets/hero-garden.jpg";
import weddingImg from "@/assets/wedding-setup.jpg";
import dinnerImg from "@/assets/event-dinner.jpg";
import gazeboImg from "@/assets/gazebo.jpg";
import marqueeImg from "@/assets/marquee.jpg";
import rosesImg from "@/assets/roses.jpg";
import teaImg from "@/assets/tea-party.jpg";
import pathwayImg from "@/assets/pathway.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Instagram, Leaf, Flower2, Sparkles, Heart } from "lucide-react";

const galleryImages = [
  { src: weddingImg, caption: "Ceremony arch" },
  { src: dinnerImg, caption: "Twilight reception" },
  { src: gazeboImg, caption: "The white gazebo" },
  { src: marqueeImg, caption: "Garden marquee" },
  { src: rosesImg, caption: "The rose walk" },
  { src: teaImg, caption: "Garden tea" },
  { src: pathwayImg, caption: "Lavender path" },
  { src: heroImg, caption: "Golden hour lawn" },
];

const events = [
  {
    title: "Weddings",
    desc: "Say 'I do' beneath the trees. Floral arches, manicured lawns and a misty Tigoni backdrop your photographer will love.",
    icon: Heart,
  },
  {
    title: "Private Celebrations",
    desc: "Birthdays, anniversaries, baby showers — intimate gatherings under string lights and open sky.",
    icon: Sparkles,
  },
  {
    title: "Corporate & Retreats",
    desc: "Team days, brand launches and wellness retreats in a calming, photogenic setting just outside Nairobi.",
    icon: Leaf,
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please share your name and email so we can reply.");
      return;
    }
    toast.success("Thank you — we'll be in touch within 24 hours.");
    setForm({ name: "", email: "", date: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2">
            <Flower2 className="h-5 w-5 text-moss" />
            <span className="font-serif text-xl tracking-wide">MJ Gardens<span className="text-gold"> · </span>Tigoni</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-moss transition-colors">About</a>
            <a href="#events" className="hover:text-moss transition-colors">Events</a>
            <a href="#gallery" className="hover:text-moss transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-moss transition-colors">Voices</a>
            <a href="#contact" className="hover:text-moss transition-colors">Contact</a>
          </div>
          <Button asChild variant="default" size="sm" className="bg-moss hover:bg-moss/90 text-primary-foreground rounded-none">
            <a href="#contact">Book a Visit</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="MJ Gardens Tigoni at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="fade-in text-cream/90 tracking-[0.4em] text-xs uppercase mb-6">Tigoni · Kenya</p>
          <h1 className="fade-up font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light text-balance max-w-5xl leading-[1.05]">
            A garden made for <em className="text-blush">moments</em> that matter.
          </h1>
          <p className="fade-up text-cream/85 mt-8 max-w-xl text-lg font-light" style={{ animationDelay: "200ms" }}>
            MJ Gardens — a curated open-air venue for weddings, celebrations and gatherings, set in the green hills of Tigoni.
          </p>
          <div className="fade-up mt-10 flex gap-4" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="bg-cream text-moss hover:bg-cream/90 rounded-none px-8">
              <a href="#contact">Enquire</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-moss rounded-none px-8 bg-transparent">
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs tracking-widest">
          NEWLY OPENED · 2025
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">— Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-moss leading-tight mb-8">
              A young garden, with old soul.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Tucked into the cool, misty hills of Tigoni — Kenya's tea country — MJ Gardens is a freshly opened private estate
                designed from the ground up for celebrations.
              </p>
              <p>
                We've planted every hedge, traced every stone path and hung every light with one quiet ambition: to create the
                kind of place that makes a single afternoon feel like a memory you'll keep forever.
              </p>
              <p className="font-serif italic text-moss text-lg">
                "Less a venue. More a love letter — to gardens, to gatherings, to the people you'll bring."
              </p>
            </div>
            <div className="mt-10 flex gap-10 text-sm">
              <div>
                <div className="font-serif text-3xl text-moss">3</div>
                <div className="text-muted-foreground tracking-wide uppercase text-xs">Acres of garden</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-moss">200</div>
                <div className="text-muted-foreground tracking-wide uppercase text-xs">Guest capacity</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-moss">45min</div>
                <div className="text-muted-foreground tracking-wide uppercase text-xs">From Nairobi</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={gazeboImg}
              alt="The white gazebo at MJ Gardens"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover shadow-elegant"
            />
            <img
              src={rosesImg}
              alt="Roses in bloom"
              loading="lazy"
              className="hidden md:block absolute -bottom-12 -left-12 w-56 aspect-square object-cover shadow-soft border-8 border-background"
            />
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">— What We Host</p>
            <h2 className="font-serif text-4xl md:text-5xl text-moss leading-tight">
              For every kind of <em>gathering</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="group bg-background p-10 border border-border hover:shadow-elegant transition-all duration-500">
                <Icon className="h-8 w-8 text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-moss mb-4">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">— The Garden</p>
              <h2 className="font-serif text-4xl md:text-5xl text-moss leading-tight max-w-xl">
                A look around, and a few past evenings.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Mocked-up impressions of the spaces, set-ups and moods you can expect when you book MJ Gardens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-moss/80 via-moss/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-cream font-serif italic text-sm">{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 bg-moss text-cream relative overflow-hidden">
        <div className="container relative z-10">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6 text-center">— Early Voices</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 max-w-3xl mx-auto leading-tight">
            From the very first guests to walk our paths.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                quote: "We were one of the first weddings here and honestly — it felt like the garden had been waiting for us.",
                name: "Wanjiru & Kimani",
                event: "Wedding · 2025",
              },
              {
                quote: "The mist, the lawn, the way the light fell at 5pm. My birthday photographs look like a painting.",
                name: "Aisha M.",
                event: "40th Birthday",
              },
              {
                quote: "A team retreat that actually felt restorative. Tigoni air, beautiful grounds, and very thoughtful hosts.",
                name: "Sarit & Co.",
                event: "Corporate Retreat",
              },
            ].map((t) => (
              <blockquote key={t.name} className="border-l border-gold/50 pl-6">
                <p className="font-serif text-xl italic text-cream/90 leading-relaxed mb-6">"{t.quote}"</p>
                <footer className="text-sm">
                  <div className="text-cream">{t.name}</div>
                  <div className="text-cream/60 text-xs tracking-widest uppercase mt-1">{t.event}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">— Enquire</p>
            <h2 className="font-serif text-4xl md:text-5xl text-moss leading-tight mb-8">
              Tell us about your day.
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Share a few details and we'll get back to you within 24 hours with availability, packages and an invitation
              to come walk the gardens.
            </p>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div>
                  <div className="font-medium text-moss">Tigoni, Limuru</div>
                  <div className="text-muted-foreground">Kiambu County, Kenya</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div className="text-moss">+254 700 000 000</div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div className="text-moss">hello@mjgardenstigoni.co.ke</div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="h-5 w-5 text-gold mt-0.5" strokeWidth={1.5} />
                <div className="text-moss">@mjgardenstigoni</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 border border-border shadow-soft space-y-5">
            <div>
              <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Your name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-moss px-0"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-moss px-0"
              />
            </div>
            <div>
              <Label htmlFor="date" className="text-xs uppercase tracking-widest text-muted-foreground">Preferred date</Label>
              <Input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="mt-2 rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-moss px-0"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Tell us a little</Label>
              <Textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-moss px-0 resize-none"
              />
            </div>
            <Button type="submit" className="w-full bg-moss hover:bg-moss/90 text-primary-foreground rounded-none py-6 tracking-widest uppercase text-xs">
              Send Enquiry
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-moss text-cream/80 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flower2 className="h-4 w-4 text-gold" />
            <span className="font-serif tracking-wide">MJ Gardens Tigoni</span>
          </div>
          <div className="text-cream/60 text-xs tracking-widest uppercase">
            © 2025 · Designed with love by Josie Gacau
          </div>
        </div>
      </footer>

      {/* WATERMARK */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-none select-none">
        <div className="bg-background/70 backdrop-blur-sm border border-border px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          © Josie Gacau
        </div>
      </div>
    </div>
  );
};

export default Index;
