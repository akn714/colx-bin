// Escape HTML for safety
function escapeHTML(str) {
    if (!str) return "Not provided";
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// .../olx/buy
export async function fetch_products(){
    console.log('fetching products...');
    document.querySelector('.loader').style.display = "inline-block";
    document.querySelector('.loader-div').style.display = "flex";

    let res = await fetch('http://localhost:3001/api/olx/fetch_products');

    let data; 
    try {
        data = await res.json();
        console.log(data);
    } catch {
        console.log("json not available");
    }

    if (res.ok) {
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        const container = document.querySelector('#products');
        container.innerHTML = ''; // Clear previous

        if (!data || data.length === 0) {
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            item.innerHTML = `No data available`;
            container.appendChild(item);
            return;
        }

        for (let i = 0; i < data.length; i++) {
            let item = document.createElement('div');

            item.innerHTML = `
                <div class='buy-item item'>
                    <div class='buy-item-title item-title'>
                        <h4 class='item-lable'>Title: </h4>
                        <h4 class='item-value'>${escapeHTML(data[i].title)}</h4>
                    </div>
                    <div class='buy-item-price item-price'>
                        <p class='item-price-title'>Price</p>
                        <p class='item-price-value'>₹${escapeHTML(data[i].price)}</p>
                    </div>
                    <div class='buy-item-desc item-desc'>
                        <div class='item-lable'>Description: </div>
                        <div class='item-value'>${escapeHTML(data[i].desc)}</div>
                    </div>
                    <div class="buy-item-contact">
                        <div class='buy-item-contact-name'>
                            <p class='buy-item-contact-title'>Posted by : </p>
                            <p class='buy-item-contact-title-value'>${escapeHTML(data[i].seller)}</p>
                        </div>
                        <div class='buy-item-contact-pno'>
                            <p class='buy-item-contact-title'>Contact No. : </p>
                            <p class='buy-item-contact-title-value'>${escapeHTML(data[i].seller_contact)}</p>
                        </div>
                    </div>
                </div>
            `
            container.appendChild(item);
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
    try {
        data = await res.json();
        console.log(data);
    } catch {
        console.log("json not available");
    }

    if (res.ok) {
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        const container = document.querySelector('#complaints');
        container.innerHTML = '';

        if (!data["complaints"] || data["complaints"].length === 0) {
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            item.innerHTML = `No data available`;
            container.appendChild(item);
            return;
        }

        for (let i = 0; i < data["complaints"].length; i++) {
            let item = document.createElement('div');

            item.innerHTML = `
                <div class='co-item item'>
                    <div class='buy-item-title item-title'>
                        <h4 class='item-lable'>Title: </h4>
                        <h4 class='item-value'>${escapeHTML(data["complaints"][i].title)}</h4>
                    </div>
                    <div class='buy-item-desc item-desc'>
                        <div class='item-lable'>Description: </div>
                        <div class='item-value'>${escapeHTML(data["complaints"][i].desc)}</div>
                    </div>
                    <div class="co-item-contact">
                        <div class='co-item-contact-name'>
                            <p class='co-item-contact-title'>Posted by : </p>
                            <p class='co-item-contact-title-value'>${escapeHTML(data["complaints"][i].author)}</p>
                        </div>
                        <div class='co-item-contact-pno'>
                            <p class='co-item-contact-title'>Contact No. : </p>
                            <p class='co-item-contact-title-value'>${escapeHTML(data["complaints"][i].contactMe)}</p>
                        </div>
                    </div>
                </div>
            `
            container.appendChild(item);
        }
    }
}

// .../lost_and_found
export async function get_lost_found(){
    console.log("called get_lost_found");
    document.querySelector('.loader').style.display = "inline-block";
    document.querySelector('.loader-div').style.display = "flex";

    let res = await fetch('http://localhost:3001/api/laf/get_lost_found');

    let data;
    try {
        data = await res.json();
        console.log(data);
    } catch {
        console.log("json not available");
    }

    if (res.ok) {
        document.querySelector('.loader-div').style.display = "none";
        document.querySelector('.loader').style.display = "none";

        const container = document.querySelector('#lost_and_found');
        container.innerHTML = '';

        if (!data["lost_and_found"] || data["lost_and_found"].length === 0) {
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');
            item.innerHTML = `No data available`;
            container.appendChild(item);
            return;
        }

        for (let i = 0; i < data["lost_and_found"].length; i++) {
            let item = document.createElement('div');
            item.setAttribute('class', 'lf-item item');

            item.innerHTML = `
                <div class='buy-item-title item-title'>
                    <h4 class='item-lable'>Title: </h4>
                    <h4 class='item-value'>${escapeHTML(data["lost_and_found"][i].title)}</h4>
                </div>
                <div class='buy-item-desc item-desc'>
                    <div class='item-lable'>Description: </div>
                    <div class='item-value'>${escapeHTML(data["lost_and_found"][i].desc)}</div>
                </div>
                <div class="lf-item-contact">
                    <div class='lf-item-contact-name'>
                        <p class='lf-item-contact-title'>Posted by : </p>
                        <p class='lf-item-contact-title-value'>${escapeHTML(data["lost_and_found"][i].author)}</p>
                    </div>
                    <div class='lf-item-contact-pno'>
                        <p class='lf-item-contact-title'>Contact No. : </p>
                        <p class='lf-item-contact-title-value'>${escapeHTML(data["lost_and_found"][i].contactMe)}</p>
                    </div>
                </div>
            `;
            container.appendChild(item);
        }
    }
}

console.log('this is index.js');
