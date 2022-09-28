import React, { useState, useRef } from 'react';
import axios from 'axios'
import './components.css'

function Searchbar() {
    const searchRef = useRef()
    const [dropDown, setDropDown] = useState([])
    const [searchActive, setSearchActive] = useState(false);


    const getPredictions = (e) => {
        const val = e.target.value
        console.log(e)
            const config = {
                method: 'get',
                //made a proxy base url in package.json to fix the CORS error if youre using third party api
                url: `json?input=${val}&types=geocode&key=${process.env.REACT_APP_API_KEY}`,
                headers: {  }
            }

            axios(config)
                .then(res => {
                    setDropDown(res.data.predictions)
                })
                .catch(err => {
                    console.log(err.response)
                })

                
        console.log(dropDown)
        console.log(searchActive)
    }

  return (
    <div className='searchbar'>
        <div className="search-autocomplete">
            <input type="text" name="" id="" placeholder='Search your city' onChange={getPredictions} ref={searchRef} onFocus={() => setSearchActive(true)} onBlur={() => setSearchActive(false)}/>
            <div className={(dropDown.length >= 0 && searchActive) ? 'dropdown active' : 'dropdown'}>
                {
                    dropDown.length >= 1 && (
                        dropDown.map(menu => {
                            return <div className="item">{menu.description}</div>
                        })
                    )
                }
            </div>
        </div>
        <button>Search</button>
    </div>
  )
}

export default Searchbar