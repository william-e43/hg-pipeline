import React, {useState} from 'react';
import {SubmitButton, StyledLink, Button, ButtonWrapper} from '../style';

const YNQuestion = ({yPath, nPath, currentPath, backPath}) => {

  const [path, setPath] = useState(currentPath)
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();

  const onClick = (expr) => {
    switch(expr) {
      case 'yes':
        seta1(true);
        seta2(false);
        setPath({pathname: yPath, state: {from: currentPath}});
        break;
      case 'no':
        seta1(false);
        seta2(true);
        setPath({pathname: nPath, state: {from: currentPath}});
        break;
      default:
        alert('Choose a valid option');
    }
  }

  return (
  <div>
    <ButtonWrapper>
      <Button state={a1} onClick={() => onClick('yes')}>Yes</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button state={a2} onClick={() => onClick('no')}>No</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <StyledLink to={backPath}><SubmitButton>Back</SubmitButton></StyledLink>
    </ButtonWrapper>
    <ButtonWrapper>
      <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
    </ButtonWrapper>
  </div>
  )
}

export default YNQuestion;