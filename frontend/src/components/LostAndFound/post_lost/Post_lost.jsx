import './Post_lost.css'

export function Post_lost(){
    return (
        <>
            <form action="http://localhost:3001/post_lost" method='POST' className='post-form'>
                <input name='name' type="text" className='post-name input' placeholder='your name' />
                <div className='contact-div input'>
                    <div>+91</div>
                    <input name='contact' type="number" min={1000000000} max={9999999999} className='post-contact' placeholder='contect no.' />
                </div>
                <input name='title' type="text" className='post-title input' placeholder='name of the thing you lost' />
                <div className='post-textarea'>
                    <p className="desc-title">Tell something about what you lost :</p>
                    <textarea name="desc" className='post-desc' cols="30" rows="10" placeholder='tell something about what you lost'></textarea>
                </div>
                <button type='submit' className='post-submit-btn'>post what you lost</button>
            </form>
        </>
    )
}