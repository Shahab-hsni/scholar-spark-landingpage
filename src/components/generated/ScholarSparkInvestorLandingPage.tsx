import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Users, TrendingUp, Target, Zap, Brain, Globe, Star } from 'lucide-react';
import Hero from './HeroSection';
const ScholarSparkInvestorLandingPage: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
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
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
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

            {/* About - Inactive State */}
            <div className="text-white font-medium text-sm px-3 py-1.5">About</div>

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
      <section id="problem" className="py-20 px-6">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Research Crisis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic research is drowning in information overload, with critical insights buried
              in an exponentially growing sea of publications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: '4M+',
                label: 'New papers published annually',
                desc: 'Growing at 8% per year',
              },
              {
                icon: Target,
                stat: '73%',
                label: 'Of researchers struggle with discovery',
                desc: 'Missing relevant work in their field',
              },
              {
                icon: Users,
                stat: '156 hrs',
                label: 'Average time spent on literature review',
                desc: 'Per research project',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-gray-800/50 rounded-xl p-8 border border-[#8F8EDF]/20 hover:border-[#8F8EDF]/40 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[#8F8EDF] mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gray-800/30">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI-Powered Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ScholarSpark leverages advanced AI to transform research discovery, analysis, and
              synthesis into an intelligent, efficient process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: 'Intelligent Discovery',
                    desc: 'AI-powered semantic search across millions of papers',
                  },
                  {
                    icon: Zap,
                    title: 'Instant Synthesis',
                    desc: 'Generate comprehensive literature reviews in minutes',
                  },
                  {
                    icon: Globe,
                    title: 'Knowledge Mapping',
                    desc: 'Visualize research landscapes and identify gaps',
                  },
                  {
                    icon: Star,
                    title: 'Trend Analysis',
                    desc: 'Predict emerging research directions and opportunities',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#8F8EDF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#8F8EDF]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="bg-gradient-to-br from-[#8F8EDF]/10 to-pink-500/10 rounded-2xl p-8 border border-[#8F8EDF]/20"
            >
              <h3 className="text-2xl font-bold mb-4">Our Magic</h3>
              <p className="text-gray-300 mb-6">
                We combine large language models with proprietary knowledge graphs to understand
                research context, relationships, and implications at unprecedented scale.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-sm text-[#8F8EDF] mb-2">Research Efficiency Improvement</div>
                <div className="text-3xl font-bold text-white">10x Faster</div>
                <div className="text-sm text-gray-400">Literature review completion time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-20 px-6">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Traction</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Early validation from leading research institutions and rapid user adoption
              demonstrate strong product-market fit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                metric: '500+',
                label: 'Active Researchers',
              },
              {
                metric: '50K+',
                label: 'Papers Analyzed',
              },
              {
                metric: '15',
                label: 'Partner Universities',
              },
              {
                metric: '92%',
                label: 'User Satisfaction',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#8F8EDF] mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6 bg-gray-800/30">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                size: '$12B',
                label: 'Total Addressable Market',
                desc: 'Academic research software globally',
              },
              {
                size: '$2.8B',
                label: 'Serviceable Addressable Market',
                desc: 'AI-powered research tools',
              },
              {
                size: '$180M',
                label: 'Serviceable Obtainable Market',
                desc: 'Our 3-year target segment',
              },
            ].map((market, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-gray-800/50 rounded-xl p-8 border border-[#8F8EDF]/20 text-center"
              >
                <div className="text-4xl font-bold text-[#8F8EDF] mb-4">{market.size}</div>
                <h3 className="text-xl font-semibold mb-2">{market.label}</h3>
                <p className="text-gray-400">{market.desc}</p>
              </motion.div>
            ))}
          </div>
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
