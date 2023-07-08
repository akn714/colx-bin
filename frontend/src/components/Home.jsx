import './Home.css'

export function Home(){
    return (
        <>
            <script>
                {
                    fetch('http://localhost:3000/getLF')
                    .then(res => {
                        console.log(res)
                    })
                    .then(data => {
                        console.log(data)
                    })
                }
            </script>
        </>
    )
}