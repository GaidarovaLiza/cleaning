import { createContext, RefObject } from 'react';

export interface ScrollContextType {
  aboutUsInfoRef: RefObject<HTMLDivElement>;
  cliningInfoRef: RefObject<HTMLDivElement>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);
