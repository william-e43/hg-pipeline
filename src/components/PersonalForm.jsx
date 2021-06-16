import React from 'react';
import {Button, StyledLink, ButtonWrapper} from '../style';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: '',
      lName: '',
      pNum: '',
      email: '',
      check: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Please check your email for a link to verify your information to continue');
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const key = target.name;
    let value = target.type === 'checkbox' ? !this.state.check : target.value;
    this.setState({[key]: value });
  }

  render() {
    return (
      <div>
        <h3>Please fill out the form below then you will be sent an email with a link to verify your identity and continue with the qualifier.</h3><br></br>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="fName" placeholder="First Name" value={this.state.fName} onChange={this.handleChange} required="true" /><br/><br/>
          <input type="text" name="lName" placeholder="Last Name" value={this.state.lName} onChange={this.handleChange} required="true" /><br/><br/>
          <input type="email" name="email" placeholder="email@gmail.com" value={this.state.email} onChange={this.handleChange} required="true"/><br/><br/>
          {/* <input type="tel" name="pNum" placeholder="8064444444" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={this.state.pNum} onChange={this.handleChange}></input><br/> */}
          <label>
            <input type="checkbox" name="check" checked={this.state.check} onChange={this.handleChange} required="true"/>
            I give Hamilton Grant PC permission to contact me about the record clearing process.
          </label><br/><br/>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </form>
      </div>
    )
  }
}

export default PersonalForm;


