import './Complaints.css'
import { Link, Outlet } from 'react-router-dom'

export function Complaints(){
    console.log("rendering main complaints component");

    return (
        <>
            <div className="complaints ">
                <div className="title">
                    <h1>Complaints</h1>
                </div>

                <div className="main">
                    <Link to='/' className='back-btn'>{"<"}</Link>
                    <div className="opt-bar">
                        <Link to='/complaints/complaints' style={{"width":"200px","background":"rgb(100, 143, 255)", "color":"white"}} onClick={(e)=>{
                            for(let i=0;i<e.target.parentElement.children.length;i++){
                                if(e.target.parentElement.children[i]==e.target){
                                    continue
                                }
                                e.target.parentElement.children[i].style.background = 'white';
                                e.target.parentElement.children[i].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>complaints</Link>
                        <Link to='/complaints/post_complaint' style={{"width":"200px"}} onClick={(e)=>{
                            for(let i=0;i<e.target.parentElement.children.length;i++){
                                if(e.target.parentElement.children[i]==e.target){
                                    continue
                                }
                                e.target.parentElement.children[i].style.background = 'white';
                                e.target.parentElement.children[i].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>Post Complaint</Link>    
                    </div>
                    <Outlet />
                </div>
            </div>
            <div className='footer'>
                COPYRIGHT © 2023 colx
            </div>
        </>
    )
}