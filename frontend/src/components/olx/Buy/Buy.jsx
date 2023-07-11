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
            {/* <div className='buy'></div> */}

            <div id='products'>
                <Link to='/' className='back-btn'>{"<"}</Link>
                {/* <div className='buy-item item'>
                    <h4 className='buy-item-title item-title'>some title</h4>
                    <p className='buy-item-desc item-desc'>this is the description of the post.</p>
                    <div className="buy-item-contact">
                        <div className='buy-item-contact-name'>
                            <p className='buy-item-contact-title'>Posted by : </p>
                            <p className='buy-item-contact-title-value'>name</p>
                        </div>
                        <div className='buy-item-contact-pno'>
                            <p className='buy-item-contact-title'>Contact No. : </p>
                            <p className='buy-item-contact-title-value'>9374863786</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}