import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  height: 200px;
  width: 810px;
  margin: auto;
`;

const Arrow = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  text-align: center;
  font-size: 25px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  color: #228291;
  line-height: 30px;
  margin-top: 85px;
  z-index: 1000;

  &.arrow-left {
    left: 0;
  }

  &.arrow-right {
    right: 0;
  }
`;

const Item = styled.div`
  text-align: center;
  color: white;
  font-size: 40px;
  position: absolute;
  transition: height 1s, width 1s, left 1s, margin-top 1s, line-height 1s, background-color 1s;

  &.level-2 {
    /* Estilos para level-2 */
  }

  &.level-1 {
    /* Estilos para level-1 */
  }

  &.level0 {
    /* Estilos para level0 */
  }

  &.level1 {
    /* Estilos para level1 */
  }

  &.level2 {
    /* Estilos para level2 */
  }

  &.left-enter {
    /* Estilos para left-enter */
  }

  &.left-enter.left-enter-active {
    /* Estilos para left-enter-active */
  }

  &.left-leave {
    /* Estilos para left-leave */
  }

  &.left-leave.left-leave-active {
    /* Estilos para left-leave-active */
  }

  &.right-enter {
    /* Estilos para right-enter */
  }

  &.right-enter.right-enter-active {
    /* Estilos para right-enter-active */
  }

  &.right-leave {
    /* Estilos para right-leave */
  }

  &.right-leave.right-leave-active {
    /* Estilos para right-leave-active */
  }
`;
class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: this.props.items,
        active: this.props.active,
        direction: '',
      };
      this.rightClick = this.moveRight.bind(this);
      this.leftClick = this.moveLeft.bind(this);
    }
  
    generateItems() {
      const items = [];
      for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
        let index = i;
        if (i < 0) {
          index = this.state.items.length + i;
        } else if (i >= this.state.items.length) {
          index = i % this.state.items.length;
        }
        const level = this.state.active - i;
        items.push(
          <CSSTransition key={index} classNames={this.state.direction} timeout={1000}>
            <Item id={this.state.items[index]} level={level}>
              {this.state.items[index]}
            </Item>
          </CSSTransition>
        );
      }
      return items;
    }
  
    moveLeft() {
      const newActive = this.state.active - 1;
      this.setState({
        active: newActive < 0 ? this.state.items.length - 1 : newActive,
        direction: 'left',
      });
    }
  
    moveRight() {
      const newActive = (this.state.active + 1) % this.state.items.length;
      this.setState({
        active: newActive,
        direction: 'right',
      });
    }
  
    render() {
      return (
        <CarouselContainer>
          <Arrow className="arrow arrow-left" onClick={() => this.leftClick()}>
            &lt;
          </Arrow>
          <TransitionGroup>
            {this.generateItems()}
          </TransitionGroup>
          <Arrow className="arrow arrow-right" onClick={() => this.rightClick()}>
            &gt;
          </Arrow>
        </CarouselContainer>
      );
    }
  }
  
  export default Carousel;