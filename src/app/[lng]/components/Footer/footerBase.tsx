import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { TFunction } from "i18next";

export const FooterBase = ({ t, lng }: { t: TFunction; lng: string }) => {
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans
        i18nKey="languageSwitcher"
        t={t}
        components={{ 1: <strong /> }}
        values={{ lng }}
      >
        {`Switch from <1>{{lng}}</1> to:`}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
