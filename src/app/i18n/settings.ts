export const fallbackLng = "en";
export const languages = [fallbackLng, "zh-TW"];
export const defaultNS = "translation";

export function getOptions(
  lng: string | undefined = fallbackLng,
  ns: string | string[] | undefined = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
