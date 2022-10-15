import React from 'react';
import './Toggler.css'

const Toggler = () => {
  return (
    <div className="switch-button">
      <input className="switch-button-checkbox" type="checkbox"></input>
      <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">Celcius</span></label>
    </div>

  )
}

export default Toggler