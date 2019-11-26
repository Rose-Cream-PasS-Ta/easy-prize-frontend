import React from 'react';
import styled from 'styled-components';

import '../global.scss';

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

interface LayoutProps {
  children?: React.ReactElement[] | React.ReactElement;
}

export default class Layout extends React.Component<LayoutProps> {
  public render() {
    const { children } = this.props;
    return (
      <Container>
        {children}
      </Container>
    );
  }
}
