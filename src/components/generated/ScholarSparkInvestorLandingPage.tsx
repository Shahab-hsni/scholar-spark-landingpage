import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Users, TrendingUp, Target, Zap, Brain, Globe, Star } from 'lucide-react';
const ScholarSparkInvestorLandingPage: React.FC = () => {
  const handleCTAClick = () => {
    window.location.href = 'mailto:pouya.ataei@scholarspark.ai?subject=Investor%20Inquiry:%20ScholarSpark%20Pre-Seed';
  };
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden" data-magicpath-id="0" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20" data-magicpath-id="1" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center" data-magicpath-id="2" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
          <div className="flex items-center space-x-2" data-magicpath-id="3" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center" data-magicpath-id="4" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <Brain className="w-5 h-5 text-white" data-magicpath-id="5" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
            </div>
            <span className="text-xl font-bold" data-magicpath-id="6" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">ScholarSpark</span>
          </div>
          <nav className="hidden md:flex space-x-8" data-magicpath-id="7" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <button onClick={() => scrollToSection('problem')} className="hover:text-purple-400 transition-colors" data-magicpath-id="8" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Problem</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-purple-400 transition-colors" data-magicpath-id="9" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Solution</button>
            <button onClick={() => scrollToSection('traction')} className="hover:text-purple-400 transition-colors" data-magicpath-id="10" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Traction</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-purple-400 transition-colors" data-magicpath-id="11" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Team</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20" data-magicpath-id="12" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="absolute inset-0 overflow-hidden" data-magicpath-id="13" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" data-magicpath-id="14" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-xl" data-magicpath-id="15" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" data-magicpath-id="16" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto" data-magicpath-id="17" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-6" data-magicpath-id="18" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6" data-magicpath-id="19" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent" data-magicpath-id="20" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" data-magicpath-id="21" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" data-magicpath-id="22" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <button onClick={handleCTAClick} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 group" data-magicpath-id="23" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <span data-magicpath-id="24" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Request Investor Deck</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="25" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
            </button>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="text-gray-400 text-sm" data-magicpath-id="26" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            Backed by leading AI researchers and industry veterans
          </motion.p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6" data-magicpath-id="27" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-6xl mx-auto" data-magicpath-id="28" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-center mb-16" data-magicpath-id="29" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="30" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">The Research Crisis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-magicpath-id="31" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              Academic research is drowning in information overload, with critical insights buried in an exponentially growing sea of publications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8" data-magicpath-id="32" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            {[{
            icon: TrendingUp,
            stat: "4M+",
            label: "New papers published annually",
            desc: "Growing at 8% per year",
            mpid: "3ea3a09f-be8a-4f56-9869-7bf0f7f949a8"
          }, {
            icon: Target,
            stat: "73%",
            label: "Of researchers struggle with discovery",
            desc: "Missing relevant work in their field",
            mpid: "ad898185-0eb2-49cc-9e44-4ac2fda18e65"
          }, {
            icon: Users,
            stat: "156 hrs",
            label: "Average time spent on literature review",
            desc: "Per research project",
            mpid: "7b0cba3a-9bee-4b9c-9ad4-059b248f6e6c"
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
          }} className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <item.icon className="w-12 h-12 text-purple-400 mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
                <div className="text-3xl font-bold text-white mb-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="stat:unknown" data-magicpath-id="35" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{item.stat}</div>
                <h3 className="text-lg font-semibold mb-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="36" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{item.label}</h3>
                <p className="text-gray-400" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="37" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{item.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gray-800/30" data-magicpath-id="38" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-6xl mx-auto" data-magicpath-id="39" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-center mb-16" data-magicpath-id="40" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="41" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Our AI-Powered Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-magicpath-id="42" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              ScholarSpark leverages advanced AI to transform research discovery, analysis, and synthesis into an intelligent, efficient process.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="43" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
          }} data-magicpath-id="44" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <h3 className="text-2xl font-bold mb-6" data-magicpath-id="45" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Key Features</h3>
              <div className="space-y-6" data-magicpath-id="46" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                {[{
                icon: Brain,
                title: "Intelligent Discovery",
                desc: "AI-powered semantic search across millions of papers",
                mpid: "5f5d8521-634f-4a1b-bc2c-a848539a9c48"
              }, {
                icon: Zap,
                title: "Instant Synthesis",
                desc: "Generate comprehensive literature reviews in minutes",
                mpid: "9cd98de4-7615-42ed-9d57-344db508c0f4"
              }, {
                icon: Globe,
                title: "Knowledge Mapping",
                desc: "Visualize research landscapes and identify gaps",
                mpid: "c661dc0f-a622-44de-93b4-ce0712358105"
              }, {
                icon: Star,
                title: "Trend Analysis",
                desc: "Predict emerging research directions and opportunities",
                mpid: "e6b6a89a-663d-4803-8c36-95687f300026"
              }].map((feature, index) => <div key={index} className="flex items-start space-x-4" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                      <feature.icon className="w-6 h-6 text-purple-400" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
                    </div>
                    <div data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                      <h4 className="text-lg font-semibold mb-2" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="51" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{feature.title}</h4>
                      <p className="text-gray-400" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="52" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{feature.desc}</p>
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
          }} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20" data-magicpath-id="53" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="54" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Our Magic</h3>
              <p className="text-gray-300 mb-6" data-magicpath-id="55" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                We combine large language models with proprietary knowledge graphs to understand research context, relationships, and implications at unprecedented scale.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4" data-magicpath-id="56" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <div className="text-sm text-purple-300 mb-2" data-magicpath-id="57" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Research Efficiency Improvement</div>
                <div className="text-3xl font-bold text-white" data-magicpath-id="58" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">10x Faster</div>
                <div className="text-sm text-gray-400" data-magicpath-id="59" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Literature review completion time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-20 px-6" data-magicpath-id="60" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-6xl mx-auto" data-magicpath-id="61" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-center mb-16" data-magicpath-id="62" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="63" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Proven Traction</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-magicpath-id="64" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              Early validation from leading research institutions and rapid user adoption demonstrate strong product-market fit.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12" data-magicpath-id="65" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            {[{
            metric: "500+",
            label: "Active Researchers",
            mpid: "05edac58-197f-4ac5-86ec-4e086edaaf46"
          }, {
            metric: "50K+",
            label: "Papers Analyzed",
            mpid: "629c6fcc-aadf-48f9-8fa9-34ff88761688"
          }, {
            metric: "15",
            label: "Partner Universities",
            mpid: "a16e0ebb-a1c9-4a37-98f1-ca46cc584dde"
          }, {
            metric: "92%",
            label: "User Satisfaction",
            mpid: "eecdc2a4-d34d-4981-a52c-9d3b58adfb08"
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
          }} className="text-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <div className="text-4xl font-bold text-purple-400 mb-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="metric:unknown" data-magicpath-id="67" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{item.metric}</div>
                <div className="text-gray-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="68" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{item.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6 bg-gray-800/30" data-magicpath-id="69" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-6xl mx-auto" data-magicpath-id="70" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-center mb-16" data-magicpath-id="71" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="72" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Massive Market Opportunity</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-magicpath-id="73" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              The academic research tools market is experiencing unprecedented growth, driven by AI adoption and research digitization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8" data-magicpath-id="74" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            {[{
            size: "$12B",
            label: "Total Addressable Market",
            desc: "Academic research software globally",
            mpid: "aba6e4fe-13fa-4e99-9c97-90942b12a23a"
          }, {
            size: "$2.8B",
            label: "Serviceable Addressable Market",
            desc: "AI-powered research tools",
            mpid: "a4c082f5-df88-4914-8e23-9d65f0a7bbbb"
          }, {
            size: "$180M",
            label: "Serviceable Obtainable Market",
            desc: "Our 3-year target segment",
            mpid: "8074bd23-8719-4f59-9eba-1e41c8d80560"
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
          }} className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20 text-center" data-magicpath-uuid={(market as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <div className="text-4xl font-bold text-purple-400 mb-4" data-magicpath-uuid={(market as any)["mpid"] ?? "unsafe"} data-magicpath-field="size:unknown" data-magicpath-id="76" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{market.size}</div>
                <h3 className="text-xl font-semibold mb-2" data-magicpath-uuid={(market as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="77" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{market.label}</h3>
                <p className="text-gray-400" data-magicpath-uuid={(market as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="78" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">{market.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6" data-magicpath-id="79" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-6xl mx-auto" data-magicpath-id="80" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="text-center mb-16" data-magicpath-id="81" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="82" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">World-Class Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-magicpath-id="83" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} className="bg-gray-800/50 rounded-2xl p-8 border border-purple-500/20 max-w-4xl mx-auto" data-magicpath-id="84" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <div className="text-center mb-8" data-magicpath-id="85" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center" data-magicpath-id="86" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <span className="text-2xl font-bold text-white" data-magicpath-id="87" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">PA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" data-magicpath-id="88" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Pouya Ataei</h3>
              <p className="text-purple-400 mb-4" data-magicpath-id="89" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Founder & CEO</p>
              <p className="text-gray-300 max-w-2xl mx-auto" data-magicpath-id="90" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                Former AI Research Scientist with 10+ years in machine learning and NLP. PhD in Computer Science from Stanford. 
                Previously led AI initiatives at Google Research and published 50+ peer-reviewed papers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center" data-magicpath-id="91" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <div data-magicpath-id="92" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <div className="text-2xl font-bold text-purple-400 mb-2" data-magicpath-id="93" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">10+</div>
                <div className="text-sm text-gray-400" data-magicpath-id="94" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Years AI Experience</div>
              </div>
              <div data-magicpath-id="95" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <div className="text-2xl font-bold text-purple-400 mb-2" data-magicpath-id="96" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">50+</div>
                <div className="text-sm text-gray-400" data-magicpath-id="97" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Published Papers</div>
              </div>
              <div data-magicpath-id="98" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
                <div className="text-2xl font-bold text-purple-400 mb-2" data-magicpath-id="99" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">$2M+</div>
                <div className="text-sm text-gray-400" data-magicpath-id="100" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Previous Exit Value</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20" data-magicpath-id="101" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-4xl mx-auto text-center" data-magicpath-id="102" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
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
        }} data-magicpath-id="103" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-magicpath-id="104" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-magicpath-id="105" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              We're raising $2M in pre-seed funding to accelerate product development and expand our research partnerships. 
              Join us in revolutionizing academic research.
            </p>
            
            <button onClick={handleCTAClick} className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-3 mx-auto group mb-8" data-magicpath-id="106" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <Mail className="w-6 h-6" data-magicpath-id="107" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
              <span data-magicpath-id="108" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Request Investor Deck</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" data-magicpath-id="109" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
            </button>
            
            <div className="text-gray-400" data-magicpath-id="110" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <p className="mb-2" data-magicpath-id="111" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">Direct Contact:</p>
              <a href="mailto:pouya.ataei@scholarspark.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                pouya.ataei@scholarspark.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800" data-magicpath-id="112" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
        <div className="max-w-6xl mx-auto text-center" data-magicpath-id="113" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
          <div className="flex items-center justify-center space-x-2 mb-4" data-magicpath-id="114" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center" data-magicpath-id="115" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">
              <Brain className="w-4 h-4 text-white" data-magicpath-id="116" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx" />
            </div>
            <span className="font-semibold" data-magicpath-id="117" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">ScholarSpark</span>
          </div>
          <p className="text-gray-400 text-sm" data-magicpath-id="118" data-magicpath-path="ScholarSparkInvestorLandingPage.tsx">© 2024 ScholarSpark. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default ScholarSparkInvestorLandingPage;