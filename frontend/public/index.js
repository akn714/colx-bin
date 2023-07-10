// .../olx/buy
async function fetch_products(){
    console.log('fetching products...');
    document.querySelector('.loader').style.display = "inline-block";

    let res = await fetch('http://localhost:3001/fetch_products');

    let data = await res.json();

    console.log(data)

    if(res){
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        for(let i=0;i<data["buy"].length;i++){
            let item = document.createElement('div');

            item.innerHTML = `
                <div class='buy-item item'>
                    <h4 class='buy-item-title item-title'>${data["buy"][i].title}</h4>
                    <p class='buy-item-desc item-desc'>${data["buy"][i].desc}</p>
                    <div class="buy-item-contact">
                        <div class='buy-item-contact-name'>
                            <p class='buy-item-contact-title'>Posted by : </p>
                            <p class='buy-item-contact-title-value'>${data["buy"][i].author}</p>
                        </div>
                        <div class='buy-item-contact-pno'>
                            <p class='buy-item-contact-title'>Contact No. : </p>
                            <p class='buy-item-contact-title-value'>${data["buy"][i].contactMe}</p>
                        </div>
                    </div>
                </div>
            `
            document.querySelector('#products').appendChild(item);
        }
    }
}








// .../complaints
async function get_complaints(){
    console.log('fetching complaints...');
    document.querySelector('.loader').style.display = "inline-block";

    let res = await fetch('http://localhost:3001/get_complaints');

    let data = await res.json();

    console.log(data)

    if(res){
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        for(let i=0;i<data["complaints"].length;i++){
            let item = document.createElement('div');

            item.innerHTML = `
                <div class='co-item item'>
                    <h4 class='co-item-title item-title'>${data["complaints"][i].title}</h4>
                    <p class='co-item-desc item-desc'>${data["complaints"][i].desc}</p>
                    <div class="co-item-contact">
                        <div class='co-item-contact-name'>
                            <p class='co-item-contact-title'>Posted by : </p>
                            <p class='co-item-contact-title-value'>${data["complaints"][i].author}</p>
                        </div>
                        <div class='co-item-contact-pno'>
                            <p class='co-item-contact-title'>Contact No. : </p>
                            <p class='co-item-contact-title-value'>${data["complaints"][i].contactMe}</p>
                        </div>
                    </div>
                </div>
            `
            document.querySelector('#complaints').appendChild(item);
        }
    }
}

// .../lost_and_found
async function get_lost_found(){
    console.log("called get_lost_found")
    console.log('fetching lost and found...');
    document.querySelector('.loader').style.display = "inline-block";

    let res = await fetch('http://localhost:3001/get_lost_found');

    let data = await res.json();

    console.log(data)

    if(res){
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        
        console.log(data["lost_and_found"].length);
        for(let i=0;i<data["lost_and_found"].length;i++){
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-tem item');
            
            item.innerHTML = `
                <h4 class='lf-item-title item-title'>${data["lost_and_found"][i].title}</h4>
                <p class='lf-item-desc item-desc'>${data["lost_and_found"][i].desc}</p>
                <div class="lf-item-contact">
                    <div class='lf-item-contact-name'>
                        <p class='lf-item-contact-title'>Posted by : </p>
                        <p class='lf-item-contact-title-value'>${data["lost_and_found"][i].author}</p>
                    </div>
                    <div class='lf-item-contact-pno'>
                        <p class='lf-item-contact-title'>Contact No. : </p>
                        <p class='lf-item-contact-title-value'>${data["lost_and_found"][i].contactMe}</p>
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