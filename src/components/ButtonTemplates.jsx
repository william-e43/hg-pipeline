import React, {useState} from 'react';
import {SubmitButton, StyledLink, Button, ButtonWrapper} from '../style';

export const YNQuestion = ({yPath, nPath, currentPath, backPath, yButtonText, nButtonText}) => {

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
      <Button state={a1} onClick={() => onClick('yes')}>{yButtonText || 'Yes'}</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button state={a2} onClick={() => onClick('no')}>{nButtonText || 'No'}</Button>
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

export const ThreeWayQuestion = (props) => {
  const {firstPath, secondPath, thirdPath, currentPath, backPath, fPathText, sPathText, tPathText} = props.props;

  const [path, setPath] = useState(currentPath);
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();
  const [a3, seta3] = useState();

  const onClick = (expr) => {
    switch (expr) {
      case 'ans1':
        seta1(true);
        seta2(false);
        seta3(false);
        setPath({pathname: firstPath, state: {from: currentPath}});
        break;
      case 'ans2':
        seta1(false);
        seta2(true);
        seta3(false);
        setPath({pathname: secondPath, state: {from: currentPath}});
        break;
      case 'ans3':
        seta1(false);
        seta2(false);
        seta3(true);
        setPath({pathname: thirdPath, state: {from: currentPath}});
        break;
      default:
        alert('Please choose a valid input');
    }
  }
  return (
    <div>
      <ButtonWrapper>
        <Button state={a1} onClick={() => onClick('ans1')}>{fPathText}</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button state={a2} onClick={() => onClick('ans2')}>{sPathText}</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button state={a3} onClick={() => onClick('ans3')}>{tPathText}</Button><br></br>
      </ButtonWrapper><br></br>
      <ButtonWrapper>
        <StyledLink to={backPath}><SubmitButton>Back</SubmitButton></StyledLink>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
      </ButtonWrapper>
    </div>
  )
}