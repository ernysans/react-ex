import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
  };
  updateState = (data) => {
    this.setState(data);
  };
  addUser = (event) => {
    event.preventDefault();
    const {users, create} = this.props;
    const {firstName, lastName, username} = this.state;
    if (users.hasOwnProperty(username)) {
      alert('User already exists');
      return;
    }
    this.props.create(this.state);
    this.updateState({
      firstName: '',
      lastName: '',
      username: '',
    });
  };

  updateUsername = (text) => {
    let _text = text ?? '';
    _text = _text.toLowerCase();
    _text = _text.replace(/[^a-zA-Z]+/g, '');
    this.updateState({username: _text});
  };

  render() {
    const {firstName, lastName, username} = this.state;
    return (
      <div>
        <form>
          <input type="text" placeholder="First Name" value={firstName}
                 onChange={(event) => this.updateState({firstName: event.target.value})}/>
          <input type="text" placeholder="Last Name" value={lastName}
                 onChange={(event) => this.updateState({lastName: event.target.value})}/>
          <input type="text" placeholder="Username" value={username}
                 onChange={(event) => this.updateUsername(event.target.value)}/>
        </form>
        <button onClick={this.addUser}>Add User</button>
      </div>
    );
  }
}

NewUser.propTypes = {
  users: PropTypes.object.isRequired,
  create: PropTypes.func.isRequired,
};

export default NewUser;
