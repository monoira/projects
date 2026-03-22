import { createContext, useContext, ReactNode } from "react";
import { amazonUrls } from "../../constants/amazonUrls";

interface AmazonUrlContextType {
  urls: typeof amazonUrls;
}

const AmazonUrlContext = createContext<AmazonUrlContextType | undefined>(
  undefined,
);

export function AmazonUrlProvider({ children }: { children: ReactNode }) {
  return (
    <AmazonUrlContext.Provider value={{ urls: amazonUrls }}>
      {children}
    </AmazonUrlContext.Provider>
  );
}

export function useAmazonUrls() {
  const context = useContext(AmazonUrlContext);
  if (!context) {
    throw new Error("useAmazonUrls must be used within AmazonUrlProvider");
  }
  return context.urls;
}
