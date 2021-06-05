import React, {useState} from 'react';
import {SubmitButton, StyledLink, Button, ButtonWrapper} from '../style';

export const YNQuestion = ({yPath, nPath, currentPath, backPath, yButtonText, nButtonText}) => {

  //the below code has been rendered useless when I removed the 'next' button and had the app route on y/n selection
  //i'm keeping it just in case however, and i am not commenting it out so that I don't have to remove references to it

  //const [path, setPath] = useState(currentPath)
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();

  const onClick = (expr) => {
    switch(expr) {
      case 'yes':
        seta1(true);
        seta2(false);
        //setPath({pathname: yPath, state: {from: currentPath}});
        break;
      case 'no':
        seta1(false);
        seta2(true);
        //setPath({pathname: nPath, state: {from: currentPath}});
        break;
      default:
        alert('Choose a valid option');
    }
  }

  return (
  <div>
    <ButtonWrapper>
      <StyledLink to={{pathname: yPath, state: {from: currentPath}}}>
        <Button state={a1} onClick={() => onClick('yes')}>{yButtonText || 'Yes'}</Button>
      </StyledLink>
    </ButtonWrapper>
    <ButtonWrapper>
      <StyledLink to={{pathname: nPath, state: {from: currentPath}}}>
        <Button state={a2} onClick={() => onClick('no')}>{nButtonText || 'No'}</Button>
      </StyledLink>
    </ButtonWrapper><br></br>
    <ButtonWrapper>
      <StyledLink to={backPath}><SubmitButton>Back</SubmitButton></StyledLink>
    </ButtonWrapper>
    {/* <ButtonWrapper>
      <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
    </ButtonWrapper> */}
  </div>
  )
}

export const ThreeWayQuestion = (props) => {
  const {firstPath, secondPath, thirdPath, currentPath, backPath, fPathText, sPathText, tPathText} = props.props;

  //const [path, setPath] = useState(currentPath);
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();
  const [a3, seta3] = useState();

  const onClick = (expr) => {
    switch (expr) {
      case 'ans1':
        seta1(true);
        seta2(false);
        seta3(false);
        //setPath({pathname: firstPath, state: {from: currentPath}});
        break;
      case 'ans2':
        seta1(false);
        seta2(true);
        seta3(false);
        //setPath({pathname: secondPath, state: {from: currentPath}});
        break;
      case 'ans3':
        seta1(false);
        seta2(false);
        seta3(true);
        //setPath({pathname: thirdPath, state: {from: currentPath}});
        break;
      default:
        alert('Please choose a valid input');
    }
  }
  return (
    <div>
      <ButtonWrapper>
        <StyledLink to={{pathname: firstPath, state: {from: currentPath}}}>
          <Button state={a1} onClick={() => onClick('ans1')}>{fPathText}</Button>
        </StyledLink>
      </ButtonWrapper>
      <ButtonWrapper>
      <StyledLink to={{pathname: secondPath, state: {from: currentPath}}}>
        <Button state={a2} onClick={() => onClick('ans2')}>{sPathText}</Button>
      </StyledLink>
      </ButtonWrapper>
      <ButtonWrapper>
      <StyledLink to={{pathname: thirdPath, state: {from: currentPath}}}>
        <Button state={a3} onClick={() => onClick('ans3')}>{tPathText}</Button><br></br>
      </StyledLink>
      </ButtonWrapper><br></br>
      <ButtonWrapper>
        <StyledLink to={backPath}><SubmitButton>Back</SubmitButton></StyledLink>
      </ButtonWrapper>
      {/* <ButtonWrapper>
        <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
      </ButtonWrapper> */}
    </div>
  )
}


//Used in end cases and PipeLine Branches
export const MainNavButtons = (props) => {
  const {backPath, nextPath} = props.props;

  return (
    <div>
      <ButtonWrapper>
        <StyledLink to={backPath}><SubmitButton>Back</SubmitButton></StyledLink>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledLink to={nextPath || '/home'}><SubmitButton>{nextPath ? 'Next' : 'Home'}</SubmitButton></StyledLink>
      </ButtonWrapper>
    </div>
  )
}