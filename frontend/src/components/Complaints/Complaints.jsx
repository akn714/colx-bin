import './Complaints.css'
import { Link } from 'react-router-dom'

export function Complaints(){
    console.log("complaints function called");
    return (
        <>
            <div className="complaints ">
                <div className="title">
                    <h1>Complaints</h1>
                </div>

                {/*  */}
                <button onClick={get_complaints}>fetch complaints</button>
                <span className='co_loader' style={{"display":"none "}}></span>
                <div className='complaints'></div>
                {/*  */}

                <div className="main">
                    <Link to='/' className='back-btn'>{"<"}</Link>
                    <div className='co-item item'>
                        <h4 className='co-item-title item-title'>some title</h4>
                        <p className='co-item-desc item-desc'>this is the description of the post.</p>
                        <div className="co-item-contact">
                            <div className='co-item-contact-name'>
                                <p className='co-item-contact-title'>Posted by : </p>
                                <p className='co-item-contact-title-value'>name</p>
                            </div>
                            <div className='co-item-contact-pno'>
                                <p className='co-item-contact-title'>Contact No. : </p>
                                <p className='co-item-contact-title-value'>9374863786</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}