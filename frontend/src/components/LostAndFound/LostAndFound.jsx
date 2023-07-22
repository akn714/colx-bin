import './LostAndFound.css'
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react';

export function LostAndFound(props){
    console.log("rendering main component of LostAndFound");

    useEffect(()=>{
        let opt_bar = document.getElementsByClassName('opt-bar')[0];
        if(props.selected=='lost_and_found'){
            opt_bar.children[0].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[0].style.color = 'white';
            opt_bar.children[1].style.background = 'white';
            opt_bar.children[1].style.color = 'rgb(119 119 119)';
            opt_bar.children[2].style.background = 'white';
            opt_bar.children[2].style.color = 'rgb(119 119 119)';
        }
        else if(props.selected=='post_found'){
            opt_bar.children[0].style.background = 'white';
            opt_bar.children[0].style.color = 'rgb(119 119 119)';
            opt_bar.children[1].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[1].style.color = 'white';
            opt_bar.children[2].style.background = 'white';
            opt_bar.children[2].style.color = 'rgb(119 119 119)';
        }
        else if(props.selected=='post_lost'){
            opt_bar.children[0].style.background = 'white';
            opt_bar.children[0].style.color = 'rgb(119 119 119)';
            opt_bar.children[1].style.background = 'white';
            opt_bar.children[1].style.color = 'rgb(119 119 119)';
            opt_bar.children[2].style.background = 'rgb(100, 143, 255)';
            opt_bar.children[2].style.color = 'white';
        }
    })

    return (
        <>
            <div className="lostandfound ">
                <div className="main">
                    <div className="opt-bar">
                        <Link to='/lost_and_found/lost_and_found'>Lost and Found</Link>
                        <Link to='/lost_and_found/post_found'>Post Found</Link>
                        <Link to='/lost_and_found/post_lost'>Post Lost</Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}