import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { OrbitNode } from './OrbitNode';
import { CentralAvatar } from './CentralAvatar';
import { motion, AnimatePresence } from 'framer-motion';

export const OrbitSystem: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const isHoveringAny = hoveredId !== null;

  // Animation Loop
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Rotate slowly. Pause if hovering any project.
      if (!isHoveringAny) {
        setRotation((prev) => (prev + deltaTime * 0.005) % 360);
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHoveringAny]); // Re-bind when hover state changes to ensure logic updates

  // Calculate radius based on screen size (could be dynamic, simplistic here)
  // For a real app, use a hook for window size.
  const radius = 240; // Distance from center

  // Find details for overlay
  const activeProject = PROJECTS.find(p => p.id === hoveredId);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Orbit Container */}
      <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex-shrink-0">
        
        {/* Orbit Track Ring (Visual) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/5" />
        
        <CentralAvatar />

        {PROJECTS.map((project, index) => {
          // Calculate Angle
          const angleStep = 360 / PROJECTS.length;
          const theta = (angleStep * index + rotation) * (Math.PI / 180); // Convert to radians
          
          const x = radius * Math.cos(theta);
          const y = radius * Math.sin(theta);

          return (
            <OrbitNode
              key={project.id}
              project={project}
              x={x}
              y={y}
              onHover={setHoveredId}
              isHovered={hoveredId === project.id}
              isAnyHovered={isHoveringAny}
            />
          );
        })}
      </div>

      {/* Info Overlay (Bottom) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-12 left-0 right-0 mx-auto max-w-md p-6 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl z-40 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2" style={{ color: activeProject.color }}>
              {activeProject.title}
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              {activeProject.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {activeProject.techStack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};