import React from 'react'
import Parent from './parentdidmount'

export const Child = () => {

    // const [name, setname] = useState('Aman')

    return (
        <div>
            <div className="App">
                <h1> Render Method in React</h1>
                <Parent  />

                {/* <button onClick={}></button> */}


            </div>
        </div>
    )
}
