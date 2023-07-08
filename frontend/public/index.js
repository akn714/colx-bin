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
                <h1>${data[Object.keys(data)[i]].author}</h1>
                <h2>${data[Object.keys(data)[i]].data}</h2>
            `;
            document.querySelector('.complaints').appendChild(item);
        }
    }
}


async function get_lost_found(){
    console.log('fetching...');
    document.querySelector('.lf_loader').style.display = "inline-block";

    let res = await fetch('http://localhost:3001/get_lost_found');

    let data = await res.json();

    console.log(data)

    if(res){
        document.querySelector('.lf_loader').style.display = "none";

        for(let i=0;i<Object.keys(data).length;i++){
            let item = document.createElement('div');
            item.innerHTML = `
                <h1>${data[Object.keys(data)[i]].author}</h1>
                <h2>${data[Object.keys(data)[i]].data}</h2>
            `;
            document.querySelector('.lost_found').appendChild(item);
        }
    }
}