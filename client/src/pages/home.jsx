import React from 'react';


export default function Homepage() {
    return (
        <div className='homepage-container'>
            <div className='input-fields'>
                <input type="email" placeholder='Enter your email'/>
                <input type="text" placeholder='Enter room code'/>
                <button>Submit</button>
            </div>
        </div>
    )
}
