import React from 'react'
import Allnotes from './Allnotes';

const Home = (props) => {
  const {showAlert} = props;
  return (
    <div>
        <Allnotes showAlert = {showAlert}/>
    </div>
  )
}

export default Home;
