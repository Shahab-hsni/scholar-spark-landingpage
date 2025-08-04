import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}
const Header: React.FC<HeaderProps> = ({
  onNavigate
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigationItems = [{
    id: 'problem',
    label: 'Problem'
  }, {
    id: 'solution',
    label: 'Solution'
  }, {
    id: 'traction',
    label: 'Traction'
  }, {
    id: 'market',
    label: 'Market'
  }, {
    id: 'team',
    label: 'Team'
  }] as any[];
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const handleCTAClick = () => {
    window.location.href = 'mailto:pouya.ataei@scholarspark.ai?subject=Investor%20Inquiry:%20ScholarSpark%20Pre-Seed';
  };
  return <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">ScholarSpark</span>
              <span className="text-xs text-purple-300 -mt-1">AI Research Intelligence</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav className="hidden lg:flex items-center space-x-8" initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {navigationItems.map((item, index) => <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>)}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div className="hidden md:flex items-center space-x-4" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <button onClick={handleCTAClick} className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Get Investor Deck
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4 pt-4">
                {navigationItems.map((item, index) => <motion.button key={item.id} onClick={() => handleNavClick(item.id)} className="text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium py-2" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.1
            }}>
                    {item.label}
                  </motion.button>)}
                <motion.button onClick={handleCTAClick} className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.4
            }}>
                  Get Investor Deck
                </motion.button>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
};
export default Header;