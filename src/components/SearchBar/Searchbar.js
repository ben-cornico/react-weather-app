import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCollectionWeather, setCollectionPlace, selectCollection } from '../../Redux/collectionsSlice';
import axios from 'axios'
import './Search.css'

function Searchbar({collectionIndex}) {
    const dispatch = useDispatch();
    const searchRef = useRef();

    const [dropDown, setDropDown] = useState([])
    const [searchActive, setSearchActive] = useState(false);
    const [coordinates, setCoordinates] = useState({});
    const [weatherPlace, setWeatherPlace] = useState("");
    const [selected, setSelected] = useState(0)

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
                    setDropDown(res.data.predictions)
                })
                .catch(err => {
                    console.log(err.response)
                })
    }

    const handleSubmit = (e, item) => {
        e.preventDefault();
        e.target.blur();
        setSelected(0)
        setWeatherPlace(item.description);
        dispatch(setCollectionPlace({place: item.description, collectionIndex}))
        searchRef.current.value = item.description

        const config = {
            method: 'get',
            //made a proxy base url in package.json to fix the CORS error if youre using third party api
            url: `details/json?place_id=${item.place_id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
            headers: {  }
        }

        axios(config)
            .then(res => {
                setCoordinates(res.data.result.geometry.location);
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    const handleKeyPress = (e) => {
        console.log(e.keyCode)
        if(e.keyCode === 40) {
            if(selected < dropDown.length) {
                setSelected(selected + 1);
            } else {
                setSelected(0)
            }
        } else if(e.keyCode === 38) {
            if(selected > 0) {
                setSelected(selected-1);
            } else {
                setSelected(dropDown.length)
            }
        } else if(e.keyCode === 13 ) {
            console.log(searchRef)
            handleSubmit(e, dropDown[selected-1]);
        }
    }
    

    useEffect(() => {
        dispatch(setCollectionWeather({coordinates, collectionIndex}));

    }, [coordinates, weatherPlace]);
    

  return (
    <>
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className="search-autocomplete">
            <input type="text"
                name=""
                id=""
                placeholder='Search your city'
                onChange={getPredictions}
                ref={searchRef}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
                onKeyDown={handleKeyPress}
            />
            <div className={(dropDown.length >= 0 && searchActive) ? 'dropdown active' : 'dropdown'}>
                {
                    dropDown.length >= 1 && (
                        dropDown.map((menu, index) => {
                            return <div className={selected === index+1 ? "item" : "item selected"} key={menu.place_id} onClick={(e) => handleSubmit(e, menu)}>{menu.description}</div>
                        })
                    )
                }

            </div>
        </div>
        <button className='btn-search'>
            <span className="mdi mdi-magnify"></span>
        </button>
    </form>
    </>
  )
}

export default Searchbar