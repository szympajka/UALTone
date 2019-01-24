import React, { Component } from 'react';
import styled from '../../../../node_modules/styled-components';

const StyledButton = styled.button`
  padding: 1em 1.66em;
  font-size: 1rem;
  border-radius: 1rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: #2DA75E;
  color: #fff;
  font-weight: 600;
  border: none;
  text-decoration: none;

  ${props => props.flat && `
    background-color: #fff;
    box-shadow: 0 0 1px #929292;
    color: #929292;
  `};

  ${props => props.danger && (
    props.primary ? `
      background-color: #F21B3F;
    ` : `
      background-color: #fff;
      box-shadow: 0 0 1px #F21B3F;
      color: #F21B3F;
    `
  )};

  ${props => props.info && (
    props.primary ? `
      background-color: #2DA75E;
    ` : `
      background-color: #fff;
      box-shadow: 0 0 1px #2DA75E;
      color: #2DA75E;
    `
  )};

  ${props => props.rtl && `
    margin-right: 0;
    margin-left: 1rem;
  `};

  ${props => props.disabled && `
    background-color: #eee;
  `}

  ${props => props.styled && props.styled}
`;

class Button extends Component {
  render() {
    return <StyledButton disabled={this.props.disableAfterClick} {...this.props} />;
  }
}

export default Button;
