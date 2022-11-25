// import React, { useState, useRef, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCollectionWeather, setCollectionPlace, selectCollection } from '../../Redux/collectionsSlice';
// import axios from 'axios'
// import './Search.css'

// function Searchbar({collectionIndex}) {
//     const dispatch = useDispatch();
//     const searchRef = useRef();


//     const input = searchRef.current.value;
//     const options = {
//         fields: ['address_compoenents', 'geometry', 'icon', 'name'],
//         strictBounds: false,
//         types: 'locality',
//     }

//     const autocomplete = new google.maps.places.Autocomplete(input, options)
    
//     const [dropDown, setDropDown] = useState([])
//     const [searchActive, setSearchActive] = useState(false);
    // const [coordinates, setCoordinates] = useState({});
    // const [weatherPlace, setWeatherPlace] = useState("");
    // const [selected, setSelected] = useState(0)

//     const getPredictions = (e) => {
//         const autocomplete = new google.maps.places.Autocomplete(e.target.value, options)
//         console.log(autocomplete)
//         // const val = e.target.value
//         //     const config = {
//         //         method: 'get',
//         //         //made a proxy base url in package.json to fix the CORS error if youre using third party api
//         //         url: `/autocomplete/json?input=${val}&types=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
//         //         headers: {  'Access-Control-Allow-Origin': '*',
//         //         'Access-Control-Allow-Credentials':true,
//         //         'Access-Control-Allow-Methods':'POST, GET' }
//         //     }

//         //     axios(config)
//         //         .then(res => {
//         //             setDropDown(res.data.predictions)
//         //         })
//         //         .catch(err => {
//         //             console.log(err.response)
//         //         })

//         auto
//     }

    // const handleSubmit = (e, item) => {
    //     e.preventDefault();
    //     e.target.blur();
    //     setSelected(0)
    //     setWeatherPlace(item.description);
    //     dispatch(setCollectionPlace({place: item.description, collectionIndex}))
    //     searchRef.current.value = item.description

        // const config = {
        //     method: 'get',
        //     //made a proxy base url in package.json to fix the CORS error if youre using third party api
        //     url: `details/json?place_id=${item.place_id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        //     headers: {  }
        // }

    //     axios(config)
    //         .then(res => {
    //             setCoordinates(res.data.result.geometry.location);
    //         })
    //         .catch(err => {
    //             console.log(err.response)
    //         })
    // }

//     const handleKeyPress = (e) => {
//         if(e.keyCode === 40) {
//             if(selected < dropDown.length) {
//                 setSelected(selected + 1);
//             } else {
//                 setSelected(0)
//             }
//         } else if(e.keyCode === 38) {
//             if(selected > 0) {
//                 setSelected(selected-1);
//             } else {
//                 setSelected(dropDown.length)
//             }
//         } else if(e.keyCode === 13 ) {
//             console.log(searchRef)
//             handleSubmit(e, dropDown[selected-1]);
//         }
//     }
    

//     useEffect(() => {
//         dispatch(setCollectionWeather({coordinates, collectionIndex}));

//     }, [coordinates, weatherPlace]);
    

//   return (
//     <>
//     <form className='searchbar' onSubmit={handleSubmit}>
//         <div className="search-autocomplete">
//             <div className="input-container">
//                 <input type="text"
//                     name=""
//                     id=""
//                     placeholder='Search your city'
//                     onChange={getPredictions}
//                     ref={searchRef}
//                     onFocus={() => setSearchActive(true)}
//                     onBlur={() => setSearchActive(false)}
//                     onKeyDown={handleKeyPress}
//                 />

//             </div>
//             <div className={(dropDown.length >= 0 && searchActive) ? 'dropdown active' : 'dropdown'}>
//                 {
//                     dropDown.length >= 1 && (
//                         dropDown.map((menu, index) => {
//                             return <div className={selected === index+1 ? "item selected" : "item"} key={menu.place_id} onClick={(e) => handleSubmit(e, menu)}>{menu.description}</div>
//                         })
//                     )
//                 }

//             </div>
//         </div>
//         <button className='btn-search'>
//             <span className="mdi mdi-magnify"></span>
//         </button>
//     </form>
//     </>
//   )
// }

// export default Searchbar

import React from 'react'
import AutoComplete from 'react-google-autocomplete'
const Searchbar = () => {

    // const [coordinates, setCoordinates] = useState({});
    // const [selected, setSelected] = useState(0)

    const handleSubmit = (place) => {
        // dispatch(setCollectionPlace({place: item.description, collectionIndex}));

        
        // const config = {
        //     method: 'get',
        //     //made a proxy base url in package.json to fix the CORS error if youre using third party api
        //     url: `details/json?place_id=${item.place_id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        //     headers: {  }
        // }


        // axios(config)
        //     .then(res => {
        //         setCoordinates(res.data.result.geometry.location);
        //     })
        //     .catch(err => {
        //         console.log(err.response)
        //     })

        // console.log(place.geometry.location.lat)
        console.log(place.geometry.location.lat())
        place.geometry.location.lat(e => {
            console.log(e)
        })
    }

  return (
    <AutoComplete
        style={{padding: "0.75rem", fontSize: "0.9rem"}}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        onPlaceSelected={(place) => handleSubmit(place)}
    />
  )
}

export default Searchbar