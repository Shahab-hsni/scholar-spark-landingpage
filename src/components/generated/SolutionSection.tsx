import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Star, ArrowRight, Sparkles, Target, TrendingUp, Search, BookOpen, Network, Lightbulb } from 'lucide-react';
const SolutionSection: React.FC = () => {
  const coreFeatures = [{
    icon: Brain,
    title: "Intelligent Discovery",
    desc: "AI-powered semantic search that understands context and meaning, not just keywords",
    benefit: "Find 90% more relevant papers",
    color: "from-purple-500 to-blue-500"
  }, {
    icon: Zap,
    title: "Instant Synthesis",
    desc: "Generate comprehensive literature reviews and research summaries in minutes",
    benefit: "10x faster literature reviews",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Globe,
    title: "Knowledge Mapping",
    desc: "Visualize research landscapes, identify gaps, and discover emerging connections",
    benefit: "Spot opportunities others miss",
    color: "from-cyan-500 to-green-500"
  }, {
    icon: Star,
    title: "Trend Analysis",
    desc: "Predict emerging research directions and identify high-impact opportunities",
    benefit: "Stay ahead of the curve",
    color: "from-green-500 to-purple-500"
  }] as any[];
  const magicPoints = [{
    icon: Network,
    title: "Proprietary Knowledge Graphs",
    description: "We've built the world's largest academic knowledge graph, connecting concepts, authors, and findings across disciplines."
  }, {
    icon: Brain,
    title: "Advanced Language Models",
    description: "Our fine-tuned LLMs understand academic language, methodology, and research context better than any general-purpose AI."
  }, {
    icon: Target,
    title: "Multi-Modal Understanding",
    description: "We process not just text, but figures, tables, citations, and metadata to provide complete research intelligence."
  }] as any[];
  const beforeAfter = [{
    before: "Spend weeks searching through databases",
    after: "Get comprehensive results in seconds",
    icon: Search
  }, {
    before: "Manually read hundreds of papers",
    after: "AI-generated summaries with key insights",
    icon: BookOpen
  }, {
    before: "Miss connections between research areas",
    after: "Discover hidden relationships automatically",
    icon: Network
  }, {
    before: "Struggle to identify research gaps",
    after: "Clear visualization of opportunities",
    icon: Lightbulb
  }] as any[];
  return <section id="solution" className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
      }} className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Our AI-Powered Solution
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Research Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ScholarSpark transforms the research process with AI that understands academic context, 
            discovers hidden connections, and accelerates scientific discovery.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
        }} className="group relative">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {feature.desc}
                </p>
                
                {/* Benefit Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 rounded-full text-purple-400 text-xs font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
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
      }} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-200">
            Transform Your Research Workflow
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
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
          }} className="group">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/20 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm line-through">{item.before}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white font-medium">{item.after}</span>
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
      }} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-12 border border-purple-500/20 mb-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Magic Behind ScholarSpark
            </h3>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our breakthrough comes from combining cutting-edge AI with deep understanding of academic research workflows. 
              Here's what makes us different:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
          }} className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{point.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </motion.div>)}
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800/50 rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold text-white mb-6">Proven Performance</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  10x
                </div>
                <div className="text-sm text-gray-400">Faster literature reviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-400">Accuracy in relevance matching</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
                  50M+
                </div>
                <div className="text-sm text-gray-400">Papers in our knowledge base</div>
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
      }} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Research?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the AI revolution in academic research. See how ScholarSpark can accelerate your discoveries.
          </p>
          
          <button onClick={() => document.getElementById('traction')?.scrollIntoView({
          behavior: 'smooth'
        })} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group">
            <span>See Our Traction</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>;
};
export default SolutionSection;