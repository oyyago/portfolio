import React, { useEffect, useState, useRef } from 'react';
import { ScrollContainer, Ul, Li, LiImg, LiDiv, Button} from './styled';
import tecnologias from './tecnologias';

export default function Home() {
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
    <ScrollContainer>
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
    </ScrollContainer>
  );
}
