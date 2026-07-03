import { create } from 'zustand';

interface AppState {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  cursorHovered: boolean;
  setCursorHovered: (hovered: boolean) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  cursorHovered: false,
  setCursorHovered: (hovered) => set({ cursorHovered: hovered }),
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
}));
