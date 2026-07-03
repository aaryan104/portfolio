import React from 'react';
import { useStore } from '../store/useStore';
import { useGitHubStats, useLeetCodeStats } from '../hooks/useGitHubStats';
import { GlassCard } from '../components/GlassCard';
import { GradientText } from '../components/GradientText';
import { GitHubCalendar } from 'react-github-calendar';
import { SiGithub, SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { GitBranch, Users, Code, Award, Linkedin } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

const CalendarComponent = GitHubCalendar as any;

const PROFILE_LINKS = [
  { name: 'GitHub', url: 'https://github.com/AaryanMangukiya', icon: SiGithub, color: 'hover:text-white hover:border-white/30' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/aaryanmangukiya', icon: Linkedin, color: 'hover:text-blue-400 hover:border-blue-400/30' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/AaryanMangukiya/', icon: SiLeetcode, color: 'hover:text-yellow-500 hover:border-yellow-500/30' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/AaryanMangukiya', icon: SiHackerrank, color: 'hover:text-green-400 hover:border-green-400/30' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/aaryan_dev', icon: SiCodechef, color: 'hover:text-amber-600 hover:border-amber-600/30' },
  { name: 'GFG', url: 'https://www.geeksforgeeks.org/user/aaryandeveloper/', icon: SiGeeksforgeeks, color: 'hover:text-emerald-500 hover:border-emerald-500/30' },
];

export const GitHubStats: React.FC = () => {
  const { setCursorHovered } = useStore();
  const { data: githubData } = useGitHubStats();
  const { data: leetcodeData } = useLeetCodeStats();

  const customTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section id="stats" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="space-y-4 text-center md:text-left mb-16">
        <span className="text-accent-cyan font-mono tracking-wider font-semibold uppercase text-sm block">
          Activity Monitor
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Coding Stats & <GradientText from="from-accent-cyan" to="to-accent-blue">Profiles</GradientText>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* GitHub Stats Panel */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-2 pl-2">
            <SiGithub className="text-white w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Contributions</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{githubData?.contributions}</span>
                <Code className="text-accent-blue w-5 h-5 opacity-60" />
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Repositories</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{githubData?.repos}</span>
                <GitBranch className="text-accent-purple w-5 h-5 opacity-60" />
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Followers</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">{githubData?.followers}</span>
                <Users className="text-accent-cyan w-5 h-5 opacity-60" />
              </div>
            </GlassCard>

            <GlassCard className="p-4 flex flex-col justify-between h-28 bg-glass-bg/10 hover:border-accent-blue/30" hoverEffect={false}>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider block">Top Language</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg md:text-xl font-bold text-white tracking-wide truncate">{githubData?.topLanguage}</span>
                <Award className="text-accent-purple w-5 h-5 opacity-60" />
              </div>
            </GlassCard>
          </div>

          {/* GitHub Heatmap Grid Card */}
          <GlassCard className="p-6 overflow-x-auto border border-glass-border bg-glass-bg/10 flex justify-center" hoverEffect={false}>
            <div className="min-w-[640px] text-gray-300 font-sans">
              <CalendarComponent
                username="AaryanMangukiya"
                theme={customTheme}
                hideColorLegend
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </GlassCard>
        </div>

        {/* LeetCode Stats Panel */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-2 pl-2">
            <SiLeetcode className="text-yellow-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">LeetCode Metrics</h3>
          </div>

          <GlassCard className="p-6 border border-glass-border bg-glass-bg/10 space-y-6" hoverEffect={false}>
            <div className="flex items-center justify-between border-b border-glass-border pb-4">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block">Global Ranking</span>
                <span className="text-2xl font-extrabold text-white font-mono mt-1 block">
                  {leetcodeData?.ranking.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500 uppercase tracking-wider block">Acceptance Rate</span>
                <span className="text-2xl font-extrabold text-accent-cyan font-mono mt-1 block">
                  {leetcodeData?.acceptanceRate}%
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-emerald-400">Easy Solved</span>
                  <span className="text-white">{leetcodeData?.easySolved}</span>
                </div>
                <div className="h-2 w-full bg-background-base rounded-full overflow-hidden border border-glass-border">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${((leetcodeData?.easySolved ?? 0) / (leetcodeData?.totalSolved ?? 1)) * 100}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-amber-400">Medium Solved</span>
                  <span className="text-white">{leetcodeData?.mediumSolved}</span>
                </div>
                <div className="h-2 w-full bg-background-base rounded-full overflow-hidden border border-glass-border">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${((leetcodeData?.mediumSolved ?? 0) / (leetcodeData?.totalSolved ?? 1)) * 100}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-rose-400">Hard Solved</span>
                  <span className="text-white">{leetcodeData?.hardSolved}</span>
                </div>
                <div className="h-2 w-full bg-background-base rounded-full overflow-hidden border border-glass-border">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: `${((leetcodeData?.hardSolved ?? 0) / (leetcodeData?.totalSolved ?? 1)) * 100}%` }} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-glass-border">
              <span className="text-sm font-bold text-white">Total Solved</span>
              <span className="text-lg font-extrabold text-accent-purple font-mono">{leetcodeData?.totalSolved}</span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Profile Links Grid Card */}
      <GlassCard className="p-6 border border-glass-border bg-glass-bg/10" hoverEffect={false}>
        <h3 className="text-lg font-bold text-white mb-6 text-center md:text-left pl-2">Additional Coding & Professional Profiles</h3>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {PROFILE_LINKS.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <MagneticButton
                key={index}
                onClick={() => window.open(profile.url, '_blank')}
                className={`px-5 py-3 bg-glass-bg border border-glass-border rounded-xl-16 text-gray-300 font-medium transition-all ${profile.color} flex items-center space-x-2`}
              >
                <span onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="flex items-center space-x-2">
                  <Icon size={18} />
                  <span>{profile.name}</span>
                </span>
              </MagneticButton>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
};
