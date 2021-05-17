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
  cursor: pointer;
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
  cursor: pointer;
  outline: none;
  background: ${props => props.state ? "#bcd1f68f" : "white"};
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
export const ModalButton = styled.button`
  height: auto;
  width: auto;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  transition: 1s;
`
export const ModalWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: start;
  grid-area:  3 / 10 / span 10 / span 1;
  &:click ${ModalButton} {
    transform: rotate(180deg);
  }
`
export const Modal = styled.div`
  width: 30vw;
  height: 100%;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.3);
  border: 2px;
  animation-name: animatetop;
  animation-duration: 1.4s;
  margin-left: 25px;
  transition: 1s;
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: start;
  align-items: start;
`
export const closeModalIcon = <svg style= {{height: '45px', width: '45px'}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
</svg>

export const openModalIcon = <svg style= {{height: '45px', width: '45px'}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
</svg>
