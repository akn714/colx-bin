import axios from "axios";

const URL = 'http://localhost:3001';
// const URL = '';

function escapeHTML(str) {
    // if (!str) return "Not provided";
    // return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return str;
}

function toggleLoader(show) {
    document.querySelector('.loader').style.display = show ? "inline-block" : "none";
    document.querySelector('.loader-div').style.display = show ? "flex" : "none";
}

// .../olx/buy
export async function fetch_products() {
    console.log('Fetching OLX products...');
    toggleLoader(true);

    try {
        let res = await axios(`${URL}/api/olx/fetch_products`);
        let data = res.data;

        const container = document.querySelector('#products');
        container.innerHTML = '';
        toggleLoader(false);

        if (!Array.isArray(data) || data.length === 0) {
            container.innerHTML = `<div class='lf-item item'>No data available</div>`;
            return;
        }

        data.forEach(prod => {
            const item = document.createElement('div');
            item.innerHTML = `
                <div class='buy-item item'>
                    <div class='buy-item-title item-title'>
                        <h4 class='item-lable'>Title: </h4>
                        <h4 class='item-value'>${escapeHTML(prod.title)}</h4>
                    </div>
                    <div class='buy-item-price item-price'>
                        <p class='item-price-title'>Price</p>
                        <p class='item-price-value'>₹${escapeHTML(prod.price)}</p>
                    </div>
                    <div class='buy-item-desc item-desc'>
                        <div class='item-lable'>Description: </div>
                        <div class='item-value'>${escapeHTML(prod.desc)}</div>
                    </div>
                    <div class="buy-item-contact">
                        <div class='buy-item-contact-name'>
                            <p class='buy-item-contact-title'>Posted by : </p>
                            <p class='buy-item-contact-title-value'>${escapeHTML(prod.seller)}</p>
                        </div>
                        <div class='buy-item-contact-pno'>
                            <p class='buy-item-contact-title'>Contact No. : </p>
                            <p class='buy-item-contact-title-value'>${escapeHTML(prod.seller_contact)}</p>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

    } catch (err) {
        const container = document.querySelector('#products');
        container.innerHTML = '';
        container.innerHTML = `<div class='lf-item item'>An error occured!</div>`;
        console.error("Failed to fetch products:", err);
        toggleLoader(false);
    }
}

// .../complaints
export async function get_complaints() {
    console.log('Fetching complaints...');
    toggleLoader(true);

    try {
        let res = await fetch(`${URL}/get_complaints`);
        let data = await res.json();

        const container = document.querySelector('#complaints');
        container.innerHTML = '';
        toggleLoader(false);

        if (!data.complaints || data.complaints.length === 0) {
            container.innerHTML = `<div class='lf-item item'>No data available</div>`;
            return;
        }

        data.complaints.forEach(co => {
            const item = document.createElement('div');
            item.innerHTML = `
                <div class='co-item item'>
                    <div class='buy-item-title item-title'>
                        <h4 class='item-lable'>Title: </h4>
                        <h4 class='item-value'>${escapeHTML(co.title)}</h4>
                    </div>
                    <div class='buy-item-desc item-desc'>
                        <div class='item-lable'>Description: </div>
                        <div class='item-value'>${escapeHTML(co.desc)}</div>
                    </div>
                    <div class="co-item-contact">
                        <div class='co-item-contact-name'>
                            <p class='co-item-contact-title'>Posted by : </p>
                            <p class='co-item-contact-title-value'>${escapeHTML(co.author)}</p>
                        </div>
                        <div class='co-item-contact-pno'>
                            <p class='co-item-contact-title'>Contact No. : </p>
                            <p class='co-item-contact-title-value'>${escapeHTML(co.contactMe)}</p>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

    } catch (err) {
        console.error("Failed to fetch complaints:", err);
        toggleLoader(false);
    }
}

// .../lost_and_found
export async function get_lost_found() {
    console.log("Fetching lost & found...");
    toggleLoader(true);

    try {
        let res = await fetch(`${URL}/api/laf/get_lost_found`);
        let data = await res.json();

        const container = document.querySelector('#lost_and_found');
        container.innerHTML = '';
        toggleLoader(false);

        if (!data.lost_and_found || data.lost_and_found.length === 0) {
            container.innerHTML = `<div class='lf-item item'>No data available</div>`;
            return;
        }

        data.lost_and_found.forEach(lf => {
            const item = document.createElement('div');
            item.className = 'lf-item item';
            item.innerHTML = `
                <div class='buy-item-title item-title'>
                    <h4 class='item-lable'>Title: </h4>
                    <h4 class='item-value'>${escapeHTML(lf.title)}</h4>
                </div>
                <div class='buy-item-desc item-desc'>
                    <div class='item-lable'>Description: </div>
                    <div class='item-value'>${escapeHTML(lf.desc)}</div>
                </div>
                <div class="lf-item-contact">
                    <div class='lf-item-contact-name'>
                        <p class='lf-item-contact-title'>Posted by : </p>
                        <p class='lf-item-contact-title-value'>${escapeHTML(lf.author)}</p>
                    </div>
                    <div class='lf-item-contact-pno'>
                        <p class='lf-item-contact-title'>Contact No. : </p>
                        <p class='lf-item-contact-title-value'>${escapeHTML(lf.contactMe)}</p>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

    } catch (err) {
        const container = document.querySelector('#lost_and_found');
        container.innerHTML = '';
        container.innerHTML = `<div class='lf-item item'>An error occured!</div>`;
        console.error("Failed to fetch lost & found:", err);
        toggleLoader(false);
    }
}

console.log('this is index.js');
