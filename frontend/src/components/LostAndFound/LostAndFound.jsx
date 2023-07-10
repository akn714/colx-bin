import './LostAndFound.css'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'

export function LostAndFound(){
    console.log("function called");
    // useEffect(()=>{
    //     get_lost_found();
    // })

    return (
        <>
            <div className="lostandfound ">
                <div className="title">
                    <h1>Lost and Found</h1>
                </div>

                {/*  */}
                {/* <button onClick={get_lost_found}>fetch lost found</button> */}
                <span className='lf_loader' style={{"display":"none"}}></span>
                <div className='lost_found'></div>
                {/*  */}

                <div id='lostandfound' className="main">
                    <Link to='/' className='back-btn'>{"<"}</Link>
                    <div className='lf-item item'>
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
                    </div>
                </div>
                <script>
                    {
                        document.body.addEventListener('load', ()=>{
                            console.log('loaded')
                        })
                    }
                </script>
                <script src='../../../public/loadandfound.js'></script>
            </div>
        </>
    )
}