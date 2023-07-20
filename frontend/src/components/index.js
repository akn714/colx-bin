// .../olx/buy
export async function fetch_products(){
    console.log('fetching products...');
    document.querySelector('.loader').style.display = "inline-block";
    document.querySelector('.loader-div').style.display = "flex";

    let res = await fetch('http://localhost:3001/fetch_products');

    let data; 
    try{
        data = await res.json();
        console.log(data)
    }
    catch{
        console.log("json not available");
    }

    if(res){
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        if(data["buy"]==undefined || data["buy"].length==0){
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            
            item.innerHTML = `No data available`;
            document.querySelector('#products').appendChild(item);
        }

        for(let i=0;i<data["buy"].length;i++){
            let item = document.createElement('div');

            item.innerHTML = `
                <div class='buy-item item'>
                    <div class='buy-item-title item-title'>
                        <h4 class='item-lable'>Title: </h4>
                        <h4 class='item-value'>${data["buy"][i].title}</h4>
                    </div>
                    <div class='buy-item-price item-price'>
                        <p class='item-price-title'>Price</p>
                        <p class='item-price-value'>₹${data["buy"][i].price}</p>
                    </div>
                    <div class='buy-item-desc item-desc'>
                        <div class='item-lable'>Description: </div>
                        <div class='item-value'>${data["buy"][i].desc}</div>
                    </div>
                    <div class="buy-item-contact">
                        <div class='buy-item-contact-name'>
                            <p class='buy-item-contact-title'>Posted by : </p>
                            <p class='buy-item-contact-title-value'>${data["buy"][i].seller}</p>
                        </div>
                        <div class='buy-item-contact-pno'>
                            <p class='buy-item-contact-title'>Contact No. : </p>
                            <p class='buy-item-contact-title-value'>${data["buy"][i].seller_contact}</p>
                        </div>
                    </div>
                </div>
            `
            document.querySelector('#products').appendChild(item);
        }
    }
}








// .../complaints
export async function get_complaints(){
    console.log('fetching complaints...');
    document.querySelector('.loader').style.display = "inline-block";
    document.querySelector('.loader-div').style.display = "flex";

    let res = await fetch('http://localhost:3001/get_complaints');
   
    let data;
    try{
        data = await res.json();
        console.log(data)
    }
    catch{
        console.log("json not available");
    }


    if(res){
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        if(data["complaints"]==undefined || data["complaints"].length==0){
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            
            item.innerHTML = `No data available`;
            document.querySelector('#complaints').appendChild(item);
            return
        }
        
        for(let i=0;i<data["complaints"].length;i++){
            let item = document.createElement('div');

            item.innerHTML = `
                <div class='co-item item'>
                    <div class='buy-item-title item-title'>
                        <h4 class='item-lable'>Title: </h4>
                        <h4 class='item-value'>${data["complaints"][i].title}</h4>
                    </div>
                    <div class='buy-item-desc item-desc'>
                        <div class='item-lable'>Description: </div>
                        <div class='item-value'>${data["complaints"][i].desc}</div>
                    </div>
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

console.log('this is index.js')
// .../lost_and_found
export async function get_lost_found(){
    console.log("called get_lost_found")
    console.log('fetching lost and found...');
    console.log('loader is visible');
    document.querySelector('.loader').style.display = "inline-block";
    document.querySelector('.loader-div').style.display = "flex";

    let res = await fetch('http://localhost:3001/get_lost_found');

    let data;
    try{
        data = await res.json();
        console.log(data)
    }
    catch{
        console.log("json not available");
    }


    if(res){
        console.log('[+] lost and found: ', data)
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";
        
        if(data["lost_and_found"]==undefined || data["lost_and_found"].length==0){
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            
            item.innerHTML = `No data available`;
            document.querySelector('#lost_and_found').appendChild(item);
            return
        }

        for(let i=0;i<data["lost_and_found"].length;i++){
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            
            item.innerHTML = `
                <div class='buy-item-title item-title'>
                    <h4 class='item-lable'>Title: </h4>
                    <h4 class='item-value'>${data["lost_and_found"][i].title}</h4>
                </div>
                <div class='buy-item-desc item-desc'>
                    <div class='item-lable'>Description: </div>
                    <div class='item-value'>${data["lost_and_found"][i].desc}</div>
                </div>
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
            document.querySelector('#lost_and_found').appendChild(item);
        }
    }
}