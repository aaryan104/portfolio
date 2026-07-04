import React from 'react';
import { useStore } from '../store/useStore';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { GitHubCalendar } from 'react-github-calendar';
import { SiGithub } from 'react-icons/si';
import { GitBranch, Users, Code, Award, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../content/resume-data';

const CalendarComponent = GitHubCalendar as any;

const PROFILE_LINKS = [
  { name: 'GitHub', url: RESUME_DATA.personalInfo.githubUrl, icon: SiGithub, color: 'hover:text-white hover:border-white/30' },
  { name: 'LinkedIn', url: RESUME_DATA.personalInfo.linkedinUrl, icon: Linkedin, color: 'hover:text-blue-400 hover:border-blue-400/30' },
];

export const GitHubStats: React.FC = () => {
  const { setCursorHovered } = useStore();
  const { data: githubData, isLoading, isError } = useGitHubStats();

  const customTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  // If loading, error, or missing real data - hide the section entirely
  if (isLoading || isError || !githubData) {
    return null;
  }

  return (
    <section id="stats" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-cyan font-mono tracking-wider font-semibold uppercase text-xs block">
          Activity Monitor
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Coding Stats & <GradientText from="from-accent-cyan" to="to-accent-blue">Profiles</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* GitHub Stats Panel */}
        <div className="lg:col-span-8 space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-2 pl-2">
            <SiGithub className="text-white w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 border border-glass-border hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Contributions</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{githubData.contributions}</span>
                <Code className="text-accent-blue w-5 h-5 opacity-60" />
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 border border-glass-border hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Repositories</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{githubData.repos}</span>
                <GitBranch className="text-accent-purple w-5 h-5 opacity-60" />
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 border border-glass-border hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Followers</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{githubData.followers}</span>
                <Users className="text-accent-cyan w-5 h-5 opacity-60" />
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 border border-glass-border hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Top Language</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg md:text-xl font-bold text-white tracking-wide truncate">{githubData.topLanguage || 'None'}</span>
                <Award className="text-accent-purple w-5 h-5 opacity-60" />
              </div>
            </GlassCard>
          </div>

          {/* GitHub Heatmap Grid Card */}
          <GlassCard className="p-6 overflow-x-auto border border-glass-border bg-glass-bg/10 flex justify-center" hoverEffect={false}>
            <div className="min-w-[640px] text-gray-300 font-sans">
              <CalendarComponent
                username={RESUME_DATA.personalInfo.github}
                theme={customTheme}
                hideColorLegend
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </GlassCard>
        </div>

        {/* Verified Social Handles Box */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-2 pl-2">
            <Users className="text-white w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">External Profiles</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {PROFILE_LINKS.map((link, index) => {
              const IconComp = link.icon;
              return (
                <GlassCard
                  key={index}
                  onClick={() => window.open(link.url, '_blank')}
                  className={`p-5 flex items-center justify-between border border-glass-border bg-glass-bg/10 transition-all ${link.color}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-glass-bg border border-glass-border rounded-xl">
                      <IconComp size={20} />
                    </div>
                    <span 
                      onMouseEnter={() => setCursorHovered(true)} 
                      onMouseLeave={() => setCursorHovered(false)}
                      className="text-base font-bold text-white"
                    >
                      {link.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
                    Visit
                  </span>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default GitHubStats;
