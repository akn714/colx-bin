import './Lost_and_Found.css'
import { useEffect } from 'react'

import { get_lost_found } from '../../index.js';


export function Lost_and_Found(){
    useEffect(()=>{
        get_lost_found();
    })
    return (
        <>
            {/* content in this div fill render through fetch api */}
            <div className="loader-div" style={{"display":"none"}}>
                <span className='loader' style={{"display":"none"}}></span>
            </div>
            <div id="lost_and_found"></div>
        </>
    )
}