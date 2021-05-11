import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SubmitButton = styled.button`
  height: 37.5px;
  width: 73.5px;
  background: white;
  border-radius: 12px;
  border: 12px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease-in-out;
  margin: 20px;
  outline: none;
`
export const StyledLink = styled(Link)`
text-decoration: inherit;
color: inherit;
`
export const Button = styled.button`
  height: 112.5px;
  width: 120px;
  border-radius: 12px;
  border: 12px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease-in-out;
  margin: 20px;
  outline: none;
  background: ${props => props.state ? "#bcd1f6" : "white"};
`
export const ButtonWrapper = styled.div`
  display: inline;
  &:hover ${Button} {
    box-shadow: 0 8px 20px 4px rgba(0, 0, 0, 0.25);
  }
  &:hover ${SubmitButton} {
    box-shadow: 0 8px 20px 4px rgba(0, 0, 0, 0.25);
  }
`