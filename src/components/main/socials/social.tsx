import { Father, Img } from "./social.styled";
import zap from '../../../assets/wpp.svg';
import linkedin from '../../../assets/linkedin.png';
import github from '../../../assets/github.svg';
import email from '../../../assets/email.svg';

export function Social() {
    return (
        <section>
            <Father>
                <a href="https://www.linkedin.com/in/yago-de-sousa-6b6b8a229/" target='_blank'><Img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/oyyago" target='_blank'><Img src={github} alt="github" /></a>
                <a href="https://api.whatsapp.com/send/?phone=5567998195198&text=Ol%C3%A1&type=phone_number&app_absent=0" target='_blank'><Img src={zap} alt="WhatsApp" /></a>
                <a href="mailto:yyagoaraujo@gmail.com?subject=Ola !!!&body=Oi%20Yago%20..." target='_blank'><Img src={email} alt="email" />  </a>
            </Father>
        </section>
    );
}
