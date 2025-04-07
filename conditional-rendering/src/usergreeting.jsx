// usergreeting.jsx
// usergreeting.jsx
import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcomeMessage">
      Welcome, {props.username}
    </h2>
  );

  const loginPrompt = (
    <h2 className="loginPrompt">
      Please login to continue!
    </h2>
  );

  return props.isLoggedin ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedin: PropTypes.bool.isRequired,
  username: PropTypes.string
};
UserGreeting.defaultProps={
    isLoggedin:true,
    username:'Guest'
};

export default UserGreeting;
