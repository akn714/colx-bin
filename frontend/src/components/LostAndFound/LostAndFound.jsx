import './LostAndFound.css'

export function LostAndFound(){
    return (
        <>
            <h1>Lost and Found</h1>
            <button onClick={get_lost_found}>fetch lost found</button>
            <span className='lf_loader' style={{"display":"none"}}></span>
            <div className='lost_found'></div>
        </>
    )
}