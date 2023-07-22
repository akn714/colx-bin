import { useEffect } from 'react'
import './Template.css'
import { Link, Outlet } from 'react-router-dom'

export function Template(props){

    useEffect(()=>{
        if(props.isHome){
            document.querySelector('.back-btn').style.display = 'none';
        }
        else{
            document.querySelector('.back-btn').style.display = 'flex'; 
        }
    })
    
    return (
        <>
            <div className="home">
                <div className='title'>
                    <Link to='/' className='back-btn'>{"<"}</Link>
                    <h1>{props.title}</h1>
                </div>
                <Outlet />
                <div className='footer'>
                    COPYRIGHT © 2023 colx
                </div>
            </div>
        </>
    )
}

Template.defaultProps = {
    isHome: false
}