export interface ModuleStat {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface TimelineItem {
  time: string;
  text: string;
}

export interface TierItem {
  label: string;
  text: string;
}

export interface StepItem {
  text: string;
}

export interface ModuleSection {
  title: string;
  paragraphs?: string[];
  checklist?: string[];
  comparisons?: string[];
  timeline?: TimelineItem[];
  steps?: string[];
  tiers?: TierItem[];
  audioSteps?: StepItem[];
  bullets?: TierItem[];
  showChart?:
    | 'retention'
    | 'investment'
    | 'signal-weight'
    | 'brand-recall'
    | 'engagement'
    | 'session-frequency'
    | 'platform-roi'
    | 'emotional-journey'
    | 'hook-performance'
    | 'discovery-channel'
    | 'weekly-growth';
  animatedTimeline?: boolean;
}

export interface ModuleDetailContent {
  heroDescription: string;
  stats: ModuleStat[];
  objectives: string[];
  sections: ModuleSection[];
  implementationDescription?: string;
  implementationSteps?: string[];
}

export type ModuleDetailsMap = Record<number, ModuleDetailContent>;
