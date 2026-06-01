import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft, Monitor, Brain, Wifi, Cloud, Shield, Layers,
  TrendingUp, Guitar, Dumbbell, Lightbulb, Swords, Mail,
} from "lucide-react";
import cosmosImage from "@assets/secondimage.jpg";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = setTimeout(() => setVisible(true), delay * 1000 + 800);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay * 1000); observer.disconnect(); clearTimeout(fallback); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

const projects = [
  { title: "Student Activity Tracker", description: "A smart system that helps schools track student club activities, verify attendance, and automatically calculate participation points—making campus life management effortless.", tags: ["Full-Stack", "Education", "Automation"] },
  { title: "AI Bird Identifier", description: "An intelligent system that can look at a photo and instantly recognize whether it's an Eagle, Parrot, Owl, Peacock, or Penguin—teaching computers to see like humans do.", tags: ["AI", "Computer Vision", "Deep Learning"] },
  { title: "Hydrogen Fuel Cell Research", description: "Research Assistant at Temasek Polytechnic's Clean Energy Research Centre—performed data analysis and visualizations of fuel cell performance using Python, oversaw testing procedures, and authored a programming manual for interns.", tags: ["Research", "Python", "Clean Energy"] },
  { title: "Smart Weight Monitor (IoT)", description: "A complete connected device solution that measures weight distribution and sends real-time data to the cloud—combining physical sensors with digital intelligence.", tags: ["IoT", "Hardware", "Cloud"] },
  { title: "Secure Cloud Application", description: "A professional web application hosted on Google Cloud with user login, data protection, and enterprise-grade security features.", tags: ["GCP", "Security", "Enterprise"] },
  { title: "AI Stock Market Forecasting", description: "Deep learning models that analyze market patterns and predict stock movements, combining artificial intelligence with financial analysis.", tags: ["AI", "Finance", "Deep Learning"] },
  { title: "LLM-Powered Market Intelligence", description: "Leveraged advanced language models to interpret market news, sentiment, and trends for smarter investment decisions.", tags: ["LLM", "NLP", "Finance"] },
  { title: "Circuit Logic for Robot", description: "Created and implemented an electronic circuit for the robot to follow the line of tape with the utilization of transistors, resistors and potentiometers.", tags: ["Electronics", "Robotics", "Circuit Design"] },
];

const skills = [
  { icon: Monitor, label: "Build Complete Solutions", detail: "From user-friendly websites to complex backend systems" },
  { icon: Brain, label: "Artificial Intelligence", detail: "Teaching computers to see, learn, and predict" },
  { icon: Wifi, label: "Connected Devices (IoT)", detail: "Creating smart hardware that talks to the cloud" },
  { icon: Cloud, label: "Cloud Technology", detail: "Deploying secure, scalable applications" },
  { icon: Shield, label: "Cybersecurity", detail: "Protecting systems and user data" },
  { icon: Layers, label: "System Design", detail: "Architecting solutions that work seamlessly together" },
];

function ScrambleNumber({ target, prefix = "", suffix = "", scrambleDuration = 2000, settleDuration = 800, className = "", testId = "" }: { target: number; prefix?: string; suffix?: string; scrambleDuration?: number; settleDuration?: number; className?: string; testId?: string; }) {
  const [display, setDisplay] = useState("--");
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const lastUpdate = useRef(0);
  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    const startTime = performance.now();
    const totalDuration = scrambleDuration + settleDuration;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < scrambleDuration) {
        const progress = elapsed / scrambleDuration;
        const interval = 60 + progress * 120;
        if (elapsed - lastUpdate.current > interval) {
          const range = target * 0.6;
          const random = Math.round(target + (Math.random() - 0.5) * range * 2);
          setDisplay(String(Math.max(0, random)));
          lastUpdate.current = elapsed;
        }
        requestAnimationFrame(tick);
      } else if (elapsed < totalDuration) {
        const settleProgress = (elapsed - scrambleDuration) / settleDuration;
        const eased = 1 - Math.pow(1 - settleProgress, 3);
        const range = target * 0.6 * (1 - eased);
        const random = Math.round(target + (Math.random() - 0.5) * range * 2);
        setDisplay(String(Math.max(0, random)));
        requestAnimationFrame(tick);
      } else {
        setDisplay(String(target));
      }
    };
    requestAnimationFrame(tick);
  }, [target, scrambleDuration, settleDuration, hasStarted]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { startAnimation(); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return <span ref={ref} className={className} data-testid={testId}>{prefix}{display}{suffix}</span>;
}

