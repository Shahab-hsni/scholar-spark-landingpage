import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Users, TrendingUp, Target, Zap, Brain, Globe, Star } from 'lucide-react';
const ScholarSparkInvestorLandingPage: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  });
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const handleCTAClick = () => {
    window.location.href = 'mailto:pouya.ataei@scholarspark.ai?subject=Investor%20Inquiry:%20ScholarSpark%20Pre-Seed';
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ScholarSpark</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('problem')} className="hover:text-purple-400 transition-colors">Problem</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-purple-400 transition-colors">Solution</button>
            <button onClick={() => scrollToSection('traction')} className="hover:text-purple-400 transition-colors">Traction</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-purple-400 transition-colors">Team</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Shimmer Grid Background */}
          <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
                linear-gradient(90deg, transparent 98%, rgba(147, 51, 234, 0.1) 100%),
                linear-gradient(0deg, transparent 98%, rgba(147, 51, 234, 0.1) 100%)
              `,
          backgroundSize: '40px 40px'
        }} />
          
          {/* Dynamic shimmer effect around cursor */}
          <div className="absolute pointer-events-none transition-all duration-300 ease-out" style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0.08) 30%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(1px)'
        }} />
          
          {/* Original gradient orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              Revolutionizing Academic Research
            </span>
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AI-Powered Research Intelligence
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transforming how researchers discover, analyze, and synthesize academic knowledge with cutting-edge AI
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button onClick={handleCTAClick} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 group">
              <span>Request Investor Deck</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="text-gray-400 text-sm">
            Backed by leading AI researchers and industry veterans
          </motion.p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Research Crisis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic research is drowning in information overload, with critical insights buried in an exponentially growing sea of publications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            icon: TrendingUp,
            stat: "4M+",
            label: "New papers published annually",
            desc: "Growing at 8% per year"
          }, {
            icon: Target,
            stat: "73%",
            label: "Of researchers struggle with discovery",
            desc: "Missing relevant work in their field"
          }, {
            icon: Users,
            stat: "156 hrs",
            label: "Average time spent on literature review",
            desc: "Per research project"
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <item.icon className="w-12 h-12 text-purple-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI-Powered Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ScholarSpark leverages advanced AI to transform research discovery, analysis, and synthesis into an intelligent, efficient process.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="space-y-6">
                {[{
                icon: Brain,
                title: "Intelligent Discovery",
                desc: "AI-powered semantic search across millions of papers"
              }, {
                icon: Zap,
                title: "Instant Synthesis",
                desc: "Generate comprehensive literature reviews in minutes"
              }, {
                icon: Globe,
                title: "Knowledge Mapping",
                desc: "Visualize research landscapes and identify gaps"
              }, {
                icon: Star,
                title: "Trend Analysis",
                desc: "Predict emerging research directions and opportunities"
              }].map((feature, index) => <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>)}
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4">Our Magic</h3>
              <p className="text-gray-300 mb-6">
                We combine large language models with proprietary knowledge graphs to understand research context, relationships, and implications at unprecedented scale.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-sm text-purple-300 mb-2">Research Efficiency Improvement</div>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Traction</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Early validation from leading research institutions and rapid user adoption demonstrate strong product-market fit.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[{
            metric: "500+",
            label: "Active Researchers"
          }, {
            metric: "50K+",
            label: "Papers Analyzed"
          }, {
            metric: "15",
            label: "Partner Universities"
          }, {
            metric: "92%",
            label: "User Satisfaction"
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Massive Market Opportunity</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The academic research tools market is experiencing unprecedented growth, driven by AI adoption and research digitization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            size: "$12B",
            label: "Total Addressable Market",
            desc: "Academic research software globally"
          }, {
            size: "$2.8B",
            label: "Serviceable Addressable Market",
            desc: "AI-powered research tools"
          }, {
            size: "$180M",
            label: "Serviceable Obtainable Market",
            desc: "Our 3-year target segment"
          }].map((market, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-4">{market.size}</div>
                <h3 className="text-xl font-semibold mb-2">{market.label}</h3>
                <p className="text-gray-400">{market.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Led by experienced founders with deep expertise in AI, academic research, and enterprise software.
            </p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pouya Ataei</h3>
              <p className="text-purple-400 mb-4">Founder & CEO</p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Former AI Research Scientist with 10+ years in machine learning and NLP. PhD in Computer Science from Stanford. 
                Previously led AI initiatives at Google Research and published 50+ peer-reviewed papers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Years AI Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Published Papers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">$2M+</div>
                <div className="text-sm text-gray-400">Previous Exit Value</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're raising $2M in pre-seed funding to accelerate product development and expand our research partnerships. 
              Join us in revolutionizing academic research.
            </p>
            
            <button onClick={handleCTAClick} className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-3 mx-auto group mb-8">
              <Mail className="w-6 h-6" />
              <span>Request Investor Deck</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="text-gray-400">
              <p className="mb-2">Direct Contact:</p>
              <a href="mailto:pouya.ataei@scholarspark.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
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
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">ScholarSpark</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 ScholarSpark. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default ScholarSparkInvestorLandingPage;