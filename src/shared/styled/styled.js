import styled from 'styled-components';

export const FormGroup = styled.section`
  position: relative;
  text-align: left;
  margin-bottom: ${props => ((props.type === 'hidden' || props.clear) ? '0' : '2rem')};
`;

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.66rem;
  display: block;
`;
