import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import PropTypes from 'prop-types';

function Login(props) {
  const { handleLogin } = props
  return (
    <div>
      <LoginForm handleLogin={handleLogin}/>
    </div>
  )
}

export default Login

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,

};