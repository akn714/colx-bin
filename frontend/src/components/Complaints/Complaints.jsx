import './Complaints.css'
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react';

export function Complaints(props){
    console.log("rendering main complaints component");
    
    useEffect(()=>{
        let opt_bar = document.getElementsByClassName('opt-bar')[0];
        if(props.selected=='complaint_items'){
            opt_bar.children[0].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[0].style.color = 'white';
            opt_bar.children[1].style.background = 'white';
            opt_bar.children[1].style.color = 'rgb(119 119 119)';
        }
        else if(props.selected=='post_complaint'){
            opt_bar.children[0].style.background = 'white';
            opt_bar.children[0].style.color = 'rgb(119 119 119)';
            opt_bar.children[1].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[1].style.color = 'white';
        }
        else if(props.selected=='post_lost'){
            opt_bar.children[0].style.background = 'white';
            opt_bar.children[0].style.color = 'rgb(119 119 119)';
            opt_bar.children[1].style.background = 'white';
            opt_bar.children[1].style.color = 'rgb(119 119 119)';
        }
    })

    return (
        <>
            <div className="complaints ">
                <div className="main">
                    <div className="opt-bar">
                        <Link to='/complaints/complaints' style={{"width":"200px"}} >complaints</Link>
                        <Link to='/complaints/post_complaint' style={{"width":"200px"}} >Post Complaint</Link>    
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}