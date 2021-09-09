import React from 'react'

export const Buttons = ({category ,fun} ) => {

    // console.log(category);
    // console.log(fun)



    return (
        <div>
            {category.map((i,j)=><button className="btn btn-success" type="button" key={j} onClick={()=> fun(i)}>{i}</button>)}
        </div>
    )
}
