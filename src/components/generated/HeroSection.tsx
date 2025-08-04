import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Zap, Globe } from 'lucide-react';
interface HeroSectionProps {
  onCTAClick?: () => void;
  mpid?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  onCTAClick
}) => {
  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      window.location.href = 'mailto:pouya.ataei@scholarspark.ai?subject=Investor%20Inquiry:%20ScholarSpark%20Pre-Seed';
    }
  };
  const floatingElements = [{
    icon: Brain,
    delay: 0,
    x: -100,
    y: -50,
    mpid: "f1fb2762-00ed-4336-baa9-beaeb6abbaf8"
  }, {
    icon: Zap,
    delay: 0.5,
    x: 100,
    y: -80,
    mpid: "67deaa98-07c1-4c52-9553-c8a14047284e"
  }, {
    icon: Globe,
    delay: 1,
    x: -80,
    y: 60,
    mpid: "6dbaffa3-566f-49a4-9ac2-2919fa622d23"
  }, {
    icon: Sparkles,
    delay: 1.5,
    x: 120,
    y: 40,
    mpid: "ec669b12-0f39-4741-8f58-800716eaf6a0"
  }] as any[];
  return <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Animated Background Elements */}
      <div className="absolute inset-0" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        {/* Gradient Orbs */}
        <motion.div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="2" data-magicpath-path="HeroSection.tsx" />
        <motion.div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.7, 0.4]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} data-magicpath-id="3" data-magicpath-path="HeroSection.tsx" />
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} data-magicpath-id="4" data-magicpath-path="HeroSection.tsx" />

        {/* Floating Icons */}
        {floatingElements.map((element, index) => <motion.div key={index} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" initial={{
        opacity: 0,
        x: element.x,
        y: element.y,
        scale: 0
      }} animate={{
        opacity: [0, 0.6, 0],
        x: [element.x, element.x + 20, element.x],
        y: [element.y, element.y - 20, element.y],
        scale: [0, 1, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        delay: element.delay,
        ease: "easeInOut"
      }} data-magicpath-uuid={(element as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/20" data-magicpath-uuid={(element as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
              <element.icon className="w-6 h-6 text-purple-300" data-magicpath-uuid={(element as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="HeroSection.tsx" />
            </div>
          </motion.div>)}

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10" data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            <defs data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
              <pattern id="mushroom-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
                <circle cx="50" cy="30" r="20" fill="url(#gradient1)" opacity="0.3" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx" />
                <rect x="45" y="50" width="10" height="30" fill="url(#gradient2)" opacity="0.3" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx" />
                <polygon points="30,20 70,20 60,40 40,40" fill="url(#gradient1)" opacity="0.2" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx" />
              </pattern>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#mushroom-pattern)" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx" />
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto" data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
        {/* Vision Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-8" data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 backdrop-blur-sm" data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionizing Academic Research with AI
          </span>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.2
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" data-magicpath-id="21" data-magicpath-path="HeroSection.tsx">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent" data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">
            AI-Powered
          </span>
          <br data-magicpath-id="23" data-magicpath-path="HeroSection.tsx" />
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-white bg-clip-text text-transparent" data-magicpath-id="24" data-magicpath-path="HeroSection.tsx">
            Research Intelligence
          </span>
        </motion.h1>
        
        {/* Sub-headline */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto" data-magicpath-id="25" data-magicpath-path="HeroSection.tsx">
          Transforming how researchers discover, analyze, and synthesize academic knowledge with 
          <span className="text-purple-300 font-semibold" data-magicpath-id="26" data-magicpath-path="HeroSection.tsx"> cutting-edge AI technology</span>
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12" data-magicpath-id="27" data-magicpath-path="HeroSection.tsx">
          <button onClick={handleCTAClick} className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx">
            <span data-magicpath-id="29" data-magicpath-path="HeroSection.tsx">Request Investor Deck</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="30" data-magicpath-path="HeroSection.tsx" />
          </button>
          
          <button onClick={() => document.getElementById('solution')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-10 py-5 border-2 border-purple-500/50 rounded-xl font-semibold text-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-purple-300 hover:text-purple-200" data-magicpath-id="31" data-magicpath-path="HeroSection.tsx">
            See How It Works
          </button>
        </motion.div>
        
        {/* Credibility Snippet */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="text-center" data-magicpath-id="32" data-magicpath-path="HeroSection.tsx">
          <p className="text-gray-400 text-sm mb-4" data-magicpath-id="33" data-magicpath-path="HeroSection.tsx">Trusted by researchers at leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-magicpath-id="34" data-magicpath-path="HeroSection.tsx">
            {['Stanford', 'MIT', 'Harvard', 'Oxford', 'Cambridge'].map((institution, index) => <motion.span key={institution} className="text-gray-500 font-medium text-sm tracking-wider" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.9 + index * 0.1
          }} data-magicpath-id="35" data-magicpath-path="HeroSection.tsx">
                {institution}
              </motion.span>)}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.2
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-magicpath-id="36" data-magicpath-path="HeroSection.tsx">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center" data-magicpath-id="37" data-magicpath-path="HeroSection.tsx">
            <motion.div animate={{
            y: [0, 12, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="w-1 h-3 bg-purple-400 rounded-full mt-2" data-magicpath-id="38" data-magicpath-path="HeroSection.tsx" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;