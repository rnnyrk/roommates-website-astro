import { general, defaultLang } from './general';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in general) return lang as keyof typeof general;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof general) {
  return function t(key: keyof (typeof general)[typeof defaultLang]) {
    return general[lang][key] || general[defaultLang][key];
  };
}
