import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Model = () => {
  return (
    <div className='modal-overlay '>
        <div className="model-container">
            <h3>model container</h3>
            <button className='close-model-btn'><FaTimes/></button>
        </div>
    </div>
  )
}

export default Model