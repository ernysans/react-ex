import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SingleUser from './SingleUser';

class ListUsers extends Component {
  state = {
    showGames: true,
  };

  toggleShowGames = (event) => {
    event.preventDefault();
    this.setState((oldState) => ({
      showGames: !oldState.showGames,
    }));
  };

  render() {
    const {users} = this.props;
    const {showGames} = this.state;
    return (
      <div>
        <h2>Users</h2>
        <button onClick={this.toggleShowGames}>
          Hide Games
        </button>
        <nav className="user-list">
          {Object.keys(users).map((id) => (
            <SingleUser key={id} user={users[id]} showGames={showGames}/>
          ))}
        </nav>
      </div>
    );
  }
}

ListUsers.propTypes = {
  users: PropTypes.object.isRequired,
};

export default ListUsers;
