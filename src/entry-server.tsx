import { renderToString } from "react-dom/server";

import { App } from "./app";
import { defaultLocale, locales } from "./lib/locale";

export { locales, defaultLocale };

export function render(path: string) {
  return renderToString(<App path={path} />);
}
