import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Star, ArrowRight, Sparkles, Target, TrendingUp, Search, BookOpen, Network, Lightbulb } from 'lucide-react';
const SolutionSection: React.FC = () => {
  const coreFeatures = [{
    icon: Brain,
    title: "Intelligent Discovery",
    desc: "AI-powered semantic search that understands context and meaning, not just keywords",
    benefit: "Find 90% more relevant papers",
    color: "from-purple-500 to-blue-500",
    mpid: "fbb24cbe-2661-4563-8da5-1092c77434cf"
  }, {
    icon: Zap,
    title: "Instant Synthesis",
    desc: "Generate comprehensive literature reviews and research summaries in minutes",
    benefit: "10x faster literature reviews",
    color: "from-blue-500 to-cyan-500",
    mpid: "605ab395-7f60-4fca-ad7b-b8700d9f9b8a"
  }, {
    icon: Globe,
    title: "Knowledge Mapping",
    desc: "Visualize research landscapes, identify gaps, and discover emerging connections",
    benefit: "Spot opportunities others miss",
    color: "from-cyan-500 to-green-500",
    mpid: "23a5b3a2-0128-4b14-b9a7-2002b3d32650"
  }, {
    icon: Star,
    title: "Trend Analysis",
    desc: "Predict emerging research directions and identify high-impact opportunities",
    benefit: "Stay ahead of the curve",
    color: "from-green-500 to-purple-500",
    mpid: "2bb8c9e9-0ba7-49b1-be1c-2aa651ea2bea"
  }] as any[];
  const magicPoints = [{
    icon: Network,
    title: "Proprietary Knowledge Graphs",
    description: "We've built the world's largest academic knowledge graph, connecting concepts, authors, and findings across disciplines.",
    mpid: "cc230bd6-d338-4314-8092-b443a52de5e1"
  }, {
    icon: Brain,
    title: "Advanced Language Models",
    description: "Our fine-tuned LLMs understand academic language, methodology, and research context better than any general-purpose AI.",
    mpid: "c8ca9480-e17a-4958-95c8-d8ee018b17cc"
  }, {
    icon: Target,
    title: "Multi-Modal Understanding",
    description: "We process not just text, but figures, tables, citations, and metadata to provide complete research intelligence.",
    mpid: "292214e3-360e-4197-ab00-c7e1f3fd3682"
  }] as any[];
  const beforeAfter = [{
    before: "Spend weeks searching through databases",
    after: "Get comprehensive results in seconds",
    icon: Search,
    mpid: "5b4d7232-b6c1-45dd-9ab1-d1897e530540"
  }, {
    before: "Manually read hundreds of papers",
    after: "AI-generated summaries with key insights",
    icon: BookOpen,
    mpid: "203edc9e-fe73-4a08-8557-aaff1b3ee49c"
  }, {
    before: "Miss connections between research areas",
    after: "Discover hidden relationships automatically",
    icon: Network,
    mpid: "d20cc2b5-e7d5-4869-ad09-22bebf4c6c4e"
  }, {
    before: "Struggle to identify research gaps",
    after: "Clear visualization of opportunities",
    icon: Lightbulb,
    mpid: "e1b39dcd-419a-4e2b-993a-be012e7ea9c0"
  }] as any[];
  return <section id="solution" className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="SolutionSection.tsx">
      {/* Background Elements */}
      <div className="absolute inset-0" data-magicpath-id="1" data-magicpath-path="SolutionSection.tsx">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" data-magicpath-id="2" data-magicpath-path="SolutionSection.tsx"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" data-magicpath-id="3" data-magicpath-path="SolutionSection.tsx"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" data-magicpath-id="4" data-magicpath-path="SolutionSection.tsx">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-20" data-magicpath-id="5" data-magicpath-path="SolutionSection.tsx">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium mb-6 border border-purple-500/20" data-magicpath-id="6" data-magicpath-path="SolutionSection.tsx">
            <Sparkles className="w-4 h-4 mr-2" />
            Our AI-Powered Solution
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8" data-magicpath-id="7" data-magicpath-path="SolutionSection.tsx">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" data-magicpath-id="8" data-magicpath-path="SolutionSection.tsx">
              Research Intelligence
            </span>
            <br data-magicpath-id="9" data-magicpath-path="SolutionSection.tsx" />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" data-magicpath-id="10" data-magicpath-path="SolutionSection.tsx">
              Reimagined
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-magicpath-id="11" data-magicpath-path="SolutionSection.tsx">
            ScholarSpark transforms the research process with AI that understands academic context, 
            discovers hidden connections, and accelerates scientific discovery.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" data-magicpath-id="12" data-magicpath-path="SolutionSection.tsx">
          {coreFeatures.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group relative" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SolutionSection.tsx">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm h-full" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="SolutionSection.tsx">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="SolutionSection.tsx" />
                
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="SolutionSection.tsx">
                  <feature.icon className="w-7 h-7 text-white" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="SolutionSection.tsx" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="18" data-magicpath-path="SolutionSection.tsx">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="19" data-magicpath-path="SolutionSection.tsx">
                  {feature.desc}
                </p>
                
                {/* Benefit Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 rounded-full text-purple-400 text-xs font-medium" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="benefit:unknown" data-magicpath-id="20" data-magicpath-path="SolutionSection.tsx">
                  <TrendingUp className="w-3 h-3 mr-1" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="SolutionSection.tsx" />
                  {feature.benefit}
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Before/After Comparison */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="mb-20" data-magicpath-id="22" data-magicpath-path="SolutionSection.tsx">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-200" data-magicpath-id="23" data-magicpath-path="SolutionSection.tsx">
            Transform Your Research Workflow
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="24" data-magicpath-path="SolutionSection.tsx">
            {beforeAfter.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="SolutionSection.tsx">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/20 transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="SolutionSection.tsx">
                  <div className="flex items-center space-x-4 mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="SolutionSection.tsx">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="SolutionSection.tsx">
                      <item.icon className="w-5 h-5 text-purple-400" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="SolutionSection.tsx" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="SolutionSection.tsx" />
                  </div>
                  
                  <div className="space-y-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="SolutionSection.tsx">
                    <div className="flex items-center space-x-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="SolutionSection.tsx">
                      <div className="w-2 h-2 bg-red-400 rounded-full" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="SolutionSection.tsx"></div>
                      <span className="text-gray-400 text-sm line-through" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="before:unknown" data-magicpath-id="34" data-magicpath-path="SolutionSection.tsx">{item.before}</span>
                    </div>
                    <div className="flex items-center space-x-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="SolutionSection.tsx">
                      <div className="w-2 h-2 bg-green-400 rounded-full" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="SolutionSection.tsx"></div>
                      <span className="text-white font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="after:unknown" data-magicpath-id="37" data-magicpath-path="SolutionSection.tsx">{item.after}</span>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Our Magic Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-12 border border-purple-500/20 mb-16" data-magicpath-id="38" data-magicpath-path="SolutionSection.tsx">
          <div className="text-center mb-12" data-magicpath-id="39" data-magicpath-path="SolutionSection.tsx">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6" data-magicpath-id="40" data-magicpath-path="SolutionSection.tsx">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" data-magicpath-id="41" data-magicpath-path="SolutionSection.tsx">
              The Magic Behind ScholarSpark
            </h3>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="42" data-magicpath-path="SolutionSection.tsx">
              Our breakthrough comes from combining cutting-edge AI with deep understanding of academic research workflows. 
              Here's what makes us different:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12" data-magicpath-id="43" data-magicpath-path="SolutionSection.tsx">
            {magicPoints.map((point, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="text-center" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="SolutionSection.tsx">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="SolutionSection.tsx">
                  <point.icon className="w-6 h-6 text-purple-400" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="SolutionSection.tsx" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="47" data-magicpath-path="SolutionSection.tsx">{point.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="48" data-magicpath-path="SolutionSection.tsx">{point.description}</p>
              </motion.div>)}
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800/50 rounded-2xl p-8 text-center" data-magicpath-id="49" data-magicpath-path="SolutionSection.tsx">
            <h4 className="text-xl font-bold text-white mb-6" data-magicpath-id="50" data-magicpath-path="SolutionSection.tsx">Proven Performance</h4>
            <div className="grid md:grid-cols-3 gap-6" data-magicpath-id="51" data-magicpath-path="SolutionSection.tsx">
              <div data-magicpath-id="52" data-magicpath-path="SolutionSection.tsx">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2" data-magicpath-id="53" data-magicpath-path="SolutionSection.tsx">
                  10x
                </div>
                <div className="text-sm text-gray-400" data-magicpath-id="54" data-magicpath-path="SolutionSection.tsx">Faster literature reviews</div>
              </div>
              <div data-magicpath-id="55" data-magicpath-path="SolutionSection.tsx">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2" data-magicpath-id="56" data-magicpath-path="SolutionSection.tsx">
                  95%
                </div>
                <div className="text-sm text-gray-400" data-magicpath-id="57" data-magicpath-path="SolutionSection.tsx">Accuracy in relevance matching</div>
              </div>
              <div data-magicpath-id="58" data-magicpath-path="SolutionSection.tsx">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2" data-magicpath-id="59" data-magicpath-path="SolutionSection.tsx">
                  50M+
                </div>
                <div className="text-sm text-gray-400" data-magicpath-id="60" data-magicpath-path="SolutionSection.tsx">Papers in our knowledge base</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center" data-magicpath-id="61" data-magicpath-path="SolutionSection.tsx">
          <h3 className="text-2xl font-bold text-white mb-4" data-magicpath-id="62" data-magicpath-path="SolutionSection.tsx">
            Ready to Transform Research?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto" data-magicpath-id="63" data-magicpath-path="SolutionSection.tsx">
            Join the AI revolution in academic research. See how ScholarSpark can accelerate your discoveries.
          </p>
          
          <button onClick={() => document.getElementById('traction')?.scrollIntoView({
          behavior: 'smooth'
        })} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group" data-magicpath-id="64" data-magicpath-path="SolutionSection.tsx">
            <span data-magicpath-id="65" data-magicpath-path="SolutionSection.tsx">See Our Traction</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-magicpath-id="66" data-magicpath-path="SolutionSection.tsx" />
          </button>
        </motion.div>
      </div>
    </section>;
};
export default SolutionSection;