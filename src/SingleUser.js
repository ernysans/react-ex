import React from 'react';
import PropTypes from 'prop-types';

SingleUser.propTypes = {
  user: PropTypes.object.isRequired,
  showGames: PropTypes.bool.isRequired,
};

function SingleUser(props) {
  const {user, showGames} = props;
  return (
    <div>
      <div className="user-item">
        <div><strong>First Name:</strong> {user.firstName}</div>
        <div><strong>Last Name:</strong> {user.lastName}</div>
        <div><strong>Username:</strong> {user.username}</div>
        {showGames && <span className="user-score">{user.games}</span>}
      </div>
    </div>
  );
}

export default SingleUser;
