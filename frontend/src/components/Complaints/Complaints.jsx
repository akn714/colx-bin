import './Complaints.css'

export function Complaints(){
    return (
        <>
            <h1>Complaints</h1>
            <button onClick={get_complaints}>fetch complaints</button>
            <span className='co_loader' style={{"display":"none "}}></span>
            <div className='complaints'></div>
        </>
    )
}