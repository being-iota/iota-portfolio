import { create } from 'zustand';

interface CursorState {
  position: { x: number; y: number };
  variant: 'default' | 'hover' | 'link' | 'text' | 'button';
  visible: boolean;
  text: string;
  updatePosition: (x: number, y: number) => void;
  updateVariant: (variant: 'default' | 'hover' | 'link' | 'text' | 'button') => void;
  updateVisibility: (visible: boolean) => void;
  setText: (text: string) => void;
}

interface ProjectState {
  filter: string;
  setFilter: (filter: string) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  position: { x: 0, y: 0 },
  variant: 'default',
  visible: false,
  text: '',
  updatePosition: (x, y) => set({ position: { x, y } }),
  updateVariant: (variant) => set({ variant }),
  updateVisibility: (visible) => set({ visible }),
  setText: (text) => set({ text }),
}));

export const useProjectStore = create<ProjectState>((set) => ({
  filter: 'All',
  setFilter: (filter) => set({ filter }),
}));