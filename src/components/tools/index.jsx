import { useTranslation } from "react-i18next";
import Carrosel from "./carossel/carousell";
import { ScrollContainer } from "./styled";

export default function Tools() {
  return (
    <ScrollContainer>
      <Carrosel />
    </ScrollContainer>

  )
}