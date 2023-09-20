import React, { useEffect, useState, useRef } from 'react';
import { Ul, Li, LiImg, LiDiv, Button, Father } from './styled';
import tecnologias from './tecnologias';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const {t} = useTranslation()
  const [currentPage, setCurrentPage] = useState(1);
  const ulRef = useRef(null);
  const scrollStep = 100;

  useEffect(() => {
    ulRef.current.scrollLeft = ulRef.current.scrollWidth / 2.6;
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
    <Father >
      <h1>{t('tools')}</h1>
      <div style={{display:"flex", flexDirection:"row"}}>
        <Button onClick={handleScrollLeft}>{"<"}</Button>
        <Ul ref={ulRef}>
          {tecnologias.map((tecnologia, index) => (
            <Li key={index}>
              <LiDiv>
                <LiImg src={tecnologia.caminho} alt={tecnologia.titulo}
                />
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
