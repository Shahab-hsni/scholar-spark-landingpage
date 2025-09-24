import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Users,
  Clock,
  AlertTriangle,
  BookOpen,
  Search,
  Brain,
} from 'lucide-react';
const ProblemSection: React.FC = () => {
  const problemStats = [
    {
      icon: TrendingUp,
      stat: '4M+',
      label: 'New papers published annually',
      desc: 'Growing at 8% per year, creating an overwhelming information flood',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Target,
      stat: '73%',
      label: 'Of researchers struggle with discovery',
      desc: 'Missing relevant work in their field due to poor search tools',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Clock,
      stat: '156 hrs',
      label: 'Average time spent on literature review',
      desc: 'Per research project - time that could be spent on actual research',
      color: 'from-yellow-500 to-red-500',
    },
  ] as any[];
  const painPoints = [
    {
      icon: Search,
      title: 'Inefficient Discovery',
      description: 'Traditional keyword search fails to capture semantic meaning and context',
      impact: 'Researchers miss 60% of relevant papers',
    },
    {
      icon: BookOpen,
      title: 'Information Overload',
      description: 'Exponential growth in publications makes comprehensive review impossible',
      impact: 'Knowledge gaps and duplicated research',
    },
    {
      icon: Brain,
      title: 'Manual Synthesis',
      description: 'Connecting insights across papers requires extensive manual effort',
      impact: 'Slow innovation and missed breakthroughs',
    },
    {
      icon: AlertTriangle,
      title: 'Quality Assessment',
      description: 'Difficulty identifying high-impact, credible research among noise',
      impact: 'Wasted time on low-quality sources',
    },
  ] as any[];
  return (
    <section id="problem" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-full text-red-400 text-sm font-medium mb-6 border border-red-500/20">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Research Crisis
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Academic Research is
            <span className="block text-red-400">Drowning in Data</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The exponential growth of academic publications has created an unprecedented crisis.
            Researchers are spending more time searching than discovering, more time reading than
            innovating.
          </p>
        </motion.div>

        {/* Problem Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problemStats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
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
              className="group relative"
            >
              <div className="bg-[#110e16] rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 backdrop-blur-sm h-full">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Stat */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {item.stat}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-200 mb-3">{item.label}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pain Points Grid */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-200">
            The Core Challenges Researchers Face Daily
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="group"
              >
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-red-500/20 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                      <point.icon className="w-6 h-6 text-red-400" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 mb-3 leading-relaxed">{point.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-red-500/10 rounded-full text-red-400 text-sm font-medium">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {point.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-12 border border-red-500/20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Cost of Inefficiency
            </h3>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Every day, brilliant researchers waste countless hours navigating information chaos
              instead of making breakthroughs. Critical discoveries are delayed, research is
              duplicated, and innovation slows to a crawl.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">$180B</div>
                <div className="text-sm text-gray-400">
                  Annual research waste due to inefficiency
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">2.5 years</div>
                <div className="text-sm text-gray-400">
                  Average delay in breakthrough discoveries
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
                <div className="text-sm text-gray-400">
                  Of research projects are unknowingly duplicated
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ProblemSection;
