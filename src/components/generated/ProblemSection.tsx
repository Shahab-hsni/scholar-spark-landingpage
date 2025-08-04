import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Clock, AlertTriangle, BookOpen, Search, Brain } from 'lucide-react';
const ProblemSection: React.FC = () => {
  const problemStats = [{
    icon: TrendingUp,
    stat: "4M+",
    label: "New papers published annually",
    desc: "Growing at 8% per year, creating an overwhelming information flood",
    color: "from-red-500 to-orange-500",
    mpid: "3c96373f-db28-47fe-be24-91605e3ece87"
  }, {
    icon: Target,
    stat: "73%",
    label: "Of researchers struggle with discovery",
    desc: "Missing relevant work in their field due to poor search tools",
    color: "from-orange-500 to-yellow-500",
    mpid: "4d7cd368-f73f-494d-94fd-70728a117c27"
  }, {
    icon: Clock,
    stat: "156 hrs",
    label: "Average time spent on literature review",
    desc: "Per research project - time that could be spent on actual research",
    color: "from-yellow-500 to-red-500",
    mpid: "3e054e52-55b3-46aa-84ff-c94ab94ef078"
  }] as any[];
  const painPoints = [{
    icon: Search,
    title: "Inefficient Discovery",
    description: "Traditional keyword search fails to capture semantic meaning and context",
    impact: "Researchers miss 60% of relevant papers",
    mpid: "e90aaf02-5137-4819-8bb7-e4377417eb94"
  }, {
    icon: BookOpen,
    title: "Information Overload",
    description: "Exponential growth in publications makes comprehensive review impossible",
    impact: "Knowledge gaps and duplicated research",
    mpid: "ef5f9e15-6cee-435b-8f2d-311be3d8211c"
  }, {
    icon: Brain,
    title: "Manual Synthesis",
    description: "Connecting insights across papers requires extensive manual effort",
    impact: "Slow innovation and missed breakthroughs",
    mpid: "fd1af733-204d-44c2-89af-34b9af4ffa5f"
  }, {
    icon: AlertTriangle,
    title: "Quality Assessment",
    description: "Difficulty identifying high-impact, credible research among noise",
    impact: "Wasted time on low-quality sources",
    mpid: "501f4ff7-43bb-4d1d-b51c-ad9b9f243b7c"
  }] as any[];
  return <section id="problem" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800" data-magicpath-id="0" data-magicpath-path="ProblemSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="ProblemSection.tsx">
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
      }} className="text-center mb-20" data-magicpath-id="2" data-magicpath-path="ProblemSection.tsx">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-full text-red-400 text-sm font-medium mb-6 border border-red-500/20" data-magicpath-id="3" data-magicpath-path="ProblemSection.tsx">
            <AlertTriangle className="w-4 h-4 mr-2" data-magicpath-id="4" data-magicpath-path="ProblemSection.tsx" />
            The Research Crisis
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" data-magicpath-id="5" data-magicpath-path="ProblemSection.tsx">
            Academic Research is 
            <span className="block text-red-400" data-magicpath-id="6" data-magicpath-path="ProblemSection.tsx">Drowning in Data</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-magicpath-id="7" data-magicpath-path="ProblemSection.tsx">
            The exponential growth of academic publications has created an unprecedented crisis. 
            Researchers are spending more time searching than discovering, more time reading than innovating.
          </p>
        </motion.div>

        {/* Problem Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20" data-magicpath-id="8" data-magicpath-path="ProblemSection.tsx">
          {problemStats.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="group relative" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="ProblemSection.tsx">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 backdrop-blur-sm h-full" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="ProblemSection.tsx">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="ProblemSection.tsx" />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="ProblemSection.tsx">
                  <item.icon className="w-8 h-8 text-white" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="ProblemSection.tsx" />
                </div>
                
                {/* Stat */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="stat:string" data-magicpath-id="14" data-magicpath-path="ProblemSection.tsx">
                  {item.stat}
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-200 mb-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="15" data-magicpath-path="ProblemSection.tsx">
                  {item.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:string" data-magicpath-id="16" data-magicpath-path="ProblemSection.tsx">
                  {item.desc}
                </p>
              </div>
            </motion.div>)}
        </div>

        {/* Pain Points Grid */}
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
      }} className="mb-16" data-magicpath-id="17" data-magicpath-path="ProblemSection.tsx">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-200" data-magicpath-id="18" data-magicpath-path="ProblemSection.tsx">
            The Core Challenges Researchers Face Daily
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="19" data-magicpath-path="ProblemSection.tsx">
            {painPoints.map((point, index) => <motion.div key={index} initial={{
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
          }} className="group" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="ProblemSection.tsx">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-red-500/20 transition-all duration-300 h-full" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="ProblemSection.tsx">
                  <div className="flex items-start space-x-4" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="ProblemSection.tsx">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="ProblemSection.tsx">
                      <point.icon className="w-6 h-6 text-red-400" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="ProblemSection.tsx" />
                    </div>
                    
                    <div className="flex-1" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="ProblemSection.tsx">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors duration-300" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="26" data-magicpath-path="ProblemSection.tsx">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 mb-3 leading-relaxed" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="27" data-magicpath-path="ProblemSection.tsx">
                        {point.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-red-500/10 rounded-full text-red-400 text-sm font-medium" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-field="impact:string" data-magicpath-id="28" data-magicpath-path="ProblemSection.tsx">
                        <AlertTriangle className="w-3 h-3 mr-1" data-magicpath-uuid={(point as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="ProblemSection.tsx" />
                        {point.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Impact Statement */}
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
      }} className="text-center bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-12 border border-red-500/20" data-magicpath-id="30" data-magicpath-path="ProblemSection.tsx">
          <div className="max-w-4xl mx-auto" data-magicpath-id="31" data-magicpath-path="ProblemSection.tsx">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6" data-magicpath-id="32" data-magicpath-path="ProblemSection.tsx">
              <Users className="w-8 h-8 text-white" data-magicpath-id="33" data-magicpath-path="ProblemSection.tsx" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" data-magicpath-id="34" data-magicpath-path="ProblemSection.tsx">
              The Cost of Inefficiency
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed" data-magicpath-id="35" data-magicpath-path="ProblemSection.tsx">
              Every day, brilliant researchers waste countless hours navigating information chaos instead of making breakthroughs. 
              Critical discoveries are delayed, research is duplicated, and innovation slows to a crawl.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center" data-magicpath-id="36" data-magicpath-path="ProblemSection.tsx">
              <div data-magicpath-id="37" data-magicpath-path="ProblemSection.tsx">
                <div className="text-3xl font-bold text-red-400 mb-2" data-magicpath-id="38" data-magicpath-path="ProblemSection.tsx">$180B</div>
                <div className="text-sm text-gray-400" data-magicpath-id="39" data-magicpath-path="ProblemSection.tsx">Annual research waste due to inefficiency</div>
              </div>
              <div data-magicpath-id="40" data-magicpath-path="ProblemSection.tsx">
                <div className="text-3xl font-bold text-orange-400 mb-2" data-magicpath-id="41" data-magicpath-path="ProblemSection.tsx">2.5 years</div>
                <div className="text-sm text-gray-400" data-magicpath-id="42" data-magicpath-path="ProblemSection.tsx">Average delay in breakthrough discoveries</div>
              </div>
              <div data-magicpath-id="43" data-magicpath-path="ProblemSection.tsx">
                <div className="text-3xl font-bold text-yellow-400 mb-2" data-magicpath-id="44" data-magicpath-path="ProblemSection.tsx">40%</div>
                <div className="text-sm text-gray-400" data-magicpath-id="45" data-magicpath-path="ProblemSection.tsx">Of research projects are unknowingly duplicated</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ProblemSection;