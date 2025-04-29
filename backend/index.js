const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// Use body-parser middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.urlencoded())

// fetching products for selling
app.get('/fetch_products', (req, res)=>{
    let data = fs.readFileSync(__dirname + '/views/olx.json', 'utf-8');

    console.log('[+] fetching products...')
    console.log('[+] products: ', data)
    // if(data==''){
    //     fs.writeFileSync(__dirname + '/views/olx.json', '{"lost_and_found":[]}')
    // }

    if(data==''){
        res.send('{}');
    }
    else{
        res.send(data);
    }
    // setTimeout(() => {
        // res.send(data);
    // }, 1000);
})


// getting lost found
app.get('/get_lost_found', (req, res)=>{
    let data;
    data = fs.readFileSync(__dirname + '/views/lost_found.json', 'utf-8');

    console.log('[+] fetching lost and found...')
    console.log('[+] lost and found: ', data)
    console.log('[+]',typeof(data));
    if(data==''){
        fs.writeFileSync(__dirname + '/views/lost_found.json', '{"lost_and_found":[]}')
        data = '{"lost_and_found":[]}'
    }

    if(data==''){
        res.send('{}');
    }
    else{
        res.send(data);
    }
    // setTimeout(() => {
        // res.send(data);
    // }, 1000);
})

// adding a post to lost_found.json
app.post('/add_to_lost_found', (req, res)=>{
    
    // getting post details
    let author = req.body.author;
    let newdata = req.body.data;

    // generating unique id
    let get_unique_id = () => {
        uniqueId = Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
        return uniqueId
    }
    
    // reading from lost_found.json
    let data = fs.readFileSync(__dirname + '/views/lost_found.json', 'utf-8');
    let json = JSON.parse(data);
    
    // adding new entry to json
    json[get_unique_id()] = {
        "author" : author,
        "data" : newdata
    }

    // writing to lost_found.json
    fs.writeFileSync(__dirname + '/views/lost_found.json', JSON.stringify(json));
    
    // redirecting to home
    res.redirect('/');
});

// post found
app.post('/post_found', (req, res)=>{
    let name = req.body.name;
    let contact = req.body.contact;
    let title = req.body.title;
    let desc = req.body.desc;

    let db = fs.readFileSync(__dirname + '/views/lost_found.json', 'utf-8');
    let db_json;

    console.log(JSON.parse(db))
    try{
        db_json = JSON.parse(db);
        console.log(db_json["lost_and_found"])
        if(db_json=={}){
            db_json["lost_and_found"] = []
        }
    }
    catch{
        db_json = {};
        db_json["lost_and_found"] = []
    }

    db_json["lost_and_found"].push({
        "type":"found",
        "author": name,
        "contactMe": contact,
        "title": title,
        "desc": desc
    })

    fs.writeFileSync(__dirname + '/views/lost_found.json', JSON.stringify(db_json));

    // res.redirect('/lost_and_found/lost_and_found');
    res.redirect('/lost_and_found/lost_and_found');
})

app.post('/post_lost', (req, res)=>{
    let name = req.body.name;
    let contact = req.body.contact;
    let title = req.body.title;
    let desc = req.body.desc;

    let db = fs.readFileSync(__dirname + '/views/lost_found.json', 'utf-8');
    let db_json;

    try{
        db_json = JSON.parse(db);
        console.log(db_json["lost_and_found"])
        if(db_json=={}){
            db_json["lost_and_found"] = []
        }
    }
    catch{
        db_json = {};
        db_json["lost_and_found"] = []
    }

    db_json["lost_and_found"].push({
        "type":"lost",
        "author": name,
        "contactMe": contact,
        "title": title,
        "desc": desc
    })

    fs.writeFileSync(__dirname + '/views/lost_found.json', JSON.stringify(db_json));

    // res.redirect('/lost_and_found/lost_and_found');
    res.redirect('/lost_and_found/lost_and_found');
})

