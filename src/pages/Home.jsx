import React from 'react'
import Hero from '../components/Hero/Hero'
import Layout from "../components/Layout/Layout"
import PropTypes from 'prop-types';

function Home(props) {
  const {handleLogout,isLoggedIn} = props
  return (
    <div>
        <Layout handleLogout={handleLogout} isLoggedIn={isLoggedIn}> 
          <Hero />
        </Layout>
        
    </div>
  )
}

export default Home

Home.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,

};