import React, {useState} from 'react';
import FAQ from './FAQ.jsx';
import PCL from './Pcl.jsx';
import {ModalWrapper, ModalButton, Modal, openModalIcon, closeModalIcon} from '../style.js';

const ListModal = (props) => {
  const [show, setShow] = useState(true);
  const icon = show ? closeModalIcon : openModalIcon
  return (
    <ModalWrapper>
      <ModalButton
        show={show} onClick={() => setShow(!show)}>
        {icon}
      </ModalButton>
      <Modal show={show}>
          <h2 style={{marginLeft: '15px'}}>FAQ</h2>
          <FAQ q={FAQ1}/>
          <FAQ q={FAQ2}/>
          <FAQ q={FAQ3}/>
          <FAQ q={FAQ4}/>
          <FAQ q={FAQ5}/>
          <FAQ q={FAQ6}/>
          <FAQ q={FAQ7}/>
          <FAQ q={FAQ8}/>
          <PCL />
      </Modal>
    </ModalWrapper>
  )
}

//eslint-disable-next-line
const FAQ1 = {
  question: 'What information do I need and what documents will give it to me?',
  answer:
  <div>
    <h4>Here is a list :</h4>
    <ul>
      <li>What you were charged with.  This can be found on a ticket (if that is all you have) or on an information or indictment from your case.
      </li><br></br>
      <li>When you were arrested.  This also can generally be found on a ticket or on an information or indictment unless the date of the arrest and the date of the offense are different.  If the dates are different then you can find this on your jail record.</li><br></br>
      <li> The resolution of your case.  If you went to trial and won meaning a Judge or jury found you not guilty or after an appeal, this would be your acquittal.  If you took a pre-trial diversion, this would be the pre-trial diversion agreement, if you took a deal this would most likely be a Judgment.</li><br></br>
      <li>The final outcome of your case.  If you completed deferred adjudication probation or other terms this would be a dismissal.  If you completed straight probation or a jail term this would be a discharge.  If you were on probation and then were adjudicated guilty or had your probation revoked then there will be an order stating that fact.
      </li><br></br>
      <li> Other important information: Ask for your “TRN” number. </li>
    </ul>
  </div>
}

//eslint-disable-next-line
const FAQ2 = {
  question: 'How do I get those records?',
  answer: 'You should be able to get copies of the paperwork by calling the Court Clerk where your case was handled.  The TRN number might not exist particularly on a Class C misdemeanor but the easiest way to get that is to call the County Sheriff where your case was handled.  You do not need certified copies, just copies.'
}

//eslint-disable-next-line
const FAQ3 = {
  question: 'Keywords to look for on your records',
  answer:
  <ul>
    <li>You are looking for the code reference to the crime you are being charged with in the case.  The Judgment will generally reference the provision of the penal, or other code, that applies to you.  That code reference is important.  It will be a number like §31.18. </li>
    <li>You are also looking to see if the result of the case was “deferred adjudication, “probation, or “jail.</li>
    <li> Sometimes a case that starts out with some type of probation ends with you in jail.  This is normally because you were found to have violated the terms of your probation.  For that same reason you might move from one type of probation to another such as from deferred adjudication probation to regular probation.  In these cases, you are looking for the date of that judgment and, if the result is jail, where your jail time was spent (county, state jail facility, TDCJ)</li>
  </ul>
}

//eslint-disable-next-line
const FAQ4 = {
  question: 'What if I was arrested for more than one charge in the same arrest?',
  answer: 'Then you need to gather records for each charge.'
}

//eslint-disable-next-line
const FAQ5 = {
  question: 'Does it matter if I have more than one criminal case?',
  answer: 'It does matter.  You will need to gather the date of arrest, charge, date of conviction (if any), and final outcome and date of same (dismissal, conviction and probation, conviction and jail).'
}
//eslint-disable-next-line
const FAQ6 = {
  question: `What if I don't want to do all this work?`,
  answer:
    <div>
      Then <a href="https://myattorney.as.me/keepitsimpleoption" target="_blank" rel="noopener noreferrer"> click here</a> and for a $250 fee we will consult with you, gather the documents, assess your eligibility, and discuss the outcome and options with you afterwards.  If you are eligible and hire us to do that legal work then the $250 fee will be applied to that cost.
    </div>
}
//eslint-disable-next-line
const FAQ7 = {
  question: 'What relationships are included as family violence?',
  answer:
    <div>
      <h4>It includes the following categories of people:</h4>
      <ul>
        <li>Those from a "dating relationship" defined as a relationship between individuals who have or have had a continuing relationship of a romantic or intimate nature.</li>
        <li>Family relationships including individuals related by consanguinity or affinity, as determined under Sections 573.022 (descendant, common ancestor or adopted) and 573.024 (married or related to a spouse), Government Code, individuals who are former spouses of each other, individuals who are the parents of the same child, without regard to marriage, and a foster child and foster parent, without regard to whether those individuals reside together.</li>
        <li>Roommates defined as members of a "Household" which means a unit composed of persons living together in the same dwelling, without regard to whether they are related to each other.  "Member of a household" includes a person who previously lived in a household.</li>
      </ul>
    </div>
}
//eslint-disable-next-line
const FAQ8 = {
  question: 'Will clearing my record help me restore my gun rights?',
  answer:
    <div>
      <p>Firearm rights really fall into three categories: purchasing, possessing, and/or owning firearms and ammunition.  With these rights you are really dealing with Federal and State laws.  The toughest will govern your situation.  So, the answer is possibly.  Gun rights are quite complex and beyond the scope of an FAQ paragraph; however, here are some tips:</p>
      <ul>
        <li>
          Under federal law, having a case expunged or a conviction set aside or pardoned would provide federal relief provided the relief does not otherwise restrict firearm rights.  The same would be true under State law.  Similarly, Texas law may provide for relief after certain amounts of time have passed.  An Order of Non-disclosure will not provide any relief and the government will still be able to access your criminal records.  There are other issues that can also restrict your firearm rights.
        </li>
        <li>
          These rights can be affected by issues beyond the scope of the charge you are seeking to clear such as conviction of a crime punishable by imprisonment for over a year, being a fugitive from justice, a user of a controlled substance, a person adjudicated as a mental defective or who has been committed to a mental institution, an illegal alien, a person dishonorably discharged, an individual who has renounced their citizenship, individuals subject to a court order for the protection of an intimate partner or child, individuals who have been convicted of a misdemeanor crime of domestic violence, an individual under indictment (such as being on deferred adjudication probation) for a crime punishable by imprisonment for over a year.
        </li>
      </ul>
    </div>
}

export default ListModal;