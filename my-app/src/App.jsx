import React, {useState} from 'react'
import axios from 'axios'
import Title from './components/title/title'
import Comaprison from './components/comparison/comparison'



const app = () => {

  return (
    <>
    <div id="spacing">
    <Title />
    <Comaprison />
    </div>
     </>
  )
}

export default app
