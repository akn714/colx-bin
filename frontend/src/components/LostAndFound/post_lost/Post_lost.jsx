import './Post_lost.css'

export function Post_lost(){
    return (
        <>
            <form action="/post_lost" method='POST' className='post-lost-form'>
                <input name='name' type="text" className='post-lost-name' placeholder='your name' />
                <input name='contact' type="text" className='post-lost-contact' placeholder='contect no.' />
                <input name='title' type="text" className='post-lost-title' placeholder='name of the thing you lost' />
                <div className='post-lost-textarea'>
                    <p className="desc-title">Tell something about what you lost :</p>
                    <textarea name="desc" className='post-lost-desc' cols="30" rows="10" placeholder='tell something about what you lost'></textarea>
                </div>
                <button type='submit' className='post-lost-submit-btn'>post what you lost</button>
            </form>
        </>
    )
}