import React, { Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const MainComponent = styled.div`
  &.page-exit {
    ~ .wipe {
      transform: translateY(100%);
    }
  }

  &.page-exit-active {
    ~ .wipe {
      transform: translateY(0);
      transition: transform 1000ms ease;
    }
  }
  &.page-enter-done {
    ~ .wipe {
      transform: translateY(-100%);
      transition: transform 1000ms ease;
    }
  }
`;

const Wipe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #aaa;
  z-index: 5;
  transform: translateY(100%);
`;

const PageTransitions = ({ children, route }) => {
  return (
    <Fragment>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames="page" timeout={1000}>
          <MainComponent>{children}</MainComponent>
        </CSSTransition>
      </TransitionGroup>
      <Wipe className="wipe" />
    </Fragment>
  );
};

export default PageTransitions;
