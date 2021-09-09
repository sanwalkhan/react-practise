import React from 'react'

export const Menucards = ({items}) => {
    return (
        
          <div  style={{ width: "25%" }}>
            <h5 > {items.title} </h5>
            <img alt="." src={items.img} />
            <div className="card-body">
                <h3 className="card-title"> {items.category} </h3>
              <h5 className="card-title"> Price {items.price} $</h5>
              <h4 className="card-text"> {items.desc} </h4>
            </div>
          </div>
      
       
    )
}
