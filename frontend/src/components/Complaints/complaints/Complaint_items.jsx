import './Complaint_items.css'
import { useEffect } from 'react';
import { get_complaints } from '../../index.js';

export function Complaint_items(){
    
    useEffect(()=>{
        get_complaints();
    })

    return (
        <>
            <div className="loader-div" style={{"display":"none"}}>
                <span className='loader' style={{"display":"none"}}></span>
            </div>
            <div id='complaints' className="main"></div>
        </>
    )
}