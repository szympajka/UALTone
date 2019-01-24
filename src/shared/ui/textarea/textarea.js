import React from 'react';
import styled from 'styled-components';
import { FormGroup, Label } from '../../styled/styled';
import { isDefined } from '../../utils/helpers';

const StyledTextarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  display: block;
  width: 100%;
  max-width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgb(226, 226, 226);
  min-height: 200px;
`;

const Textarea = (props) => {
  const { onChange, label, name, id, ...pms } = props;
  const eid = id || name;
  const textarea = <StyledTextarea id={eid} name={name} {...pms} onChange={event => onChange(event)} />;

  if (isDefined(label)) {
    return (
      <FormGroup>
        <Label htmlFor={eid}>{label}</Label>
        {textarea}
      </FormGroup>
    );
  }

  return textarea;
};

export default Textarea;
