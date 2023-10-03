import { useEffect, useState, useRef } from 'react';
import { Ul, Li, LiImg, LiDiv, Button, Father } from './styled.ts';
import tecnologias from './tecnologias.ts';
import { useTranslation } from 'react-i18next';

interface Tecnologia {
  caminho: string;
  titulo: string;
}

export default function Home() {
  const { t } = useTranslation();
  const [currentPage] = useState<number>(1);
  const ulRef = useRef<HTMLUListElement>(null);
  const scrollStep = 100;

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.scrollLeft = ulRef.current.scrollWidth / 3.9;
    }
  }, [currentPage]);
  
  const handleScrollLeft = () => {
    if (ulRef.current) {
      ulRef.current.scrollLeft -= scrollStep;
    }
  };

  const handleScrollRight = () => {
    if (ulRef.current) {
      ulRef.current.scrollLeft += scrollStep;
    }
  };

  return (
    <Father>
      <h1>{t('tools')}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button onClick={handleScrollLeft}>{"<"}</Button>
        <Ul ref={ulRef}>
          {tecnologias.map((tecnologia: Tecnologia, index: number) => (
            <Li key={index}>
              <LiDiv>
                <LiImg src={tecnologia.caminho} alt={tecnologia.titulo} />
                <span>{tecnologia.titulo}</span>
              </LiDiv>
            </Li>
          ))}
        </Ul>
        <Button onClick={handleScrollRight}>{">"}</Button>
      </div>
    </Father>
  );
}
