async function get_complaints(){
    console.log('fetching...');
    document.querySelector('.co_loader').style.display = "inline-block";

    let res = await fetch('http://localhost:3001/get_complaints');

    let data = await res.json();

    console.log(data)

    if(res){
        document.querySelector('.co_loader').style.display = "none";

        for(let i=0;i<Object.keys(data).length;i++){
            let item = document.createElement('div');
            item.innerHTML = `
                <h1>${data["lost_and_found"][i].author}</h1>
                <h2>${data["lost_and_found"][i].data}</h2>
            `;
            document.querySelector('.complaints').appendChild(item);
        }
    }
}


async function get_lost_found(){
    console.log("called get_lost_found")
    console.log('fetching...');
    document.querySelector('.lf_loader').style.display = "inline-block";

    let res = await fetch('http://localhost:3001/get_lost_found');

    let data = await res.json();

    console.log(data)

    if(res){
        document.querySelector('.lf_loader').style.display = "none";

        
        console.log(data["lost_and_found"].length);
        for(let i=0;i<data["lost_and_found"].length;i++){
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-tem item');
            
            item.innerHTML = `
                <h4 className='lf-item-title item-title'>${data["lost_and_found"][i].title}</h4>
                <p className='lf-item-desc item-desc'>${data["lost_and_found"][i].desc}</p>
                <div className="lf-item-contact">
                    <div className='lf-item-contact-name'>
                        <p className='lf-item-contact-title'>Posted by : </p>
                        <p className='lf-item-contact-title-value'>${data["lost_and_found"][i].author}</p>
                    </div>
                    <div className='lf-item-contact-pno'>
                        <p className='lf-item-contact-title'>Contact No. : </p>
                        <p className='lf-item-contact-title-value'>${data["lost_and_found"][i].contactMe}</p>
                    </div>
                </div>
            `;
            document.querySelector('#lostandfound').appendChild(item);
        }
    }
}


document.body.addEventListener('onload', ()=>{
    console.log('loaded')
})
console.log('asdf');