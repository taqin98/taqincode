const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/@theme {[\s\S]*?}/, \`@theme {
  --color-bg: var(--theme-color-bg);
  --color-bg2: var(--theme-color-bg2);
  --color-card: var(--theme-color-card);
  --color-border-main: var(--theme-color-border-main);
  --color-border2: var(--theme-color-border2);
  --color-accent: var(--theme-color-accent);
  --color-accent2: var(--theme-color-accent2);
  --color-acc-dim: var(--theme-color-acc-dim);
  --color-acc-line: var(--theme-color-acc-line);
  --color-text-main: var(--theme-color-text-main);
  --color-text2: var(--theme-color-text2);
  --color-text3: var(--theme-color-text3);
  --color-green-custom: var(--theme-color-green-custom);

  --font-serif: 'Fraunces', serif;
  --font-sans: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;

  --animate-fade-up: fadeUp 0.7s ease forwards;
  --animate-fade-left: fadeLeft 0.8s ease forwards;
  --animate-pulse-slow: pulse 1.8s ease infinite;
  --animate-ticker: ticker 30s linear infinite;

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.7); }
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
}\`);

css = css.replace(/:root {[\s\S]*?}/, \`:root {
  --theme-color-bg: #08090e;
  --theme-color-bg2: #0e0f16;
  --theme-color-card: #111219;
  --theme-color-border-main: #1c1d2a;
  --theme-color-border2: #252636;
  --theme-color-accent: #f0a500;
  --theme-color-accent2: #ffbd3e;
  --theme-color-acc-dim: rgba(240, 165, 0, 0.12);
  --theme-color-acc-line: rgba(240, 165, 0, 0.3);
  --theme-color-text-main: #f0ede6;
  --theme-color-text2: #9a99aa;
  --theme-color-text3: #5a596a;
  --theme-color-green-custom: #4ade80;
  --background: var(--theme-color-bg);
  --foreground: var(--theme-color-text-main);
}

:root[data-theme='light'] {
  --theme-color-bg: #fdfbf7;
  --theme-color-bg2: #f4f0e6;
  --theme-color-card: #ffffff;
  --theme-color-border-main: #e5e0d8;
  --theme-color-border2: #d6cfc4;
  --theme-color-accent: #df9000;
  --theme-color-accent2: #f0a500;
  --theme-color-acc-dim: rgba(223, 144, 0, 0.12);
  --theme-color-acc-line: rgba(223, 144, 0, 0.3);
  --theme-color-text-main: #1a1a1a;
  --theme-color-text2: #5c5c5c;
  --theme-color-text3: #8a8a8a;
  --theme-color-green-custom: #16a34a;
  --background: var(--theme-color-bg);
  --foreground: var(--theme-color-text-main);
}\`);

// change hardcoded var() references in CSS (e.g. background-color: var(--background) is fine, but we also had color: var(--foreground))
// Actually those are fine.

fs.writeFileSync(cssPath, css);

const themeContextCode = \`"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
\`;

fs.writeFileSync(path.join(__dirname, 'src', 'context', 'ThemeContext.tsx'), themeContextCode);
console.log('Created ThemeContext and updated CSS');
