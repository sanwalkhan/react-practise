import React, { Component } from 'react'
import Data from './data'

export default class Cards extends Component {
    render() {
        return (
            <div className='App'>
                {
                    Data.map((items, i) => {
                        return (
                            <div className="card" key={i} >
                                <h1 className="card-title"> person {items.id} </h1>
                                <img src={items.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title"> {items.name} </h2>
                                    <h5 className="card-text">
                                        Age : {items.age}
                                    </h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}