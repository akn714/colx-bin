import './Sell.css'

export function Sell(){
    return (
        <>
            <form action="http://localhost:3001/api/olx/post_product" method='POST' className='post-form'>
                {/* <input name='name' type="text" className='post-name input' placeholder='your name' /> */}
                {/* <div className='contact-div input'>
                    <div>+91</div>
                    <input name='contact' type="number" min={1000000000} max={9999999999} className='post-contact' placeholder='contect no.' />
                </div> */}
                <input name='title' type="text" className='post-title input' placeholder='What is the name of your product?' />
                <div className='post-textarea'>
                    <p className="desc-title">Product description :</p>
                    <textarea name="description" className='post-desc' cols="30" rows="10" placeholder='Let people know about your product...'></textarea>
                </div>
                <div className="price input">
                    <div>₹</div>
                    <input name='price' type="number" placeholder='00' />
                </div>
                <button type='submit' className='post-submit-btn'>submit</button>
            </form>
        </>
    )
}