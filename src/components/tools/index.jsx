import { useTranslation } from "react-i18next";
import Carrosel from "./carossel/carousell";
import { ScrollContainer } from "./styled";

export default function Tools() {
  const {t} = useTranslation()
  return (
    <ScrollContainer>
      <h1>{t("tools")}</h1>
      <Carrosel />
    </ScrollContainer>
  )
}