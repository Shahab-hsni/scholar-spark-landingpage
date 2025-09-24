// Filename: AboutPage.tsx
// This component renders the complete "About Us" page for ScholarSpark.
// It is built with React, TypeScript, and styled with Tailwind CSS.

import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="bg-[#0A090C] text-[#E0E0E0] font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 p-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-gray-600/50 rounded-lg p-2 flex items-center justify-center gap-3 w-max mx-auto shadow-lg">
            {/* Home - Clickable */}
            <button
              onClick={() => navigate('/')}
              className="text-white font-medium text-sm px-3 py-1.5 hover:bg-[#2A2A2A] hover:border hover:border-gray-500 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Home</span>
            </button>

            {/* About - Active State */}
            <div className="bg-[#2A2A2A] border border-gray-500 rounded-lg px-3 py-1.5 flex items-center space-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-medium text-sm">About</span>
            </div>

            {/* Preview app - Inactive State */}
            <div className="text-white font-medium px-3 py-1.5 flex items-center space-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Preview app</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <VisionPatternSVG />
        <section className="py-20 sm:py-32 text-center section-gradient">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                A reimagined way to organise and collaborate on your reviews.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                We are dedicated to revolutionizing how researchers conduct systematic literature
                reviews. By offering advanced tools for organization, collaboration, and insights,
                we help teams focus on what matters: making impactful discoveries.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-gray-400">
                  Empowering researchers with cutting-edge technology and fostering global
                  collaboration to accelerate the pace of discovery.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="stat-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Systematic Collaboration</h3>
                  <p className="text-gray-400">
                    Unifying teams with tools designed for a seamless, shared workflow.
                  </p>
                </div>
                <div className="stat-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-400">
                    Leveraging intelligent automation to uncover deeper connections in data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-black/20 section-gradient">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
              <p className="mt-4 text-lg text-gray-400">
                Comprehensive tools designed specifically for modern research.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="stat-card p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-bold text-white mb-3">Reference Management</h3>
                <p className="text-gray-300">
                  Organize, annotate, and cite references with ease, saving valuable research time.
                </p>
                <ul className="mt-4 text-purple-400 space-y-2">
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
                <ul className="mt-4 text-purple-400 space-y-2">
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
                <ul className="mt-4 text-purple-400 space-y-2">
                  <li>✓ Smart Literature Guide</li>
                  <li>✓ Research Landscape Viz</li>
                  <li>✓ Automated Extraction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className="mt-4 text-lg text-gray-400">
                We are a group of Academics that are keen to fix the issues we have faced.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="space-y-12">
                <div className="timeline-item flex gap-x-6">
                  <div className="timeline-dot w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-400"
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
                    <p className="text-gray-400">
                      Using data-driven and consensus-driven surveys, we have understood the need
                      for a tool that can enable improved reviews and better collaboration.
                    </p>
                  </div>
                </div>
                <div className="timeline-item flex gap-x-6">
                  <div className="timeline-dot w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-400"
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
                    <p className="text-gray-400">
                      Innovating Research Tools for the modern academic workflow.
                    </p>
                  </div>
                </div>
                <div className="timeline-item flex gap-x-6">
                  <div className="timeline-dot w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-400"
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
                    <p className="text-gray-400">
                      On the way to develop a product that every researcher will love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 section-gradient">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Research Revolution</h2>
              <p className="text-lg text-gray-400 mb-8">
                Whether you're a researcher looking to accelerate your work, an investor interested
                in the future of AI-powered research, or a partner wanting to collaborate, we'd love
                to hear from you.
              </p>
              <a
                href="#"
                className="bg-purple-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-purple-700 transition-all duration-300 glow-button"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; 2025 ScholarSpark. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
