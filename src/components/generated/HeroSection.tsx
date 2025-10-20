// Filename: Hero.tsx
// This component renders the main hero section for the ScholarSpark investor landing page.
// It includes a dynamic, interactive SVG background that responds to cursor movement.

import React, { useRef, useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { GradientButton } from '../ui/GradientButton';

// The main SVG component for the interactive background.
// It contains two layers: a base (dark gray) and a highlight (purple) revealed by a mask.
const MetatronCubeSVG = () => {
  const beamId = useId();
  const beamId2 = useId();
  return (
    <div
      id="hero-svg-container"
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0 opacity-60 overflow-visible"
    >
      <svg
        viewBox="0 0 973 973"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[250%] h-[250%]"
      >
        <defs>
          {/* This radial gradient creates the soft, feathered edge for the spotlight mask */}
          <radialGradient id="glow-gradient">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="60%" stopColor="white" stopOpacity="140" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          {/* The mask uses the gradient-filled circle to create the faded spotlight effect */}
          <mask id="cursor-mask">
            <circle id="cursor-circle" cx="0" cy="0" r="160" fill="url(#glow-gradient)" />
          </mask>
          {/* Glow filter for the highlighted elements */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated beam gradients (inspired by AnimatedBeam) */}
          <linearGradient
            id={beamId}
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop stopColor="#ffaa40" stopOpacity="0" />
            <stop stopColor="#ffaa40" />
            <stop offset="32.5%" stopColor="#9c40ff" />
            <stop offset="100%" stopColor="#9c40ff" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id={beamId2}
            gradientUnits="userSpaceOnUse"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#9c40ff" stopOpacity="0" />
            <stop stopColor="#9c40ff" />
            <stop offset="32.5%" stopColor="#ffaa40" />
            <stop offset="100%" stopColor="#ffaa40" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Layer 1: Base SVG (subtle, dark gray) - Always visible */}
        <g>
          <g opacity="0.8" stroke="#374151" strokeWidth="1">
            <path opacity="0.5" d="M486.5 486.5V291.9" />
            <path opacity="0.5" d="M486.5 486.5L655.024 389.2" />
            <path opacity="0.5" d="M486.5 486.5L655.024 583.8" />
            <path opacity="0.5" d="M486.5 486.5V681.1" />
            <path opacity="0.5" d="M486.502 486.5L317.979 583.8" />
            <path opacity="0.5" d="M486.502 486.5L317.979 389.2" />
            <path opacity="0.5" d="M486.5 486.5V97.3" />
            <path opacity="0.5" d="M486.5 486.5L823.547 291.9" />
            <path opacity="0.5" d="M486.5 486.5L823.547 681.1" />
            <path opacity="0.5" d="M486.5 486.5V875.7" />
            <path opacity="0.5" d="M486.501 486.5L149.454 681.1" />
            <path opacity="0.5" d="M486.501 486.5L149.454 291.9" />
            <path opacity="0.5" d="M486.5 291.9L655.024 389.2" />
            <path opacity="1" d="M486.5 291.9L655.024 583.8" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M486.5 291.9V681.1" />
            <path opacity="1" d="M486.502 291.9L317.979 583.8" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M486.502 291.9L317.979 389.2" />
            <path opacity="0.5" d="M486.5 291.9V97.3" />
            <path opacity="0.5" d="M486.5 291.9H823.547" />
            <path opacity="1" d="M486.5 291.9L823.547 681.1" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M486.5 291.9V875.7" />
            <path opacity="1" d="M486.501 291.9L149.454 681.1" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M486.501 291.9H149.454" />
            <path opacity="0.5" d="M655.024 389.2V583.8" />
            <path opacity="1" d="M655.024 389.2L486.5 681.1" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.026 389.2L317.979 583.8" />
            <path opacity="1" d="M655.026 389.2H317.979" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.024 389.2L486.5 97.3" />
            <path opacity="0.5" d="M655.024 389.2L823.548 291.9" />
            <path opacity="0.5" d="M655.024 389.2L823.548 681.1" />
            <path opacity="1" d="M655.024 389.2L486.5 875.7" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.025 389.2L149.454 681.1" />
            <path opacity="1" d="M655.025 389.2L149.454 291.9" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.024 583.8L486.5 681.1" />
            <path opacity="1" d="M655.026 583.8H317.979" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.026 583.8L317.979 389.2" />
            <path opacity="1" d="M655.024 583.8L486.5 97.3" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.024 583.8L823.548 291.9" />
            <path opacity="0.5" d="M655.024 583.8L823.548 681.1" />
            <path opacity="0.5" d="M655.024 583.8L486.5 875.7" />
            <path opacity="1" d="M655.025 583.8L149.454 681.1" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M655.025 583.8L149.454 291.9" />
            <path opacity="0.5" d="M486.502 681.1L317.979 583.8" />
            <path opacity="1" d="M486.502 681.1L317.979 389.2" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M486.5 681.1V97.3" />
            <path opacity="1" d="M486.5 681.1L823.547 291.9" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M486.5 681.1H823.547" />
            <path opacity="0.5" d="M486.5 681.1V875.7" />
            <path opacity="0.5" d="M486.501 681.1H149.454" />
            <path opacity="1" d="M486.501 681.1L149.454 291.9" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M317.979 583.8V389.2" />
            <path opacity="1" d="M317.979 583.8L486.502 97.3" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M317.979 583.8L823.549 291.9" />
            <path opacity="1" d="M317.979 583.8L823.549 681.1" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M317.979 583.8L486.502 875.7" />
            <path opacity="0.5" d="M317.978 583.8L149.454 681.1" />
            <path opacity="0.5" d="M317.978 583.8L149.454 291.9" />
            <path opacity="0.5" d="M317.979 389.2L486.502 97.3" />
            <path opacity="1" d="M317.979 389.2L823.549 291.9" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M317.979 389.2L823.549 681.1" />
            <path opacity="1" d="M317.979 389.2L486.502 875.7" strokeDasharray="4.86 4.86" />
            <path opacity="0.5" d="M317.978 389.2L149.454 681.1" />
            <path opacity="0.5" d="M317.978 389.2L149.454 291.9" />
            <path opacity="0.5" d="M486.5 97.3L823.547 291.9" />
            <path opacity="0.5" d="M486.5 97.3L823.547 681.1" />
            <path opacity="0.5" d="M486.5 97.3V875.7" />
            <path opacity="0.5" d="M486.501 97.3L149.454 681.1" />
            <path opacity="0.5" d="M486.501 97.3L149.454 291.9" />
            <path opacity="0.5" d="M823.549 291.9V681.1" />
            <path opacity="0.5" d="M823.547 291.9L486.5 875.7" />
            <path opacity="0.2" d="M823.548 291.9L149.454 681.1" />
            <path opacity="0.5" d="M823.548 291.9H149.454" />
            <path opacity="0.5" d="M823.547 681.1L486.5 875.7" />
            <path opacity="0.5" d="M823.548 681.1H149.454" />
            <path opacity="0.5" d="M823.548 681.1L149.454 291.9" />
            <path opacity="0.5" d="M486.501 875.7L149.454 681.1" />
            <path opacity="0.5" d="M486.501 875.7L149.454 291.9" />
            <path opacity="0.5" d="M149.454 681.1V291.9" />
          </g>
          <path
            d="M486.155 109.145C493.249 109.145 499 103.394 499 96.3C499 89.2058 493.249 83.4548 486.155 83.4548C479.061 83.4548 473.31 89.2058 473.31 96.3C473.31 103.394 479.061 109.145 486.155 109.145Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M149.155 304.145C156.249 304.145 162 298.394 162 291.3C162 284.206 156.249 278.455 149.155 278.455C142.061 278.455 136.31 284.206 136.31 291.3C136.31 298.394 142.061 304.145 149.155 304.145Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M149.155 694.145C156.249 694.145 162 688.394 162 681.3C162 674.206 156.249 668.455 149.155 668.455C142.061 668.455 136.31 674.206 136.31 681.3C136.31 688.394 142.061 694.145 149.155 694.145Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M486.155 888.145C493.249 888.145 499 882.394 499 875.3C499 868.206 493.249 862.455 486.155 862.455C479.061 862.455 473.31 868.206 473.31 875.3C473.31 882.394 479.061 888.145 486.155 888.145Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M823.155 694.145C830.249 694.145 836 688.394 836 681.3C836 674.206 830.249 668.455 823.155 668.455C816.061 668.455 810.31 674.206 810.31 681.3C810.31 688.394 816.061 694.145 823.155 694.145Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M823.155 305.145C830.249 305.145 836 299.394 836 292.3C836 285.206 830.249 279.455 823.155 279.455C816.061 279.455 810.31 285.206 810.31 292.3C810.31 299.394 816.061 305.145 823.155 305.145Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>

        {/* Animated light beams drawn on selected edges (always visible) */}
        <g>
          {/* Diagonal down-right */}
          <motion.path
            d="M149.454 291.9L823.548 681.1"
            stroke={`url(#${beamId})`}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ strokeDasharray: '120 1600', strokeDashoffset: 1600, opacity: 0.9 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 6, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
          />
          {/* Diagonal up-right */}
          <motion.path
            d="M149.454 681.1L823.547 291.9"
            stroke={`url(#${beamId2})`}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ strokeDasharray: '120 1600', strokeDashoffset: 0, opacity: 0.9 }}
            animate={{ strokeDashoffset: -1600 }}
            transition={{ duration: 6, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
          />
          {/* Center vertical */}
          <motion.path
            d="M486.5 97.3L486.5 875.7"
            stroke={`url(#${beamId})`}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ strokeDasharray: '100 1400', strokeDashoffset: 1400, opacity: 0.75 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 7, delay: 0.5, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
          />
          {/* Top horizontal */}
          <motion.path
            d="M149.454 291.9L823.547 291.9"
            stroke={`url(#${beamId2})`}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ strokeDasharray: '100 1400', strokeDashoffset: 0, opacity: 0.75 }}
            animate={{ strokeDashoffset: -1400 }}
            transition={{ duration: 7, delay: 0.8, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
          />
          {/* Bottom horizontal */}
          <motion.path
            d="M149.454 681.1L823.548 681.1"
            stroke={`url(#${beamId})`}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ strokeDasharray: '100 1400', strokeDashoffset: 1400, opacity: 0.75 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 7, delay: 1.1, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
          />
        </g>

        {/* Layer 2: Highlight SVG (vibrant purple with glow) - Revealed by the mask */}
        <g mask="url(#cursor-mask)" filter="url(#glow)">
          <g stroke="#8B5CF6" strokeWidth="1.2">
            <g opacity="1">
              <path opacity="140" d="M486.5 486.5V291.9" />
              <path opacity="140" d="M486.5 486.5L655.024 389.2" />
              <path opacity="140" d="M486.5 486.5L655.024 583.8" />
              <path opacity="140" d="M486.5 486.5V681.1" />
              <path opacity="140" d="M486.502 486.5L317.979 583.8" />
              <path opacity="140" d="M486.502 486.5L317.979 389.2" />
              <path opacity="140" d="M486.5 486.5V97.3" />
              <path opacity="140" d="M486.5 486.5L823.547 291.9" />
              <path opacity="140" d="M486.5 486.5L823.547 681.1" />
              <path opacity="140" d="M486.5 486.5V875.7" />
              <path opacity="140" d="M486.501 486.5L149.454 681.1" />
              <path opacity="140" d="M486.501 486.5L149.454 291.9" />
              <path opacity="140" d="M486.5 291.9L655.024 389.2" />
              <path opacity="140" d="M486.5 291.9L655.024 583.8" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M486.5 291.9V681.1" />
              <path opacity="140" d="M486.502 291.9L317.979 583.8" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M486.502 291.9L317.979 389.2" />
              <path opacity="140" d="M486.5 291.9V97.3" />
              <path opacity="140" d="M486.5 291.9H823.547" />
              <path opacity="140" d="M486.5 291.9L823.547 681.1" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M486.5 291.9V875.7" />
              <path opacity="140" d="M486.501 291.9L149.454 681.1" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M486.501 291.9H149.454" />
              <path opacity="140" d="M655.024 389.2V583.8" />
              <path opacity="140" d="M655.024 389.2L486.5 681.1" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.026 389.2L317.979 583.8" />
              <path opacity="140" d="M655.026 389.2H317.979" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.024 389.2L486.5 97.3" />
              <path opacity="140" d="M655.024 389.2L823.548 291.9" />
              <path opacity="140" d="M655.024 389.2L823.548 681.1" />
              <path opacity="140" d="M655.024 389.2L486.5 875.7" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.025 389.2L149.454 681.1" />
              <path opacity="140" d="M655.025 389.2L149.454 291.9" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.024 583.8L486.5 681.1" />
              <path opacity="140" d="M655.026 583.8H317.979" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.026 583.8L317.979 389.2" />
              <path opacity="140" d="M655.024 583.8L486.5 97.3" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.024 583.8L823.548 291.9" />
              <path opacity="140" d="M655.024 583.8L823.548 681.1" />
              <path opacity="140" d="M655.024 583.8L486.5 875.7" />
              <path opacity="140" d="M655.025 583.8L149.454 681.1" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M655.025 583.8L149.454 291.9" />
              <path opacity="140" d="M486.502 681.1L317.979 583.8" />
              <path opacity="140" d="M486.502 681.1L317.979 389.2" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M486.5 681.1V97.3" />
              <path opacity="140" d="M486.5 681.1L823.547 291.9" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M486.5 681.1H823.547" />
              <path opacity="140" d="M486.5 681.1V875.7" />
              <path opacity="140" d="M486.501 681.1H149.454" />
              <path opacity="140" d="M486.501 681.1L149.454 291.9" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M317.979 583.8V389.2" />
              <path opacity="140" d="M317.979 583.8L486.502 97.3" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M317.979 583.8L823.549 291.9" />
              <path opacity="140" d="M317.979 583.8L823.549 681.1" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M317.979 583.8L486.502 875.7" />
              <path opacity="140" d="M317.978 583.8L149.454 681.1" />
              <path opacity="140" d="M317.978 583.8L149.454 291.9" />
              <path opacity="140" d="M317.979 389.2L486.502 97.3" />
              <path opacity="140" d="M317.979 389.2L823.549 291.9" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M317.979 389.2L823.549 681.1" />
              <path opacity="140" d="M317.979 389.2L486.502 875.7" strokeDasharray="4.86 4.86" />
              <path opacity="140" d="M317.978 389.2L149.454 681.1" />
              <path opacity="140" d="M317.978 389.2L149.454 291.9" />
              <path opacity="140" d="M486.5 97.3L823.547 291.9" />
              <path opacity="140" d="M486.5 97.3L823.547 681.1" />
              <path opacity="140" d="M486.5 97.3V875.7" />
              <path opacity="140" d="M486.501 97.3L149.454 681.1" />
              <path opacity="140" d="M486.501 97.3L149.454 291.9" />
              <path opacity="140" d="M823.549 291.9V681.1" />
              <path opacity="140" d="M823.547 291.9L486.5 875.7" />
              <path opacity="14042" d="M823.548 291.9L149.454 681.1" />
              <path opacity="140" d="M823.548 291.9H149.454" />
              <path opacity="140" d="M823.547 681.1L486.5 875.7" />
              <path opacity="140" d="M823.548 681.1H149.454" />
              <path opacity="140" d="M823.548 681.1L149.454 291.9" />
              <path opacity="140" d="M486.501 875.7L149.454 681.1" />
              <path opacity="140" d="M486.501 875.7L149.454 291.9" />
              <path opacity="140" d="M149.454 681.1V291.9" />
            </g>
            <path
              d="M486.155 109.145C493.249 109.145 499 103.394 499 96.3C499 89.2058 493.249 83.4548 486.155 83.4548C479.061 83.4548 473.31 89.2058 473.31 96.3C473.31 103.394 479.061 109.145 486.155 109.145Z"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              strokeWidth="2.1"
            />
            <path
              d="M149.155 304.145C156.249 304.145 162 298.394 162 291.3C162 284.206 156.249 278.455 149.155 278.455C142.061 278.455 136.31 284.206 136.31 291.3C136.31 298.394 142.061 304.145 149.155 304.145Z"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              strokeWidth="2.1"
            />
            <path
              d="M149.155 694.145C156.249 694.145 162 688.394 162 681.3C162 674.206 156.249 668.455 149.155 668.455C142.061 668.455 136.31 674.206 136.31 681.3C136.31 688.394 142.061 694.145 149.155 694.145Z"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              strokeWidth="2.1"
            />
            <path
              d="M486.155 888.145C493.249 888.145 499 882.394 499 875.3C499 868.206 493.249 862.455 486.155 862.455C479.061 862.455 473.31 868.206 473.31 875.3C473.31 882.394 479.061 888.145 486.155 888.145Z"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              strokeWidth="2.1"
            />
            <path
              d="M823.155 694.145C830.249 694.145 836 688.394 836 681.3C836 674.206 830.249 668.455 823.155 668.455C816.061 668.455 810.31 674.206 810.31 681.3C810.31 688.394 816.061 694.145 823.155 694.145Z"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              strokeWidth="2.1"
            />
            <path
              d="M823.155 305.145C830.249 305.145 836 299.394 836 292.3C836 285.206 830.249 279.455 823.155 279.455C816.061 279.455 810.31 285.206 810.31 292.3C810.31 299.394 816.061 305.145 823.155 305.145Z"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              strokeWidth="2.1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const Hero = () => {
  // useRef provides a direct reference to the hero section DOM element.
  const heroRef = useRef<HTMLElement>(null);

  // useEffect sets up the event listener for mouse movement.
  // It runs only once when the component mounts.
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const cursorCircle = heroElement.querySelector('#cursor-circle');
    if (!cursorCircle) return;

    let animationFrameId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const svg = heroElement.querySelector('svg');
        if (!svg) return;

        const rect = svg.getBoundingClientRect();

        // Map screen coordinates to the SVG's 973x973 viewBox
        const x = (e.clientX - rect.left) * (973 / rect.width);
        const y = (e.clientY - rect.top) * (973 / rect.height);

        // Update the mask's circle position
        cursorCircle.setAttribute('cx', x.toString());
        cursorCircle.setAttribute('cy', y.toString());
      });
    };

    heroElement.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Calculate main height based on container-scroll-card height
  useEffect(() => {
    const calculateMainHeight = () => {
      const containerScrollCard = document.querySelector('.container-scroll-card');
      const mainElement = heroRef.current;

      if (containerScrollCard && mainElement) {
        const cardHeight = containerScrollCard.getBoundingClientRect().height;
        const contentPadding = window.innerHeight * 0.1; // 10vh
        const mainHeight = `calc(80vh + ${cardHeight}px + ${contentPadding}px)`;
        mainElement.style.height = mainHeight;
      }
    };

    // Calculate on mount and resize
    calculateMainHeight();
    window.addEventListener('resize', calculateMainHeight);

    return () => {
      window.removeEventListener('resize', calculateMainHeight);
    };
  }, []);

  return (
    <div className="bg-[#0a090c] text-[#E0E0E0]">
      <main className="hero-gradient hero-pattern" ref={heroRef}>
        <MetatronCubeSVG />
        <div className="hero-content">
          <section className="container mx-auto px-4 sm:px-10 md:px-6 h-screen flex items-center justify-center text-center">
            <motion.div
              className="max-w-4xl mx-auto content"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
              }}
            >
              <motion.p
                className="text-lg font-semibold text-[#8F8EDF] mb-2"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
                }}
              >
                A RENAISSANCE IN GLOBAL RESEARCH
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                From Months of Work to Moments of Insight
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                ScholarSpark is the AI-native platform that unifies the entire research workflow,
                turning 6 months of fragmented work into 6 weeks of focused discovery.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                <GradientButton asChild className="py-4 px-10 text-lg">
                  <a href="/pdf/pitchDeck.pdf" download="ScholarSpark-Investor-Deck.pdf">
                    Request Investor Deck
                  </a>
                </GradientButton>
              </motion.div>
              <motion.div
                className="mt-12 text-sm text-gray-400"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
              >
                Founded by Dr. Pouya Ataei, PhD & Validated by 161+ Researchers
              </motion.div>
              <div style={{ height: '100px', position: 'relative' }}>
                <div className="hero-device-frame hidden lg:block">
                  <ContainerScroll>
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-sm opacity-80">ScholarSpark</div>
                      </div>
                    </div>
                  </ContainerScroll>
                </div>
              </div>
            </motion.div>

            {/* Empty div with 100px height - sibling of the content div */}
          </section>

          {/* Device Frame */}
        </div>
      </main>
    </div>
  );
};

export default Hero;
