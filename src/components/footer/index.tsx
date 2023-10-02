import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.png'
import discord from '../../assets/discord.svg'
import email from '../../assets/email.svg'
import {
  MainFooter,
  Content,
  MainFooterCopy,Links,Img,A,Sub
} from "./style";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t }= useTranslation()


  return (
    <MainFooter className="container">
        <Content>
          <div style={{marginLeft:"40px"}}>
            <h2>Yago de Sousa</h2>
            <p>{t("footer")}</p>
          </div>
          <Sub>
            <h3>SOCIAL</h3>
            <Links><A href="https://github.com/oyyago" target='_blank'><Img src={github}></Img></A>
            <A href="https://discord.gg/fNfz4tfjn9" target='_blank'><Img src={discord}></Img></A>
            <A href="https://www.linkedin.com/in/yago-de-sousa-6b6b8a229/" target='_blank'><Img src={linkedin}></Img></A>
            <A href="mailto:yyagoaraujo@gmail.com?subject=Ola !!!&body=O  i%20Yago%20..." target='_blank'><Img src={email}></Img></A>
            </Links>

          </Sub>
        </Content>

      <MainFooterCopy>
        <p className="by">
          <i className="icon icon-heart-3"></i>
          <a>
            {t("footer2")} 
            Yago
          </a>
        </p>
      </MainFooterCopy>
    </MainFooter>
  );
}