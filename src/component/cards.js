import React from 'react'
import data from './newData'
import propTypes from 'prop-types'


const Cards = () => {
    return (
      
      <div className="App">
        {data.map((item , i ) => {
          return(
            <div key={i} className="card" style={{ "width":"25%"}}>
               
            <h5 className="card-title"> {item.title} </h5>
            <img className="card-img-top" alt="..." src={item.src} />
            <div className="card-body">
            <h5 className="card-title"> Price {item.price} $</h5>
            <h4 className="card-text"> {item.content} </h4>
  </div>
</div>
          )
        })
        }
      </div>


    )
}


Cards.propTypes = {
  price: propTypes.number.isRequired
} 


export default Cards


