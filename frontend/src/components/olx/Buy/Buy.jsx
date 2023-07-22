import './Buy.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { fetch_products } from '../../index.js'

export function Buy(){

    useEffect(()=>{
        fetch_products();
    })

    return (
        <>
            <div className="loader-div" style={{"display":"none"}}>
                <span className='loader' style={{"display":"none"}}></span>
            </div>
            <div id='products'></div>
        </>
    )
}