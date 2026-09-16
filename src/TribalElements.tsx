import React from 'react';

export const TribalZigZag = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="5,15 20,5 35,15 50,5 65,15 80,5 95,15" />
  </svg>
);

export const TribalArrows = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="20,5 5,20 20,35" />
    <polyline points="35,5 20,20 35,35" />
    <line x1="45" y1="20" x2="55" y2="20" />
    <circle cx="50" cy="20" r="3" fill="currentColor" />
    <polyline points="65,5 80,20 65,35" />
    <polyline points="80,5 95,20 80,35" />
  </svg>
);

export const TribalSpiral = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M 25 25 m 0 -5 a 5 5 0 1 1 -5 5 a 10 10 0 1 0 10 -10 a 15 15 0 1 1 -15 15 a 20 20 0 1 0 20 -20" />
    <line x1="10" y1="40" x2="5" y2="45" />
    <line x1="25" y1="45" x2="25" y2="50" />
    <line x1="40" y1="40" x2="45" y2="45" />
  </svg>
);

export const TribalStickFigure = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="20" cy="15" r="8" />
    <line x1="20" y1="23" x2="20" y2="70" />
    <line x1="5" y1="40" x2="35" y2="40" />
    <line x1="5" y1="40" x2="5" y2="30" />
    <line x1="35" y1="40" x2="35" y2="30" />
  </svg>
);

export const TribalWave = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M 5 15 Q 15 5 25 15 T 45 15 T 65 15 T 85 15 T 95 15" />
  </svg>
);

export const TribalTriangle = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polygon points="25,10 10,40 40,40" />
    <line x1="5" y1="40" x2="45" y2="40" />
    <line x1="20" y1="5" x2="30" y2="15" />
    <line x1="30" y1="5" x2="20" y2="15" />
  </svg>
);

export const TribalSun = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="30" cy="30" r="15" />
    <line x1="30" y1="5" x2="30" y2="10" />
    <line x1="30" y1="50" x2="30" y2="55" />
    <line x1="5" y1="30" x2="10" y2="30" />
    <line x1="50" y1="30" x2="55" y2="30" />
    <line x1="12" y1="12" x2="16" y2="16" />
    <line x1="44" y1="44" x2="48" y2="48" />
    <line x1="12" y1="48" x2="16" y2="44" />
    <line x1="48" y1="12" x2="44" y2="16" />
  </svg>
);
