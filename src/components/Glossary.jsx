import React from 'react';
import FAQ from './FAQ.jsx';

const Glossary = (props) => {
  return (
    <div>
      <FAQ q={DefAdj} />
      <FAQ q={Discharge} />
      <FAQ q={Expnc} />
      <FAQ q={OrderOfND} />
      <FAQ q={PTrialDiver} />
      <FAQ q={Probation} />
      <FAQ q={SProbation} />
      <FAQ q={TRN} />
    </div>
  )
}

const DefAdj = {
  question: 'Deferred Adjudication',
  answer: `A deferred adjudication is a form of plea deal available in various jurisdictions, where a defendant pleads "guilty" or "no contest" to criminal charges in exchange for meeting certain requirements laid out by the court within an allotted period of time also ordered by the court. Upon completion of the requirements, which may include probation, treatment, community service, some form of community supervision, or some other diversion program, the defendant may have their case dismissed.  If a defendant breaks the terms of the deal, the Judge can find a defendant guilty and enter a sentence which could include jail time.  One aspect of this type of probation that is unique is there is no minimum time required for you to serve on it before you can ask a Judge for early termination.  Practically speaking, it is wise to wait 1/3 to 1/2 the term and until you have completed all of the terms of the probation.  `
}

const Discharge = {
  question: 'Discharge',
  answer: `This term is used here to describe the paperwork that completes the case.  This could be a dismissal, or paperwork indicating the successful completion of probation or a jail sentence. `
}

const Expnc = {
  question: 'Expunction',
  answer:
  <p>
    When you are arrested, a record of that arrest and the outcome of the case is made and attached to your name.  An expunction allows for the destruction of all public records made by the government of your arrest and its case to be permanently destroyed.  An expunction allows you to legally deny the arrest, the original criminal case, as well as the order of expunction itself.  You will not be required to admit that any of this ever happened.  We also have a <a href="https://myattorney.as.me/doublecheckconsult" target="_blank" rel="noopener noreferrer">book</a> on the subject written by Mr. Hamilton and it goes into much more detail on the subject.
  </p>
}

const OrderOfND = {
  question: 'Order of Non-Disclosure',
  answer:
  <p>
     A non-disclosure, often referred to as sealing your record, is a great opportunity.  An order of nondisclosure is a court order prohibiting public entities such as courts and police departments from disclosing certain criminal records. It also legally frees an individual who is granted an order of nondisclosure from disclosing information about their criminal history
    (subject to the order of nondisclosure) in response to questions on job applications. The criminal record may be disclosed to other criminal justice agencies for criminal justice or
    regulatory licensing purposes, as well as several non-criminal justice agencies and entities (e.g. Texas Medical Board, Texas Board of Law Examiners, Texas Education Agency).  It will seal or hide the record of this case from the eyes of the general public and by law you can protect that information in two ways.  First, by law you can deny that the offense ever took place.  Keep in mind that this will not work with governmental agencies as they will still have access to the records; however, it should not show up on your background checks when doing things like seeking a job at a public company.  Similarly, if you need a license from the State of Texas for your occupation, the licensing agency may very well see the record.  Second, if the record is being shared improperly, you have a statutory mechanism to stop that.  I hope this helps you to see that this is a great opportunity and we would love to help you get it done.  We also have a <a href="https://myattorney.as.me/doublecheckconsult" target="_blank" rel="noopener noreferrer">book</a> on the subject written by Mr. Hamilton and it goes into much more detail on the subject.
  </p>
}

const PTrialDiver = {
  question: 'Pre-trial Diversion',
  answer: ' A pretrial diversion is a great opportunity but its not for everyone.  This is a deal between you and the DA.  The case will stop.  You will be on a form of probation.  If you live it out, the case will be dismissed and we can get the record of your arrest expunged.  On a DWI this will also mean that you will avoid all the collateral consequences from DPS.  That said, if you fail on a PTD probation, the next offer you get will not be very good and in some counties, like Potter, it results in an automatic conviction.'
}

const Probation = {
  question: 'Probation',
  answer: 'Probation is a term used to describe a period of time when a person will be under supervision of a probation officer and required to comply with certain rules and conditions.  There are different ways to get probation.  The most commonly understood version is known as straight probation.  This means you have a conviction on a charge, are sentenced to jail, but you are allowed the chance to remain in the community instead of going to jail.  That said, you can also end up on probation without getting a conviction such as by way of a deferred adjudication or pre-trial diversion.  If you are placed on probation and do not live up to the terms it is possible that the probation deal will be revoked or changed.  This could result in a conviction if that had not already happened, such as with a deferred adjudication or pre-trial diversion, and it could also result in jail time or more probation time or additional requirements being added to the terms of your probation. '
}

const SProbation = {
  question: 'Straight Probation',
  answer: 'See Probation'
}

const TRN = {
  question: 'TRN',
  answer: 'This is a number that is assigned to you and a particular arrest.  It is one of the ways DPS keeps track of your criminal record.  A TRN is not always generated, such as with many Class C misdemeanor cases, but most people get one.  The easiest way to track this number down is by calling the Sheriff’s office in the county in which you were arrested. '
}

export default Glossary