export default function Accolades() {
  useEffect(() => { document.title = "Accolades - S.A. Aljunied | Projects, Skills & Investments"; }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${cosmosImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        <div className="relative z-10 flex flex-col h-full p-6 sm:p-10 md:p-14">
          <Link href="/"><span className="inline-flex items-center gap-2 text-white/70 text-sm font-sans tracking-wider uppercase cursor-pointer" data-testid="link-back-home"><ArrowLeft className="w-4 h-4" /><span>Home</span></span></Link>
          <div className="mt-auto">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white/50 text-xs sm:text-sm font-sans tracking-[0.3em] uppercase mb-3">S.A. Aljunied</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-page-title">Accolades</motion.h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 pb-24">

        {/* About */}
        <section className="py-16 border-b border-white/10 space-y-8">
          <FadeUp delay={0}>
            <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-4">About</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2" data-testid="text-professional-title">Engineer, Investor, Economist</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl font-sans" data-testid="text-about-description">Driven by a relentless pursuit of learning, problem-solving, and meaningful contribution to society. Every challenge is an opportunity to grow, and every solution is a chance to make an impact.</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm font-sans">
              <span className="inline-flex items-center gap-2"><Swords className="w-4 h-4" />Boxing</span>
              <span className="text-white/20">|</span>
              <span className="inline-flex items-center gap-2"><Guitar className="w-4 h-4" />Guitar &amp; Piano</span>
              <span className="text-white/20">|</span>
              <span className="inline-flex items-center gap-2"><Dumbbell className="w-4 h-4" />Fitness</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <blockquote className="border-l-2 border-white/20 pl-6 py-2">
              <p className="text-white/60 text-sm sm:text-base italic font-serif leading-relaxed" data-testid="text-quote">"The undying conquest of knowledge in reality itself."</p>
              <p className="text-white/40 text-xs sm:text-sm font-sans mt-3 flex items-center gap-2"><Lightbulb className="w-3.5 h-3.5" />A love for solving complex problems requiring cognitive abilities—negotiations, tests, challenges.</p>
            </blockquote>
          </FadeUp>
        </section>

        {/* Projects */}
        <section className="py-16 border-b border-white/10">
          <FadeUp delay={0} className="mb-10">
            <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-projects-title">Projects</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <FadeUp key={project.title} delay={i * 0.07}>
                <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 gap-5 transition-all duration-300 hover:border-white/[0.15] hover:from-white/[0.07]">
                  <span className="absolute top-4 right-5 text-6xl font-bold font-serif text-white/[0.04] select-none pointer-events-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 space-y-2.5">
                    <h3 className="font-sans font-semibold text-white text-base sm:text-lg leading-snug pr-10" data-testid={`text-project-title-${i}`}>{project.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed font-sans" data-testid={`text-project-desc-${i}`}>{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-white/35 text-[11px] font-sans bg-white/[0.06] border border-white/[0.08] rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Investment Track Record */}
        <section className="py-16 border-b border-white/10">
          <FadeUp delay={0} className="mb-10">
            <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-4">Finance</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-investment-title">Investment Track Record</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Card className="bg-white/[0.04] border-white/[0.08]">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-emerald-400/80" />
                  <h3 className="font-sans font-semibold text-white text-lg sm:text-xl" data-testid="text-trader-title">Active Swing Trader</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-white/40 text-xs font-sans tracking-wider uppercase">Time-Weighted Returns</p>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-400/90">
                      <ScrambleNumber target={130} suffix="%" testId="text-returns" />
                    </p>
                    <p className="text-white/40 text-xs font-sans">Over the past year</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/40 text-xs font-sans tracking-wider uppercase">Portfolio Size</p>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-white/80">
                      <ScrambleNumber target={30} prefix="~" suffix="K SGD" testId="text-portfolio-size" />
                    </p>
                    <p className="text-white/40 text-xs font-sans">Technical analysis &amp; strategic positioning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

        {/* Skills */}
        <section className="py-16 border-b border-white/10">
          <FadeUp delay={0} className="mb-10">
            <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-4">Capabilities</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-skills-title">What I Do</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <FadeUp key={skill.label} delay={i * 0.07}>
                <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 gap-4 transition-all duration-300 hover:border-white/[0.15] hover:from-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white/[0.06] border border-white/[0.07]">
                      <skill.icon className="w-4 h-4 text-white/50" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-semibold text-white text-sm sm:text-base leading-snug" data-testid={`text-skill-${i}`}>{skill.label}</h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-sans">{skill.detail}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* P.S. */}
        <section className="py-16 space-y-6">
          <FadeUp delay={0}>
            <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-4">P.S.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-sans" data-testid="text-ps-intro">
              I am Aqeel, meaning <span className="italic text-white/90">wise</span> in the Arabic language. Feel free to navigate through my portfolio and contact me for any enquiries.{" "}
              <Link href="/contact"><span className="inline-flex items-center align-middle text-white/50 transition-colors duration-300 ml-1" data-testid="link-ps-email" aria-label="Send a message"><Mail className="w-4 h-4" /></span></Link>
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed font-sans" data-testid="text-ps-philosophy">
              A synergy of the practical and philosophical defines me, as I thrive in the world of bytes and dreams. If you're up for a captivating conversation on history, the cosmos, or the meaning of it all, I'm all ears.
            </p>
          </FadeUp>
        </section>

        <footer className="pt-10 pb-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs font-sans tracking-wider">&copy; {new Date().getFullYear()} S.A. Aljunied</p>
        </footer>
      </div>
    </div>
  );
}
