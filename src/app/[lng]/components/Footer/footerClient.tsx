"use client";

import { FooterBase } from "./footerBase";
import { useTranslation } from "../../../i18n/client";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
