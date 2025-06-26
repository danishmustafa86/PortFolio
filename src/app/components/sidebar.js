"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Facebook from "@/app/components/images/facebook.png";
import Twitter from "@/app/components/images/tweet.png";
import Github from "@/app/components/images/github.png";
import Linkedin from "@/app/components/images/linkedin.png";
import Instagram from "@/app/components/images/insta.png";

const Sidebar = () => {
  const [position, setPosition] = useState({ x: 20, y: typeof window !== 'undefined' ? window.innerHeight / 2 - 150 : 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [activeTooltip, setActiveTooltip] = useState('');
  const sidebarRef = useRef(null);

  // Social media links configuration
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/danishmustafa86/',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/danishmustafa86',
      icon: Github,
      hoverColor: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-500/10'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/danishmustafa_786',
      icon: Twitter,
      hoverColor: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/danishmustafa_786/',
      icon: Instagram,
      hoverColor: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/danish.jajja.56',
      icon: Facebook,
      hoverColor: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/10'
    }
  ];

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (e.target.closest('a')) return; // Don't drag when clicking on links
    
    setIsDragging(true);
    const rect = sidebarRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Get current sidebar dimensions
    const sidebarWidth = isExpanded ? 192 : 56; // w-48 = 192px, w-14 = 56px
    const sidebarHeight = 320; // Approximate height

    // Constrain to viewport boundaries with minimal padding
    const minX = -sidebarWidth + 40; // Allow partial hide on left (keep 40px visible)
    const maxX = window.innerWidth - 40; // Allow partial hide on right (keep 40px visible)
    const minY = 0;
    const maxY = window.innerHeight - 60; // Keep at least 60px visible at bottom

    setPosition({
      x: Math.max(minX, Math.min(newX, maxX)),
      y: Math.max(minY, Math.min(newY, maxY))
    });
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const sidebarWidth = isExpanded ? 192 : 56;
      const minX = -sidebarWidth + 40;
      const maxX = window.innerWidth - 40;
      const minY = 0;
      const maxY = window.innerHeight - 60;
      
      setPosition(prev => ({
        x: Math.max(minX, Math.min(prev.x, maxX)),
        y: Math.max(minY, Math.min(prev.y, maxY))
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'
      } ${isExpanded ? 'w-48' : 'w-14'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setActiveTooltip('');
      }}
    >
      {/* Main sidebar container */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header with drag indicator */}
        <div className="p-3 border-b border-slate-700/50 bg-slate-800/50">
          <div className="flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            </div>
          </div>
          {isExpanded && (
            <div className="mt-2 text-center">
              <p className="text-slate-300 text-xs font-medium">Social Links</p>
            </div>
          )}
        </div>

        {/* Social links */}
        <div className="p-2 space-y-1">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex items-center p-2 rounded-xl transition-all duration-300
                text-slate-300 ${link.hoverColor} ${link.bgColor}
                hover:shadow-lg hover:scale-105 active:scale-95
              `}
              onMouseEnter={() => setActiveTooltip(link.name)}
              onMouseLeave={() => setActiveTooltip('')}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-shrink-0">
                <Image 
                  src={link.icon} 
                  alt={link.name} 
                  width={20} 
                  height={20} 
                  className="transition-transform duration-300 group-hover:rotate-6" 
                />
              </div>
              
              {/* Expanded text */}
              <div className={`
                ml-3 overflow-hidden transition-all duration-300
                ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}
              `}>
                <span className="text-sm font-medium whitespace-nowrap">
                  {link.name}
                </span>
              </div>

              {/* Tooltip for collapsed state */}
              {!isExpanded && activeTooltip === link.name && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-10">
                  {link.name}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-900 border-l border-b border-slate-700 rotate-45"></div>
                </div>
              )}

              {/* Hover effect indicator */}
              <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-slate-700/50 bg-slate-800/30">
          <div className="text-center">
            {isExpanded ? (
              <p className="text-xs text-slate-400">Drag to move</p>
            ) : (
              <div className="w-2 h-2 bg-slate-500 rounded-full mx-auto"></div>
            )}
          </div>
        </div>
      </div>

      {/* Drag shadow overlay */}
      {isDragging && (
        <div className="absolute inset-0 bg-blue-500/10 rounded-2xl border-2 border-blue-500/30 pointer-events-none"></div>
      )}
    </div>
  );
};

export default Sidebar;