const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.sendFile('index.html', (err)=> {
        if (err) console.log(err);
    
    });
});

app.listen(port, ()=>{
    console.log(`web page  is listening on port ${port}`)
})

app.post("/newsletter", (req, res)=>{
    console.log(req.body);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const message = req.body.message;
    res.json({first_name:first_name, last_name: last_name, email:email})
    //res.send(`Response from the Server: Hello ${first_name} ${last_name}, thank you for you message!, we will contact you at ${email}`);


})
