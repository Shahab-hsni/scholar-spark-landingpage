import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTeam from '../ui/SectionTeam';
import Header from '../ui/Header';

// CountUp component for animated numbers
const CountUp = ({
  end,
  duration = 2,
  delay = 0,
}: {
  end: number;
  duration?: number;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(`[data-count="${end}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return <span data-count={end}>{count}</span>;
};
import Lottie from 'lottie-react';
import {
  ArrowRight,
  Mail,
  Users,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Globe,
  Star,
  Search,
  ListChecks,
  Layers,
  Filter,
  ShieldCheck,
  Table,
  Code,
  FileText,
  FileCog,
  BarChart3,
  FilePenLine,
  Sparkles,
  Wrench,
  Timer,
  Clock,
} from 'lucide-react';
import Hero from './HeroSection';
import { GradientButton } from '../ui/GradientButton';
import { useNavigate } from 'react-router-dom';
import RadialOrbitalTimeline, { TimelineItem } from '../ui/RadialOrbitalTimeline';
import { ContainerScroll } from '../ui/container-scroll-animation';
// Lottie animations will be loaded dynamically

const ScholarSparkInvestorLandingPage: React.FC = () => {
  const navigate = useNavigate();

  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const [animations, setAnimations] = React.useState({
    unlink: null,
    time: null,
    multiCluster: null,
  });

  // Shared fade-up variants for staggered children
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as const;

  // Load Lottie animations
  React.useEffect(() => {
    const loadAnimations = async () => {
      try {
        const [unlinkRes, timeRes, multiClusterRes] = await Promise.all([
          fetch('/lottieFiles/unlink.json'),
          fetch('/lottieFiles/time.json'),
          fetch('/lottieFiles/Multi Cluster.json'),
        ]);

        const [unlinkData, timeData, multiClusterData] = await Promise.all([
          unlinkRes.json(),
          timeRes.json(),
          multiClusterRes.json(),
        ]);

        setAnimations({
          unlink: unlinkData,
          time: timeData,
          multiCluster: multiClusterData,
        });
      } catch (error) {
        console.error('Error loading Lottie animations:', error);
      }
    };

    loadAnimations();
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const handleCTAClick = () => {
    window.location.href =
      'mailto:pouya.ataei@scholarspark.ai?subject=Investor%20Inquiry:%20ScholarSpark%20Pre-Seed';
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="min-h-screen bg-[#0a090c] text-white overflow-x-hidden" data-scroll-section>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <section className="py-20 px-6 sm:px-10 md:px-6 relative">
        <div
          className="absolute glow"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '820px',
            background: 'radial-gradient(circle at center, #6f6dd5 0%, rgba(129,128,208,0) 60%)',
            filter: 'blur(100px)',
            opacity: 0.3,
            top: '20%',
            left: '30%',
            zIndex: -1,
          }}
        />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="space-y-6 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
              }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                A product by Neomycelia.
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                "In the vast forest of human knowledge, beneath the visible canopy of published
                research, lies an intricate network of connections—a mycelial web binding together
                the collective wisdom of humanity's brightest minds. Just as fungi form the hidden
                intelligence of forests, transmitting nutrients and information across seemingly
                disparate organisms, Neomycelia emerges as the connective tissue of academic
                exploration—a catalyst for scientific revolution."
              </motion.p>
              <motion.p
                className="text-lg text-gray-400 italic"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                ~ Pouya Ataei 2025
              </motion.p>
              <motion.div
                className="pt-4 flex justify-center md:justify-start"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                <GradientButton asChild>
                  <a href="/about">Learn More</a>
                </GradientButton>
              </motion.div>
            </motion.div>

            {/* Right side - Logo */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
            >
              <motion.img
                variants={fadeUp}
                src="/logos/Logo-v2.png"
                alt="Neomycelia Logo"
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        className="py-20 section-gradient px-6 sm:px-10 md:px-6"
        data-scroll
        data-scroll-speed="0.5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Research Crisis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic research is drowning in information overload, with critical insights buried
              in an exponentially growing sea of publications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
            {[
              {
                animation: animations.multiCluster,
                stat: '6-8',
                label: 'Disconnected tools per review',
                desc: 'Researchers juggle multiple platforms',
              },
              {
                animation: animations.unlink,
                stat: '40%',
                label: 'Of project time wasted on tool management',
                desc: 'Inefficient workflows cost researchers',
              },
              {
                animation: animations.time,
                stat: '612 hrs',
                label: 'Average time per systematic review',
                desc: 'Months of fragmented work',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.2 + index * 0.08,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative border-2 border-transparent rounded-[45px] p-8 md:p-5 lg:p-10 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509]"
                style={{ backgroundClip: 'padding-box' }}
              >
                {/* Gradient border using after pseudo-element */}
                <motion.div
                  className="absolute -inset-px rounded-[45px] -z-10"
                  style={{
                    background: 'linear-gradient(71deg, #110e0e, #8F8EDF, #110e0e)',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.08 + 0.6, // After main card animation completes
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                ></motion.div>
                <div className="w-full">
                  <div className="w-12 h-12 mb-4">
                    {item.animation ? (
                      <Lottie
                        animationData={item.animation}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-700 rounded animate-pulse" />
                    )}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 tracking-[-0.02em]">
                    {item.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-[-0.02em]">
                    {item.label}
                  </h3>
                  <p className="text-white/50 font-semibold leading-5 ">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section → Radial Orbital Timeline */}
      <section
        id="solution"
        className="py-20 px-6"
        style={{ backgroundColor: '#0a090c' }}
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-0 md:mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI-Powered Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A unified, end-to-end research workflow centered on ScholarSpark.
            </p>
          </motion.div>

          {(() => {
            const items: TimelineItem[] = [
              // 1) Shallow Research
              {
                id: 1,
                title: 'Shallow Research',
                content:
                  'Quickly survey literature to orient the team. Identify anchor papers and themes.',
                status: 'in-progress',
                energy: 78,
                icon: Brain,
              },
              // 2) Set Objectives & Questions
              {
                id: 2,
                title: 'Set Objectives & Questions',
                content:
                  'Define the problem, scope, and outcomes. Align on answerable research questions.',
                status: 'pending',
                energy: 60,
                icon: ListChecks,
                gemini: true,
              },
              // 3) Develop Protocol
              {
                id: 3,
                title: 'Develop Protocol',
                content:
                  'Specify methods, sources, and criteria. Standardize process for reproducibility.',
                status: 'pending',
                energy: 58,
                icon: FileCog,
                gemini: true,
              },
              // 4) Search Strategy
              {
                id: 4,
                title: 'Search Strategy',
                content:
                  'Design structured queries across databases. Balance recall and precision.',
                status: 'pending',
                energy: 62,
                icon: Search,
                gemini: true,
              },
              // 5) Study Collection & Deduplication
              {
                id: 5,
                title: 'Study Collection & Deduplication',
                content: 'Aggregate results from sources and remove duplicates automatically.',
                status: 'pending',
                energy: 55,
                icon: Layers,
                gemini: true,
              },
              // 6) Screening
              {
                id: 6,
                title: 'Screening',
                content:
                  'Apply inclusion/exclusion rules at title, abstract, and full-text levels.',
                status: 'pending',
                energy: 52,
                icon: Filter,
              },
              // 7) Quality Assessment
              {
                id: 7,
                title: 'Quality Assessment',
                content:
                  'Assess rigor and bias using standardized rubrics. Build confidence in evidence.',
                status: 'pending',
                energy: 50,
                icon: ShieldCheck,
              },
              // 8) Data Extraction
              {
                id: 8,
                title: 'Data Extraction',
                content: 'Capture variables, outcomes, and metadata in structured forms.',
                status: 'pending',
                energy: 54,
                icon: Table,
              },
              // 9) Coding
              {
                id: 9,
                title: 'Coding',
                content: 'Label constructs and themes to turn text into analyzable signals.',
                status: 'pending',
                energy: 53,
                icon: Code,
              },
              // 10) Protocol Documentation
              {
                id: 10,
                title: 'Protocol Documentation',
                content: 'Version, archive, and share protocols to ensure auditability.',
                status: 'pending',
                energy: 49,
                icon: FileText,
              },
              // 11) Result Visualization
              {
                id: 11,
                title: 'Result Visualization',
                content: 'Reveal trends, gaps, and relationships with clear interactive charts.',
                status: 'pending',
                energy: 57,
                icon: BarChart3,
              },
              // 12) Manuscript Writing
              {
                id: 12,
                title: 'Manuscript Writing',
                content: 'Compose structured narratives from extracted findings and visuals.',
                status: 'pending',
                energy: 51,
                icon: FilePenLine,
                gemini: true,
              },
            ];
            return <RadialOrbitalTimeline items={items} radius={320} />;
          })()}
        </div>
      </section>

      {/* Trusted by experts • Used by the leaders */}
      <section
        id="trusted"
        className="pt-12 md:pt-24 pb-12 md:pb-24 px-6 sm:px-10 md:px-6 relative overflow-visible"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Traction</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Early validation from leading research institutions and rapid user adoption
              demonstrate strong product-market fit.
            </p>
          </motion.div>

          <div className="mt-[100px] grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-white/90">
            {[
              { metric: 9, label: 'Researchers tested Prototype', suffix: '' },
              { metric: 161, label: 'Researchers surveyed', suffix: '' },
              { metric: 100, label: 'Interest in an integrated tool', suffix: '%' },
              { metric: 51.3, label: 'Conversion rate for beta sign-ups', suffix: '%' },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.4 + i * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-medium text-white mb-2">
                  <CountUp end={s.metric} duration={1} delay={0.2 + i * 0.1} />
                  {s.suffix}
                </div>
                <div className="text-gray-300">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background glow + horizon (no particles) */}
        <div className="relative -mt-24 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(circle at center bottom, #6f6dd5 0%, rgba(79, 26, 214, 0) 70%)',
            }}
          />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/10 bg-[#0a090c]" />
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="pb-8 px-6 sm:px-10 md:px-6 bg-transparent -mt-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Massive Market Opportunity</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The academic research tools market is experiencing unprecedented growth, driven by AI
              adoption and research digitization.
            </p>
          </motion.div>

          {/* Triple Circles with "Research Crisis" card styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="opportunity-grid flex flex-col items-center justify-center py-6 sm:flex-row"
          >
            {/* Left (SAM) */}
            <div
              className="relative border-2 border-transparent rounded-full p-6 md:p-10 w-72 h-72 sm:w-56 sm:h-56  aspect-square md:w-full md:h-auto lg:w-64 lg:h-64 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] mr-0 sm:-mr-8 md:-mr-12"
              style={{ backgroundClip: 'padding-box' }}
            >
              <div
                className="absolute -inset-px rounded-full -z-10"
                style={{ background: 'linear-gradient(71deg, #110e0e, #8F8EDF, #110e0e)' }}
              ></div>
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center justify-center h-full px-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-[-0.02em]">
                  $560M AUD
                </div>
                <div className="text-xs md:text-sm text-white/70 font-medium leading-tight">
                  Serviceable Addressable Market
                </div>
              </motion.div>
            </div>

            {/* Center (TAM) */}
            <div
              className="relative border-2 border-transparent aspect-square rounded-full p-6 md:p-10 w-72 h-72 sm:w-56 sm:h-56 md:w-full md:h-auto lg:w-80 lg:h-80 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] mr-0 sm:-mr-8 md:-mr-12"
              style={{ backgroundClip: 'padding-box' }}
            >
              <div
                className="absolute -inset-px rounded-full -z-10"
                style={{ background: 'linear-gradient(71deg, #110e0e, #8F8EDF, #110e0e)' }}
              ></div>
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center justify-center h-full px-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-[-0.02em]">
                  $1.6B USD
                </div>
                <div className="text-sm md:text-base text-white/80 font-semibold leading-tight">
                  Total Addressable Market
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-2">
                  Academic research software globally
                </div>
              </motion.div>
            </div>

            {/* Right (Target ARR) */}
            <div
              className="relative border-2 border-transparent rounded-full aspect-square p-6 w-72 h-72 md:p-10 sm:w-56 sm:h-56 md:w-full md:h-auto lg:w-64 lg:h-64 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509]"
              style={{ backgroundClip: 'padding-box' }}
            >
              <div
                className="absolute -inset-px rounded-full -z-10"
                style={{ background: 'linear-gradient(71deg, #110e0e, #8F8EDF, #110e0e)' }}
              ></div>
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center justify-center h-full px-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-[-0.02em]">
                  $234K AUD
                </div>
                <div className="text-xs md:text-sm text-white/70 font-medium leading-tight">
                  Target ARR (18 months)
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="pt-8 pb-8 px-6 sm:px-10 md:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            {/* Replaced with SectionTeam per request */}
            <SectionTeam />
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 px-6 sm:px-10 md:px-6 relative overflow-visible">
        {/* Circle background */}
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '820px',
            background: 'linear-gradient(180deg, #6f6dd5 0%, rgba(79, 26, 214, 0.46) 100%)',
            filter: 'blur(100px)',
            opacity: 0.6,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* DarkVeil Background - Commented out */}
        {/* <div className="absolute inset-0 z-0">
          <DarkVeil
            hueShift={348}
            noiseIntensity={0.03}
            scanlineIntensity={0.1}
            speed={0.8}
            scanlineFrequency={2.2}
            warpAmount={2.7}
            resolutionScale={1}
          />
        </div> */}

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're raising $2M in pre-seed funding to accelerate product development and expand our
              research partnerships. Join us in revolutionizing academic research.
            </p>

            <GradientButton
              asChild
              className="px-10 py-5 text-xl flex items-center space-x-3 mx-auto group mb-8 w-max"
            >
              <a href="/pdf/pitchDeck.pdf" download="ScholarSpark-Investor-Deck.pdf">
                <Mail className="w-6 h-6" />
                <span>Request Investor Deck</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </GradientButton>

            <div className="text-gray-400">
              <p className="mb-2">Direct Contact:</p>
              <a
                href="mailto:pouya.ataei@scholarspark.ai"
                className="text-[#8F8EDF] hover:text-[#7A79C9] transition-colors"
              >
                pouya.ataei@scholarspark.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="/logos/logo-vertical.png"
              alt="Neomycelia Logo"
              className="w-[104px] h-auto"
            />
          </div>
          <p className="text-gray-400 text-sm">© 2024 ScholarSpark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default ScholarSparkInvestorLandingPage;
