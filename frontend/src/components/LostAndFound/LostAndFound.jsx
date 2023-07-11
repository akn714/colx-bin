import './LostAndFound.css'
import { Link, Outlet } from 'react-router-dom'

export function LostAndFound(){
    console.log("rendering main component of LostAndFound");

    return (
        <>
            <div className="lostandfound ">
                <div className="title">
                    <h1>Lost and Found</h1>
                </div>

                {/*  */}
                {/* <button onClick={get_lost_found}>fetch lost found</button> */}
                {/* <div className='lost_found'></div> */}
                {/*  */}

                <div className="main">
                    <Link to='/' className='back-btn'>{"<"}</Link>
                    <div className="opt-bar">
                        <Link to='/lost_and_found/lost_and_found' style={{"width":"200px","background":"rgb(100, 143, 255)", "color":"white"}} onClick={(e)=>{
                            for(let i=0;i<e.target.parentElement.children.length;i++){
                                if(e.target.parentElement.children[i]==e.target){
                                    continue;
                                }
                                e.target.parentElement.children[i].style.background = 'white';
                                e.target.parentElement.children[i].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>Lost and Found</Link>
                        <Link to='/lost_and_found/post_found' onClick={(e)=>{
                            for(let i=0;i<e.target.parentElement.children.length;i++){
                                if(e.target.parentElement.children[i]==e.target){
                                    continue;
                                }
                                e.target.parentElement.children[i].style.background = 'white';
                                e.target.parentElement.children[i].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>Post Found</Link>
                        <Link to='/lost_and_found/post_lost' onClick={(e)=>{
                            for(let i=0;i<e.target.parentElement.children.length;i++){
                                if(e.target.parentElement.children[i]==e.target){
                                    continue;
                                }
                                e.target.parentElement.children[i].style.background = 'white';
                                e.target.parentElement.children[i].style.color = 'rgb(119 119 119)';
                            }
                            e.target.style.background = 'rgb(100, 143, 255)';
                            e.target.style.color = 'white';
                        }}>Post Lost</Link>
                    </div>
                    <Outlet />
                    {/* <div className='lf-item item'>
                        <h4 className='lf-item-title item-title'>some title</h4>
                        <p className='lf-item-desc item-desc'>this is the description of the post.</p>
                        <div className="lf-item-contact">
                            <div className='lf-item-contact-name'>
                                <p className='lf-item-contact-title'>Posted by : </p>
                                <p className='lf-item-contact-title-value'>name</p>
                            </div>
                            <div className='lf-item-contact-pno'>
                                <p className='lf-item-contact-title'>Contact No. : </p>
                                <p className='lf-item-contact-title-value'>9374863786</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='footer'>
                COPYRIGHT © 2023 colx
            </div>
        </>
    )
}