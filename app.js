require("dotenv").config(); 
console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS set =", !!process.env.EMAIL_PASS);

const express = require("express");
const nodemailer = require("nodemailer");
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

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post("/newsletter",  async (req, res)=>{
    console.log(req.body);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const message = req.body.message;
  
    //to send an email :)

    let bodytext = `hi ${first_name} ${last_name}, \n\n` + 
        `Thank you for signing up to our weekly Newsletter!\n`+
        `You're now subscribed with the email address: ${email}.\n\n`;
    if (message && message.trim()!== ""){
        bodytext+= 
        `We have noted what you are most interested in learning about: \n`+
        `"${message.trim()}"\n`+
        `and we will start reflecting this in future newsletter content.\n\n`;
    }
    bodytext+= "Best Wishes, \n The ________ team";
    
    try{
        console.log("about to send mail with: ", process.env.EMAIL_USER);
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email, 
            subject: "Confirmation of our Global Goals Newsletter",
            text: bodytext
        });
        console.log("MAIL sent ok")
    res.json({ first_name, last_name, email, message});
    }catch (err){
        console.error("MAIL ERROR", err);
        res.status(500).json( {error: "Failed to send confirmation email"})
    }

    }

    
    

);


