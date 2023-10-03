import React from "react";
import { useTranslation } from "react-i18next";
import brasil from '../../assets/br.png';
import english from '../../assets/uk.png';
import espanish from '../../assets/es.png';

interface FlagsSwitcher {
}

const FlagsSwitcher: React.FC<FlagsSwitcher> = () => {
  const {i18n } = useTranslation();

  let res: string;
    console.log(i18n.language)
  switch (i18n.language) {
    case "ptBR":
      res = brasil;
      break;
    case "en":
      res = english;
      break;
    case "sp":
      res = espanish;
      break;
    default:
      res = english;
      break;
  }

  return (
    <img style={{height:"35px", width:"55px", marginRight:"5px"}} src={res} />
  );
}

export default FlagsSwitcher;
