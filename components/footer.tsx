import { type Locale, type Messages } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
  messages: Messages;
}

export function Footer({ lang, messages }: FooterProps) {
  const isDefaultLang = lang === "zh";
  const basePath = isDefaultLang ? "" : `/${lang}`;
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {messages.footer.copyright}
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/nxtcorex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              GitHub
            </a>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              京ICP备2025138063号-2
            </a>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402056544"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <img
                src="/备案图标.png"
                alt=""
                className="h-4 w-4"
              />
              京公网安备11011402056544号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}