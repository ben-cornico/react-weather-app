import React from 'react';
import axios from 'axios'
import './components.css'

function Searchbar() {

    // var axios = require('axios');

    // var config = {
    // method: 'get',
    // url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=laoag&types=geocode&key=AIzaSyCVvQNBYvpfiksBOs4rpr_3g0qHSNBHDac',
    // headers: { }
    // };

    // axios(config)
    // .then(function (response) {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    // console.log(error);
    // });

    const getPredictions = (e) => {
        const val = e.target.value
        // axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${val}&types=geocode&key=AIzaSyCVvQNBYvpfiksBOs4rpr_3g0qHSNBHDac`)
        //     .then(res => {
        //         console.log(JSON.stringify(res.data));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         console.log(err.response.data.error)
        //     })

            const config = {
                method: 'get',
                //    https://maps.googleapis.com/maps/api/place/autocomplete/
                url: `json?input=${val}&types=geocode&key=AIzaSyCVvQNBYvpfiksBOs4rpr_3g0qHSNBHDac`,
                headers: { 'Access-Control-Allow-Origin': '*','Content-Type': 'application/json' }
            }

            axios(config)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                })

            // var config = {
            //     method: 'get',
            //     url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=laoag&types=geocode&key=AIzaSyCVvQNBYvpfiksBOs4rpr_3g0qHSNBHDac',
            //     headers: { }
            //     };
            
            //     axios(config)
            //     .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //     })
            //     .catch(function (error) {
            //     console.log(error);
            //     });
    }
  return (
    <div className='searchbar'>
        <div className="search-autocomplete">
            <input type="text" name="" id="" placeholder='Search your city' onChange={getPredictions}/>
        </div>
        <button>Search</button>
    </div>
  )
}

export default Searchbar