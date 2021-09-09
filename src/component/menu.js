import React, { useState } from 'react'
import menu from './newdata'
import { Buttons } from './buttons'

export const Menu = () => {
    const category = menu.map((value)=>value.category )
    const setcategory = new Set(category);
    const setmenu = ["All" , ...setcategory]

    // console.log(setmenu);
    // console.log(setcategory);
    // console.log(category);

    const [items, setitems] = useState(menu)



    return (
        <div>
            <Buttons category = {setmenu}/>
        </div>
    )
}
