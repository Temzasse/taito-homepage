import React from 'react';
import styled from 'styled-components';

const noop = () => {};

const Button = ({ children, onClick = noop, lg }) => (
  <BaseButton onClick={onClick} lg={lg}>
    {children}
  </BaseButton>
);

const BaseButton = styled.div`
  border-radius: 100px;
  padding: ${props => props.lg ? '16px 24px' : '8px 16px'};
  color: #fff;
  background-color: ${props => props.theme.primaryColorLight};

  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }

  &:active {
    background-color: ${props => props.theme.primaryColorDark};
  }
`;

export default Button;
