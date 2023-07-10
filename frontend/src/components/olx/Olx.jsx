import './Olx.css'

import {
    Link,
    Outlet
} from "react-router-dom";

export function Olx(){
    return (
        <>
            <div className="olx ">
                <div className="title">
                    <h1>Olx</h1>
                </div>

                {/*  */}
                {/* <button onClick={get_lost_found}>fetch lost found</button> */}
                {/* <span className='olx_loader' style={{"display":"none"}}></span> */}
                {/* <div className='lost_found'></div> */}
                {/*  */}

                <div className="main">
                    <Link to='/' className='back-btn'>{"<"}</Link>
                    <div className="opt-bar">
                        <Link to='/olx/buy' style={{"background":"rgb(100, 143, 255)", "color":"white"}} onClick={(e)=>{
                            console.log(e.target)
                            if(e.target.parentElement.children[1].style.background=='rgb(100, 143, 255)'){
                                e.target.parentElement.children[1].style.background = 'white';
                                e.target.parentElement.children[1].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>Buy</Link>
                        <Link to='/olx/sell' onClick={(e)=>{
                            console.log(e.target)
                            if(e.target.parentElement.children[0].style.background=='rgb(100, 143, 255)'){
                                e.target.parentElement.children[0].style.background = 'white';
                                e.target.parentElement.children[0].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>Sell</Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}