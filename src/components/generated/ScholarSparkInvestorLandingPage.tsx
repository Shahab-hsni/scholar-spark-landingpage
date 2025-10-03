import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

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
      <header className="fixed top-0 w-full z-50 p-2">
        <div className="container mx-auto">
          <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-gray-600/50 rounded-lg p-2 flex items-center justify-center gap-3 w-max mx-auto shadow-lg">
            {/* Home - Active State */}
            <div className="bg-[#2A2A2A] border border-gray-500 rounded-lg px-3 py-1.5 flex items-center space-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium text-sm">Home</span>
            </div>

            {/* About - Clickable */}
            <button
              onClick={() => navigate('/about')}
              className="text-white font-medium text-sm px-3 py-1.5 hover:bg-[#2A2A2A] hover:border hover:border-gray-500 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>About</span>
            </button>

            {/* Preview app - Inactive State */}
            <div className="text-white font-medium px-3 py-1.5 flex items-center space-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Preview app</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <section
        id="problem"
        className="py-20 section-gradient px-6"
        data-scroll
        data-scroll-speed="0.5"
      >
        <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-3 gap-8">
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
                className="relative border-2 border-transparent rounded-[45px] p-10 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509]"
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
                  <p className="text-white/50 font-semibold leading-8">{item.desc}</p>
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
            className="text-center mb-12"
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
      <section id="trusted" className="py-24 px-6 relative overflow-hidden">
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

          <div className="mt-[100px] grid grid-cols-4 gap-8 text-white/90">
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
              background: 'radial-gradient(circle at center bottom, #514ebf 0%, #7e7cd300 70%)',
            }}
          />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/10 bg-[#0a090c]" />
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="pb-20 px-6 bg-transparent -mt-32">
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
            className="flex items-center justify-center py-6"
          >
            {/* Left (SAM) */}
            <div
              className="relative border-2 border-transparent rounded-full p-8 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] -mr-6 sm:-mr-8 md:-mr-12"
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
              className="relative border-2 border-transparent rounded-full p-10 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509] -mr-6 sm:-mr-8 md:-mr-12"
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
              className="relative border-2 border-transparent rounded-full p-8 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-[#080509] via-[#1a171c] to-[#080509]"
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
      <section id="team" className="py-20 px-6">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Led by experienced founders with deep expertise in AI, academic research, and
              enterprise software.
            </p>
          </motion.div>

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
            className="bg-gray-800/50 rounded-2xl p-8 border border-[#8F8EDF]/20 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#8F8EDF] to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pouya Ataei</h3>
              <p className="text-[#8F8EDF] mb-4">Founder & CEO</p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Former AI Research Scientist with 10+ years in machine learning and NLP. PhD in
                Computer Science from Stanford. Previously led AI initiatives at Google Research and
                published 50+ peer-reviewed papers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#8F8EDF] mb-2">10+</div>
                <div className="text-sm text-gray-400">Years AI Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#8F8EDF] mb-2">50+</div>
                <div className="text-sm text-gray-400">Published Papers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#8F8EDF] mb-2">$2M+</div>
                <div className="text-sm text-gray-400">Previous Exit Value</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8F8EDF]/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
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

            <button
              onClick={handleCTAClick}
              className="px-10 py-5 bg-gradient-to-r from-[#8F8EDF] to-pink-600 rounded-lg font-semibold text-xl hover:from-[#7A79C9] hover:to-pink-700 transition-all duration-300 flex items-center space-x-3 mx-auto group mb-8"
            >
              <Mail className="w-6 h-6" />
              <span>Request Investor Deck</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

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
            <div className="w-6 h-6 bg-gradient-to-br from-[#8F8EDF] to-pink-500 rounded flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">ScholarSpark</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 ScholarSpark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default ScholarSparkInvestorLandingPage;
