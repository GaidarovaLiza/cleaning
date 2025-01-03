import { createContext, RefObject } from 'react';

export interface ScrollContextType {
  aboutUsInfoRef: RefObject<HTMLDivElement>;
  cleaningInfoRef: RefObject<HTMLDivElement>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);
