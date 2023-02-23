import React from 'react'
import SignupForm from '../components/signupForm/SignupForm'
import PropTypes from 'prop-types';

function Signup(props) {
  const { handleSignup } = props

  return (
    <div>
      <SignupForm handleSignup={handleSignup}/>
    </div>
  )
}

export default Signup

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired,

};