app.post('/post_product', (req, res)=>{
    let name = req.body.name;
    let contact = req.body.contact;
    let price = req.body.price;
    let title = req.body.title;
    let desc = req.body.desc;

    let db = fs.readFileSync(__dirname + '/views/olx.json', 'utf-8');
    let db_json;

    try{
        db_json = JSON.parse(db);
        console.log(db_json)
        if(db_json=={}){
            db_json["buy"] = []
        }
    }
    catch{
        db_json = {};
        db_json["buy"] = []
    }

    db_json["buy"].push({
        "seller": name,
        "seller_contact": contact,
        "price": price,
        "title": title,
        "desc": desc
    })

    fs.writeFileSync(__dirname + '/views/olx.json', JSON.stringify(db_json));

    // res.redirect('/olx/buy');
    res.redirect('/olx/buy');
})

// deleting a post from lost_found.json
app.post('/delete_from_lost_found', (req, res)=>{
    // getting id to delete
    let id = req.body.id;
    
    // reading from lost_found.json
    let data = fs.readFileSync(__dirname + '/views/lost_found.json', 'utf-8');
    let json = JSON.parse(data);
    
    // deleting a post having id = req.body.id
    delete json[id];
    
    // writing to lost_found.json
    fs.writeFileSync(__dirname + '/views/lost_found.json', JSON.stringify(json));
    
    // redirecting to home
    res.redirect('/');
});

// adding complaints
app.post('/post_complaint', (req, res)=>{
    let name = req.body.name;
    let contact = req.body.contact;
    let title = req.body.title;
    let desc = req.body.desc;

    let db = fs.readFileSync(__dirname + '/views/complaints.json', 'utf-8');
    let db_json;

    try{
        db_json = JSON.parse(db);
        console.log(db_json["complaints"])
        if(db_json=={}){
            db_json["complaints"] = []
        }
    }
    catch{
        db_json = {};
        db_json["complaints"] = []
    }

    db_json["complaints"].push({
        "author": name,
        "contactMe": contact,
        "title": title,
        "desc": desc
    })

    fs.writeFileSync(__dirname + '/views/complaints.json', JSON.stringify(db_json));

    // res.redirect('/lost_and_found/lost_and_found');
    res.redirect('/complaints/complaints');
})

// getting all complaints
app.get('/get_complaints', (req, res)=>{
    let data;
    data = fs.readFileSync(__dirname + '/views/complaints.json', 'utf-8');
    
    console.log('[+] fetching complaints...')
    // console.log('[+] ',data)
    console.log('[+]',typeof(data));
    if(data==''){
        fs.writeFileSync(__dirname + '/views/complaints.json', '{"complaints":[]}')
        data = '{"complaints":[]}';
    }
    
    // setTimeout(() => {
        res.send(data);
    // }, 1000);
})

// adding a new post to complaints.json
app.post('/add_to_complaints', (req, res)=>{
    
    // getting post details
    let author = req.body.author;
    let newdata = req.body.data;
    
    // generating unique id
    let get_unique_id = () => {
        uniqueId = Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
        return uniqueId
    }
    
    // reading from complaints.json
    let data = fs.readFileSync(__dirname + '/views/complaints.json', 'utf-8');
    let json = JSON.parse(data);
    
    // adding new entry to json
    json[get_unique_id()] = {
        "author" : author,
        "data" : newdata
    }

    // writing to complaints.json
    fs.writeFileSync(__dirname + '/views/complaints.json', JSON.stringify(json));
    
    // redirecting to home
    res.redirect('/');
});

// deleting a post from complaints.json
app.post('/delete_from_complaints', (req, res)=>{
    // getting id to delete
    let id = req.body.id;
    
    // reading from complaints.json
    let data = fs.readFileSync(__dirname + '/views/complaints.json', 'utf-8');
    let json = JSON.parse(data);
    
    // deleting a post having id = req.body.id
    delete json[id];
    
    // writing to complaints.json
    fs.writeFileSync(__dirname + '/views/complaints.json', JSON.stringify(json));
    
    // redirecting to home
    res.redirect('/');
});




// static middleware
app.use(express.static('views'));

// root router
app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

// listening the server
app.listen('3000', ()=>{
    console.log('[+] server is running on port 3000...');
})
