import React, { Component } from 'react';
import { concat } from 'lodash';
import { FormGroup, Label } from '../../styled/styled';
import { isDefined } from '../../utils/helpers';
import styled from '../../../../node_modules/styled-components';

export const StyledInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-right: 1rem;
  margin-bottom: 1rem;
  
  ${props => props.type === 'submit' && `
    cursor: pointer;
    background-color: #2DA75E;
    color: #fff;
    font-weight: 600;
    border: none;
    text-decoration: none;
  `};

  ${props => props.inline && `
    display: inline;
  `};

  ${props => props.info && (
    props.primary ? `
      background-color: #2DA75E;
    ` : `
      background-color: #fff;
      box-shadow: 0 0 1px #2DA75E;
      color: #2DA75E;
    `
  )};

  ${props => !props.valid && `
    border-color: #F21B3F;
  `};

  ${props => props.styles && props.styles}
`;

const ValidationStatus = styled.div`
  ${props => !props.valid && `
    margin-bottom: 0.33rem;
    margin-left: 1rem;
    color: #f21c40;

    :before {
      content: 'Please fill in this input';
    }
  `};
`;

const PasswordSwitch = styled.div`
  display: inline-block;
  float: right;
  font-size: 0.875rem;
  color: #2da75e;
  position: relative;
  top: 3px;
  outline: none;
  cursor: pointer;
  user-select: none;

  i.material-icons {
    font-size: 1.33rem;
    position: relative;
    top: 6px;
    left: -6px;
  }
`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.setState(({ type }) => ({
      type: type === 'password' ? 'test' : 'password'
    }));
  }

  render() {
    let { valid } = this.props;

    const { beforeLabel, afterLabel, onChange, label, name, id, styles, value, showSwitch, type: ptype, ...pms } = this.props;
    const { type } = this.state;

    const eid = id || name;

    const extraParams = {};

    const extraNodesAfter = [];
    const extraNodesBefore = [];

    const extraNodesAfterLabel = concat(afterLabel || []);
    const extraNodesBeforeLabel = concat(beforeLabel || []);

    if (ptype) {
      switch (ptype.toLowerCase()) {
        case 'email':
          extraParams.pattern = '.+@.+..+';
          break;
        case 'password':
          if (showSwitch) {
            extraNodesBefore.push(
              <PasswordSwitch key={extraNodesBefore.length} role="button" onClick={this.changeView}>
                <i className="material-icons">
                  {ptype === type ? 'visibility' : 'visibility_off'}
                </i>
                {ptype === type ? 'Show' : 'Hide'}
              </PasswordSwitch>
            );
          }
          break;
        case 'submit':

          break;
        default:
          break;
      }
    }

    if (valid === undefined) {
      valid = true;
    }

    const input = <StyledInput valid={valid} id={eid} name={name} type={type} value={value} {...pms} styles={styles} onChange={event => onChange(event)} {...extraParams} />;

    let result = (
      <FormGroup clear>
        {extraNodesBefore}
        <ValidationStatus valid={valid} />
        {input}
        {extraNodesAfter}
      </FormGroup>
    );

    if (isDefined(label)) {
      result = (
        <FormGroup {...pms}>
          {extraNodesBefore}
          {extraNodesBeforeLabel}
          <Label htmlFor={eid}>{label}</Label>
          {extraNodesAfterLabel}
          <ValidationStatus valid={valid} />
          {input}
          {extraNodesAfter}
        </FormGroup>
      );
    }

    return result;
  }
}

export default Input;
