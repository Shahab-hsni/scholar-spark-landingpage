import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
  mpid?: string;
}
const Header: React.FC<HeaderProps> = ({
  onNavigate
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigationItems = [{
    id: 'problem',
    label: 'Problem',
    mpid: "50835730-322c-481d-8b72-db5759a452ce"
  }, {
    id: 'solution',
    label: 'Solution',
    mpid: "683a1440-f215-4ef9-b0d5-cccac90fc813"
  }, {
    id: 'traction',
    label: 'Traction',
    mpid: "c1cc31b0-15a8-43fd-84ea-0d360368504d"
  }, {
    id: 'market',
    label: 'Market',
    mpid: "aadc0c2e-7f0b-4b7d-b707-a77cef804e13"
  }, {
    id: 'team',
    label: 'Team',
    mpid: "d13daa81-e77b-4adb-bd97-33706e285036"
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
  return <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <div className="max-w-7xl mx-auto px-6 py-4" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <div className="flex justify-between items-center" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg" data-magicpath-id="4" data-magicpath-path="Header.tsx">
              <Brain className="w-6 h-6 text-white" data-magicpath-id="5" data-magicpath-path="Header.tsx" />
            </div>
            <div className="flex flex-col" data-magicpath-id="6" data-magicpath-path="Header.tsx">
              <span className="text-xl font-bold text-white" data-magicpath-id="7" data-magicpath-path="Header.tsx">ScholarSpark</span>
              <span className="text-xs text-purple-300 -mt-1" data-magicpath-id="8" data-magicpath-path="Header.tsx">AI Research Intelligence</span>
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
        }} data-magicpath-id="9" data-magicpath-path="Header.tsx">
            {navigationItems.map((item, index) => <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="10" data-magicpath-path="Header.tsx">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Header.tsx"></span>
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
        }} data-magicpath-id="12" data-magicpath-path="Header.tsx">
            <button onClick={handleCTAClick} className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25" data-magicpath-id="13" data-magicpath-path="Header.tsx">
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
        }} data-magicpath-id="14" data-magicpath-path="Header.tsx">
            {isMobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="15" data-magicpath-path="Header.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="16" data-magicpath-path="Header.tsx" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence data-magicpath-id="17" data-magicpath-path="Header.tsx">
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
        }} className="lg:hidden mt-4 pb-4 border-t border-gray-800" data-magicpath-id="18" data-magicpath-path="Header.tsx">
              <nav className="flex flex-col space-y-4 pt-4" data-magicpath-id="19" data-magicpath-path="Header.tsx">
                {navigationItems.map((item, index) => <motion.button key={item.id} onClick={() => handleNavClick(item.id)} className="text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium py-2" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.1
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="20" data-magicpath-path="Header.tsx">
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
            }} data-magicpath-id="21" data-magicpath-path="Header.tsx">
                  Get Investor Deck
                </motion.button>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
};
export default Header;