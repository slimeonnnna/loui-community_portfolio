"use client";
import { createContext, useContext, useState, useCallback, useMemo } from "react";

const SECTION_ORDER = ["home", "work", "about", "contact"];

interface ViewContextValue {
  sectionInView: string;
  setSectionInView: (section: string, isInView: boolean) => void;
}

const ViewContext = createContext<ViewContextValue | undefined>(undefined);

function ViewProvider({ children }: { children: React.ReactNode }) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["home"]));

  const setSectionInView = useCallback((section: string, isInView: boolean) => {
    setVisibleSections(prev => {
      const next = new Set(prev);
      if (isInView) {
        next.add(section);
      } else {
        next.delete(section);
      }
      return next;
    });
  }, []);

  // Compute the deepest (last in page order) visible section
  const sectionInView = useMemo(() => {
    for (let i = SECTION_ORDER.length - 1; i >= 0; i--) {
      if (visibleSections.has(SECTION_ORDER[i])) {
        return SECTION_ORDER[i];
      }
    }
    return "home";
  }, [visibleSections]);

  return (
    <ViewContext.Provider value={{ sectionInView, setSectionInView }}>
      {children}
    </ViewContext.Provider>
  );
}

function useView() {
  const context = useContext(ViewContext);

  if (context === undefined)
    throw new Error("ViewContext was used outside of ViewProvider");

  return context;
}

export { ViewProvider, useView };