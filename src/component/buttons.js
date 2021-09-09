import React from 'react'

export const Buttons = ({category}) => {

    // console.log(category);



    return (
        <div>
            {category.map((i,j)=><button className="btn btn-success" type="button" key={j} onClick={()=>console.log("hello")}>{i}</button>)}
        </div>
    )
}
