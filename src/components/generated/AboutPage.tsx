// Filename: AboutPage.tsx
// This component renders the complete "About Us" page for ScholarSpark.
// It is built with React, TypeScript, and styled with Tailwind CSS.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientButton } from '../ui/GradientButton';
import Header from '../ui/Header';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

// SVG component for the background pattern in the "Our Vision" section.
const VisionPatternSVG = () => (
  <div className="absolute top-1/2 right-0 transform translate-x-[70%] -translate-y-1/2 w-[1200px] h-[1200px] z-0 opacity-5 pointer-events-none">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 973 973"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6" stroke="#E0E0E0" strokeWidth="1.5">
        <path opacity="0.3" d="M486.499 486.5V291.9" />
        <path opacity="0.3" d="M486.499 486.5L655.023 389.2" />
        <path opacity="0.3" d="M486.499 486.5L655.023 583.8" />
        <path opacity="0.3" d="M486.499 486.5V681.1" />
        <path opacity="0.3" d="M486.502 486.5L317.979 583.8" />
        <path opacity="0.3" d="M486.502 486.5L317.979 389.2" />
        <path opacity="0.3" d="M486.499 486.5V97.3" />
        <path opacity="0.3" d="M486.499 486.5L823.546 291.9" />
        <path opacity="0.3" d="M486.499 486.5L823.546 681.1" />
        <path opacity="0.3" d="M486.499 486.5V875.7" />
        <path opacity="0.3" d="M486.5 486.5L149.453 681.1" />
        <path opacity="0.3" d="M486.5 486.5L149.453 291.9" />
        <path opacity="0.3" d="M486.499 291.9L655.023 583.8" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M486.499 291.9V681.1" />
        <path opacity="0.3" d="M486.502 291.9L317.979 583.8" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M486.499 291.9V97.3" />
        <path opacity="0.3" d="M486.499 291.9H823.546" />
        <path opacity="0.3" d="M486.499 291.9L823.546 681.1" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M486.499 291.9V875.7" />
        <path opacity="0.3" d="M486.5 291.9L149.453 681.1" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M486.5 291.9H149.453" />
        <path opacity="0.3" d="M655.023 389.2L486.499 681.1" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.026 389.2L317.979 583.8" />
        <path opacity="0.3" d="M655.026 389.2H317.979" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.023 389.2L486.499 97.3" />
        <path opacity="0.3" d="M655.023 389.2L823.547 291.9" />
        <path opacity="0.3" d="M655.023 389.2L823.547 681.1" />
        <path opacity="0.3" d="M655.023 389.2L486.499 875.7" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.024 389.2L149.453 681.1" />
        <path opacity="0.3" d="M655.024 389.2L149.453 291.9" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.026 583.8H317.979" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.026 583.8L317.979 389.2" />
        <path opacity="0.3" d="M655.023 583.8L486.499 97.3" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.023 583.8L823.547 291.9" />
        <path opacity="0.3" d="M655.023 583.8L823.547 681.1" />
        <path opacity="0.3" d="M655.023 583.8L486.499 875.7" />
        <path opacity="0.3" d="M655.024 583.8L149.453 681.1" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M655.024 583.8L149.453 291.9" />
        <path opacity="0.3" d="M486.502 681.1L317.979 389.2" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M486.499 681.1V97.3" />
        <path opacity="0.3" d="M486.499 681.1L823.546 291.9" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M486.499 681.1H823.546" />
        <path opacity="0.3" d="M486.499 681.1V875.7" />
        <path opacity="0.3" d="M486.5 681.1H149.453" />
        <path opacity="0.3" d="M486.5 681.1L149.453 291.9" strokeDasharray="4.86 4.86" />
        <path opacity="0.5" d="M486.499 291.9L655.023 389.2" />
        <path opacity="0.5" d="M486.502 291.9L317.979 389.2" />
        <path opacity="0.5" d="M655.023 583.8L486.499 681.1" />
        <path opacity="0.5" d="M486.502 681.1L317.979 583.8" />
        <path opacity="0.5" d="M317.979 583.8V389.2" />
        <path opacity="0.5" d="M655.023 389.2V583.8" />
        <path opacity="0.3" d="M317.979 583.8L486.502 97.3" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M317.979 583.8L823.549 291.9" />
        <path opacity="0.3" d="M317.979 583.8L823.549 681.1" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M317.979 583.8L486.502 875.7" />
        <path opacity="0.3" d="M317.977 583.8L149.453 681.1" />
        <path opacity="0.3" d="M317.977 583.8L149.453 291.9" />
        <path opacity="0.3" d="M317.979 389.2L486.502 97.3" />
        <path opacity="0.3" d="M317.979 389.2L823.549 291.9" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M317.979 389.2L823.549 681.1" />
        <path opacity="0.3" d="M317.979 389.2L486.502 875.7" strokeDasharray="4.86 4.86" />
        <path opacity="0.3" d="M317.977 389.2L149.453 681.1" />
        <path opacity="0.3" d="M317.977 389.2L149.453 291.9" />
        <path opacity="0.3" d="M486.499 97.3L823.546 291.9" />
        <path opacity="0.3" d="M486.499 97.3L823.546 681.1" />
        <path opacity="0.3" d="M486.499 97.3V875.7" />
        <path opacity="0.3" d="M486.5 97.3L149.453 681.1" />
        <path opacity="0.3" d="M486.5 97.3L149.453 291.9" strokeWidth="1.5" />
        <path opacity="0.3" d="M823.548 291.9V681.1" />
        <path opacity="0.3" d="M823.546 291.9L486.499 875.7" />
        <path opacity="0.2" d="M823.547 291.9L149.453 681.1" />
        <path opacity="0.3" d="M823.547 291.9H149.453" />
        <path opacity="0.3" d="M823.546 681.1L486.499 875.7" />
        <path opacity="0.3" d="M823.547 681.1H149.453" />
        <path opacity="0.3" d="M823.547 681.1L149.453 291.9" />
        <path opacity="0.3" d="M486.5 875.7L149.453 681.1" />
        <path opacity="0.3" d="M486.5 875.7L149.453 291.9" />
        <path opacity="0.3" d="M149.453 681.1V291.9" />
      </g>
      <path
        d="M486.155 109.145C493.249 109.145 499 103.394 499 96.3C499 89.2058 493.249 83.4548 486.155 83.4548C479.061 83.4548 473.31 89.2058 473.31 96.3C473.31 103.394 479.061 109.145 486.155 109.145Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
        strokeWidth="2.14087"
      />
      <path
        d="M149 301C153.971 301 158 296.971 158 292C158 287.029 153.971 283 149 283C144.029 283 140 287.029 140 292C140 296.971 144.029 301 149 301Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
        strokeWidth="2.14087"
      />
      <path
        d="M149.155 694.145C156.249 694.145 162 688.394 162 681.3C162 674.206 156.249 668.455 149.155 668.455C142.061 668.455 136.31 674.206 136.31 681.3C136.31 688.394 142.061 694.145 149.155 694.145Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
        strokeWidth="2.14087"
      />
      <path
        d="M486.155 888.145C493.249 888.145 499 882.394 499 875.3C499 868.206 493.249 862.455 486.155 862.455C479.061 862.455 473.31 868.206 473.31 875.3C473.31 882.394 479.061 888.145 486.155 888.145Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
        strokeWidth="2.14087"
      />
      <path
        d="M823.155 694.145C830.249 694.145 836 688.394 836 681.3C836 674.206 830.249 668.455 823.155 668.455C816.061 668.455 810.31 674.206 810.31 681.3C810.31 688.394 816.061 694.145 823.155 694.145Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
        strokeWidth="2.14087"
      />
      <path
        d="M823.155 305.145C830.249 305.145 836 299.394 836 292.3C836 285.206 830.249 279.455 823.155 279.455C816.061 279.455 810.31 285.206 810.31 292.3C810.31 299.394 816.061 305.145 823.155 305.145Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
        strokeWidth="2.14087"
      />
    </svg>
  </div>
);

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0A090C] text-[#E0E0E0] font-sans" data-scroll-section>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <VisionPatternSVG />
        <section className="pt-32 pb-20 px-6 sm:px-10 md:px-6 text-center section-gradient">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
               The Intelligent Literature Review Engine: Your Research Co-Pilot.
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Scholar Spark provides an AI-powered, integrated platform that streamlines the discovery, organization, and synthesis of research.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-10 md:px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl text-gray-300">
                 To usher in a new golden age of human progress, where the boundaries of knowledge crumble before the relentless march of accelerated research. We envision a world where every question sparks a wildfire of collaborative discovery, where insights bloom like a thousand flowers in the fertile soil of shared wisdom. Through our innovations, we seek to weave a global tapestry of interconnected minds, transcending borders and disciplines, where the seeds of today’s research bear fruit as tomorrow’s solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="stat-card p-6 rounded-2xl card-hover">
                  <h3 className="text-xl font-bold text-white mb-2">Systematic Collaboration</h3>
                  <p className="text-gray-300">
                    Unifying teams with tools designed for a seamless, shared workflow.
                  </p>
                </div>
                <div className="stat-card p-6 rounded-2xl card-hover">
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-300">
                    Leveraging intelligent automation to uncover deeper connections in data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-10 md:px-6 section-gradient">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
              <p className="text-xl text-gray-300">
                Comprehensive tools designed specifically for modern research.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="stat-card p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-bold text-white mb-3">Reference Management</h3>
                <p className="text-gray-300">
                  Organize, annotate, and cite references with ease, saving valuable research time.
                </p>
                <ul className="mt-4 text-[#8F8EDF] space-y-2">
                  <li>✓ Smart Citations</li>
                  <li>✓ Annotation Tools</li>
                  <li>✓ Export Options</li>
                </ul>
              </div>
              <div className="stat-card p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-bold text-white mb-3">Collaboration Features</h3>
                <p className="text-gray-300">
                  Facilitate teamwork with real-time editing, task management, and discussion
                  threads.
                </p>
                <ul className="mt-4 text-[#8F8EDF] space-y-2">
                  <li>✓ Real-time Editing</li>
                  <li>✓ Task Management</li>
                  <li>✓ Version Control</li>
                </ul>
              </div>
              <div className="stat-card p-8 rounded-2xl card-hover bg-purple-900/20 border-purple-600">
                <h3 className="text-2xl font-bold text-white mb-3">AI Insights (Coming Soon!)</h3>
                <p className="text-gray-300">
                  Unlock the future of research with AI-driven landscape visualization and
                  literature guidance.
                </p>
                <ul className="mt-4 text-[#8F8EDF] space-y-2">
                  <li>✓ Smart Literature Guide</li>
                  <li>✓ Research Landscape Viz</li>
                  <li>✓ Automated Extraction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-10 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-gray-300">
                We are a group of Academics that are keen to fix the issues we have faced.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="space-y-12">
                <div className="flex gap-x-6">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-[#8F8EDF]/20 border border-[#8F8EDF]/50">
                    <svg
                      className="w-5 h-5 text-[#8F8EDF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Data-Driven Discovery</h3>
                    <p className="text-gray-300">
                      Using data-driven and consensus-driven surveys, we have understood the need
                      for a tool that can enable improved reviews and better collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-6">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-[#8F8EDF]/20 border border-[#8F8EDF]/50">
                    <svg
                      className="w-5 h-5 text-[#8F8EDF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Research Tools Reimagined</h3>
                    <p className="text-gray-300">
                      Innovating Research Tools for the modern academic workflow.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-6">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-[#8F8EDF]/20 border border-[#8F8EDF]/50">
                    <svg
                      className="w-5 h-5 text-[#8F8EDF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Building the Future</h3>
                    <p className="text-gray-300">
                      On the way to develop a product that every researcher will love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment CTA */}
        <section className="py-20 px-6 sm:px-10 md:px-6 relative overflow-visible">
          {/* Circle background */}
          <div
            className="absolute"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '820px',
              background: 'linear-gradient(180deg, #6f6dd5 0%, rgba(79, 26, 214, 0.46) 100%)',
              filter: 'blur(100px)',
              opacity: 0.6,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center relative z-10">
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
                We're raising $2M in pre-seed funding to accelerate product development and expand
                our research partnerships. Join us in revolutionizing academic research.
              </p>

              <GradientButton
                asChild
                className="px-10 py-5 text-xl flex items-center space-x-3 mx-auto group mb-8 w-max"
              >
                <a href="/pdf/pitchDeck.pdf" download="ScholarSpark-Investor-Deck.pdf">
                  <Mail className="w-6 h-6" />
                  <span>Request Investor Deck</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </GradientButton>

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
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-10 md:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          &copy; 2025 ScholarSpark. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
