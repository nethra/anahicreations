import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Request from 'superagent';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
   
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
    var Url = "http://localhost:3002/UserCredential/validate";
    Request.post(Url)
    .send({
      "UserCredential": {
      "email": "nethra.madesh@gmail.com",
      "password": "Tesco@123",
      "name":"nethra"
      }
      })
    .then((response) =>
    {
      if(response.statusCode!=200)
      {
      const errors = {};
      errors.password = "Invalid User"
this.setState({
  errors
})


      }
else{
  console.log(response.status);
}

    });
    
    
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
