import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import './components.css'

function Searchbar(props) {
    const searchRef = useRef()
    const [dropDown, setDropDown] = useState([])
    const [searchActive, setSearchActive] = useState(false);
    const [data, setData] = useState({})

    const getPredictions = (e) => {
        const val = e.target.value
            const config = {
                method: 'get',
                //made a proxy base url in package.json to fix the CORS error if youre using third party api
                url: `autocomplete/json?input=${val}&types=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
                headers: {  }
            }

            axios(config)
                .then(res => {
                    console.log(res.data.predictions)
                    setDropDown(res.data.predictions)
                })
                .catch(err => {
                    console.log(err.response)
                })
    }

    const handleSubmit = (e, id) => {
        e.preventDefault();

        console.log(e)
        console.log(id)
        const val = e.target.value
        const config = {
            method: 'get',
            //made a proxy base url in package.json to fix the CORS error if youre using third party api
            url: `details/json?place_id=${id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
            headers: {  }
        }

        axios(config)
            .then(res => {
                // setData(res.data.predictions)
                setData(res.data.result.geometry.location)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
      props.onSubmit(data)
    
    }, [data])
    

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className="search-autocomplete">
            <input type="text" name="" id="" placeholder='Search your city' onChange={getPredictions} ref={searchRef} onFocus={() => setSearchActive(true)} onBlur={() => setSearchActive(false)}/>
            <div className={(dropDown.length >= 0 && searchActive) ? 'dropdown active' : 'dropdown'}>
                {
                    dropDown.length >= 1 && (
                        dropDown.map(menu => {
                            return <div className="item" key={menu.place_id} onClick={(e) => handleSubmit(e, menu.place_id)}>{menu.description}</div>
                        })
                    )
                }

            </div>
        </div>
        <button>Search</button>
    </form>
  )
}

export default Searchbar