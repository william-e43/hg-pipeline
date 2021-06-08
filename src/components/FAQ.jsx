import React, {useState} from 'react';
import {Answer, FAQWrapper} from '../style';

const FAQ = (props) => {
  const [show, setShow] = useState(false);
  return (
    <FAQWrapper>
      <div style={{margin: '0px 10px 0px 15px'}} onClick={() => setShow(!show)}><h4>{props.q.question}</h4></div>
      <Answer style={{margin: '0px 10px 0px 15px'}} show={show}>{props.q.answer}</Answer>
    </FAQWrapper>
  )
}


export default FAQ;