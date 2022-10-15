import React, { useState } from 'react';
import './Toggler.css';
import { useDispatch } from 'react-redux';
import { setCollectionUnit } from '../../Redux/collectionsSlice';

const Toggler = ({index}) => {
  const dispatch = useDispatch();

  const [celcius, setCelcius] = useState(true);

  const switchUnit = () => {
    setCelcius(!celcius);

    if(celcius) {
      dispatch(setCollectionUnit({unit: 'fahrenheit', collectionIndex: index}))
    } else {
      dispatch(setCollectionUnit({unit: 'celcius', collectionIndex: index}))
    }
  }

  return (
    <div className="switch-button" onClick={() => switchUnit()}>
      <input className="switch-button-checkbox" type="checkbox"></input>
      <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">Celcius</span></label>
    </div>

  )
}

export default Toggler