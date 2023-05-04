import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from "../Context"
const Home = () => {
const {ismodel,isSidebar}=useGlobalContext()
  return (
    <main>
        <button className='sidebar-toggle' onClick={isSidebar}>
            <FaBars/>
        </button>
        <button className='btn' onClick={ismodel}>show Model</button>
    </main>
  )
}

export default Home