import type { Locale } from "@/lib/locale";

interface NotFoundPageProps {
  locale: Locale;
  messages: Record<string, string>;
}

export function NotFoundPage({ locale, messages }: NotFoundPageProps) {
  return (
    <main className="page not-found-page">
      <div className="not-found-card">
        <div className="not-found-icon">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">{messages.notFoundTitle}</h1>
        <p className="not-found-description">{messages.notFoundDescription}</p>
        <a href={`/${locale}`} className="button not-found-home">
          {messages.notFoundHome}
        </a>
      </div>
    </main>
  );
}
