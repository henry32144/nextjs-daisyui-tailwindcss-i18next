import Link from "next/link";
import { useTranslation } from "../i18n";
import { Footer } from "./components/Footer/footer";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <button className="btn btn-primary">Daisy Button</button>
      {/* @ts-expect-error Server Component */}
      <Footer lng={lng} />
    </>
  );
}
