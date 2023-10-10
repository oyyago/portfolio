import { Father, Img } from "./social.styled";
import discord from '../../../assets/discord.svg';
import linkedin from '../../../assets/linkedin.png';
import github from '../../../assets/github.svg';
import email from '../../../assets/email.svg';

export function Social() {
    return (
        <section>
            <Father>
                <a href="https://www.linkedin.com/in/oyyago" target='_blank'><Img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/oyyago" target='_blank'><Img src={github} alt="github" /></a>
                <a href="mailto:yyagoaraujo@gmail.com" target='_blank'><Img src={email} alt="email" />  </a>
                <a href="https://discord.gg/fNfz4tfjn9" target='_blank'><Img src={discord} alt="Discord" /></a>
            </Father>
        </section>
    );
}
