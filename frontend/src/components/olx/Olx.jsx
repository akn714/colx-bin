import './Olx.css'

import {
    Link,
    Outlet
} from "react-router-dom";
import { useEffect } from 'react';

export function Olx(props){

    
    useEffect(()=>{
        let opt_bar = document.getElementsByClassName('opt-bar')[0];
        if(props.selected=='buy'){
            opt_bar.children[0].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[0].style.color = 'white';
            opt_bar.children[1].style.background = 'white';
            opt_bar.children[1].style.color = 'rgb(119 119 119)';
        }
        else if(props.selected=='sell'){
            opt_bar.children[0].style.background = 'white';
            opt_bar.children[0].style.color = 'rgb(119 119 119)';
            opt_bar.children[1].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[1].style.color = 'white';
        }
    })

    return (
        <>
            <div className="olx ">
                <div className="main">
                    <div className="opt-bar">
                        <Link to='/olx/buy'>Buy</Link>
                        <Link to='/olx/sell'>Sell</Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}