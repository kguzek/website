import { createContext } from "react";

interface NavigateOptions {
  scroll?: boolean;
}

interface RouterContextValue {
  navigate: (to: string, options?: NavigateOptions) => void;
  path: string;
}

export const RouterContext = createContext<RouterContextValue>({
  navigate: () => {},
  path: "/",
});
