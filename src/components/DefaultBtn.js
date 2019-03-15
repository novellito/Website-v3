import React from 'react';
import styled from 'styled-components';
import { white } from '../colors';

const Button = styled.a`
  cursor: pointer;
  background-color: ${props => props.btnColor};
  color: ${white};
  margin-left: auto;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 600;
  padding: 1em 2em;
  border: 1.3px solid ${white};
  border-radius: 100px;
  &:hover {
    background: ${white};
    color: ${props => props.btnColor};
    transition: 0.3s;
  }
`;

const DefaultBtn = props => {
  return (
    <>
      <Button
        btnColor={props.btnColor}
        className={props.classname}
        target="_blank"
        href={props.href}
        rel="noopener noreferrer"
      >
        {props.content}
      </Button>
    </>
  );
};

export default DefaultBtn;