import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PropTypes from 'prop-types';

function Layout(props) {
  let {children,handleLogout,isLoggedIn}= props
  return (
    <div>
        <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,

};