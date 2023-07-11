import './Post_found.css'

export function Post_found(){
    return (
        <>
            <form action="/post_found" method='POST' className='post-found-form'>
                <input name='name' type="text" className='post-found-name' placeholder='your name' />
                <input name='contact' type="text" className='post-found-contact' placeholder='contect no.' />
                <input name='title' type="text" className='post-found-title' placeholder='name of the thing you found' />
                <div className='post-found-textarea'>
                    <p className="desc-title">Tell something about what you found :</p>
                    <textarea name="desc" className='post-found-desc' cols="30" rows="10" placeholder='tell something about what you found'></textarea>
                </div>
                <button type='submit' className='post-found-submit-btn'>post what you found</button>
            </form>
        </>
    )
}