/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          base: "#050505",
          elevated: "#0A0A0F",
        },
        accent: {
          blue: {
            DEFAULT: "#3B82F6",
            light: "#60A5FA",
          },
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "Clash Display", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'lg-12': '12px',
        'xl-16': '16px',
        '2xl-24': '24px',
        '3xl-32': '32px',
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.25)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.25)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
