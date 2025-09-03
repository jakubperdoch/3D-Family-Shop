// indexy pre výpočet ceny
export const materialIndex: Record<string, number> = {
  optional: 1.0,
  pla: 1.0,
  petg: 1.2,
  abs: 1.3,
  resin: 1.5,
  nylon: 1.4,
};

export const strengthIndex: Record<string, number> = {
  decoration: 0.9,
  "light-use": 1.0,
  "daily-use": 1.1,
  mechanical: 1.3,
  extreme: 1.5,
};

export const qualityIndex: Record<string, number> = {
  fast: 0.9,
  standard: 1.0,
  high: 1.2,
  premium: 1.4,
};

export const infillIndex: Record<string, number> = {
  low: 0.8,
  medium: 1.0,
  high: 1.2,
};
