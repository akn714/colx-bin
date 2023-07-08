import './Home.css'
import { Link } from 'react-router-dom'

export function Home(){
    return (
        <>
            <h1>
                <Link to='/lost_and_found'>Lost and Found</Link>
                <br />
                <Link to='/complaints'>Complaints</Link>
            </h1>
        </>
    )
}