import React from 'react'

function Info() {
  return (
    <div className='info'>
        <div className="info-temp">
            <div className="large-text">
                26°C
            </div>
            <div className="small-text">Feels like 26°C</div>
        </div>

        <div className="info-weather">
            <div className="med-text">
                Clouds
            </div>
            <div className="small-text">Overcast clouds</div>
        </div>

        <div className="info-city-country">
            <div className="med-text">
                Laoag City, PH
            </div>
            <div className="small-text">
                September 28, at 3:10 AM
            </div>
        </div>
    </div>
  )
}

export default Info