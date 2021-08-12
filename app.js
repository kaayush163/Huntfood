const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
//var mongoose=require('mongoose');
const http = require("http");
/*require('dotenv').config();

let port=process.env.PORT;
let host=process.env.HOST;*/

//in mongo use file nam whatever provide below by you then show collections then find()
//mongoose.connect('mongodb://localhost/contactdone',{useNewUrlParser:true});//contact done ka naam database banayenge ytakki submit button pr click krte hi database show krde
const port = process.env.PORT || 5000;

//Define Mongoose schema tutorial #88 write all from net
/*var contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String
  });*/

/*var Contact = mongoose.model('Contact', contactSchema);*/


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 


// ENDPOINTS
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('home.pug', params);
})


app.get('/about', (req, res)=>{
    
    const params = {}
    res.status(200).render('about.pug', params);
})



app.get('/faq', (req, res)=>{
    
    const params = {}
    res.status(200).render('faq.pug', params);
})



app.get('/contact', (req, res)=>{
    
    const params = {}
    res.status(200).render('contact.pug', params);
})

/*app.post('/contact', (req, res)=>{
    var myData=new Contact(req.body)
    myData.save().then(()=>{//it will save and request tos how by then using
        res.send("this data has benn submitted ")
    }).catch(()=>{// otherwise data not saved
        res.status(400).send("Item was not submitted to database")
    });
    //const params = {}
    //res.status(200).render('contact.pug', params);
})*/










app.get('/res', (req, res)=>{
    
    const params = {}
    res.status(200).render('res.pug', params);
})

app.get('/res/eat', (req, res)=>{
    
    const params = {}
    res.status(200).render('eat.pug', params);
})
app.get('/res/dhaba', (req, res)=>{
    
    const params = {}
    res.status(200).render('dhaba.pug', params);
})

app.get('/res/tat', (req, res)=>{
    
    const params = {}
    res.status(200).render('tat.pug', params);
})
app.get('/res/otm', (req, res)=>{
    
    const params = {}
    res.status(200).render('otm.pug', params);
})
app.get('/res/barb', (req, res)=>{
    
    const params = {}
    res.status(200).render('barb.pug', params);
})
app.get('/res/ah', (req, res)=>{
    
    const params = {}
    res.status(200).render('ah.pug', params);
})









app.get('/groc', (req, res)=>{
    
    const params = {}
    res.status(200).render('groc.pug', params);
})
app.get('/groc/veg', (req, res)=>{
    
    const params = {}
    res.status(200).render('veg.pug', params);
})
app.get('/groc/fru', (req, res)=>{
    
    const params = {}
    res.status(200).render('fru.pug', params);
})
app.get('/groc/root', (req, res)=>{
    
    const params = {}
    res.status(200).render('root.pug', params);
})












app.get('/choc', (req, res)=>{
    
    const params = {}
    res.status(200).render('choc.pug', params);
})
app.get('/choc/cake', (req, res)=>{
    
    const params = {}
    res.status(200).render('cake.pug', params);
})
app.get('/choc/cus', (req, res)=>{
    
    const params = {}
    res.status(200).render('cus.pug', params);
})





app.get('/bev', (req, res)=>{
    
    const params = {}
    res.status(200).render('bev.pug', params);
})
app.get('/bev/beer', (req, res)=>{
    
    const params = {}
    res.status(200).render('beer.pug', params);
})
app.get('/bev/jui', (req, res)=>{
    
    const params = {}
    res.status(200).render('jui.pug', params);
})
app.get('/bev/tea', (req, res)=>{
    
    const params = {}
    res.status(200).render('tea.pug', params);
})






app.get('/form', (req, res)=>{
    
    const params = {}
    res.status(200).render('form.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);


});