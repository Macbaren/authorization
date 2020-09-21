import React from 'react'
import Head from './head'
// import wave from '../assets/images/wave.jpg'
import LoginForm from './login'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <LoginForm />
    </div>
  )
}

Home.propTypes = {}

export default Home
