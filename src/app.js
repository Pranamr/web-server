const e = require('express');
const express = require('express');
const { dirname } = require('path');
const path = require('path');
const hbs = require('hbs');
const geoCode = require('./utils/geoCode');
const foreCast = require('./utils/weatherForecast')

const app = express();
const portNumber = 3000;

//Define Paths for Express Config
const publicDirectoryPath = path.join(__dirname,'..','/public');
const viewPath = path.join(__dirname, '..', 'templates/views');
const partialPath = path.join(__dirname, '..', 'templates/partials');

//Setup handlebars engine for views locations
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather is Good',
        name: 'Pranam R',
        email: 'pranam@yahoo.com'
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Page',
        name: 'Munchkin',
        email: 'munchkin@yahoo.com'
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name: 'Jaanu',
        email: 'jaanu@yahoo.com'
    });
});

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: 'Help Article not found',
        name : 'Jaanu',
        email : 'jaanu@yaho.com'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
            error: 'Enter the address to search'
        })
        return;
    }else{
        let address = req.query.address;
        geoCode(address,(error,coordinates)=>{
            if(coordinates){
                foreCast(coordinates,(error,success)=>{
                    if(success){
                        res.send({
                            forecast : success.current.weather_descriptions[0],
                            place : success.location.region,
                            address : success.location.country
                        });
                    }else if(error){
                        res.send({
                            error : error
                        })
                    }
                })
            }else if(error){
                res.send({
                    error : error
                })                
            }
        });
    }
    // res.send({
    //     forecast : 'Sunny',
    //     place : 'India',
    //     address : req.query.address
    // });
})



app.get('*',(req,res)=>{
    res.render('404',{
        title: 'Page Not Found',
        name: 'Pranam',
        email: 'pranam@yahoo.com'

    })
})

app.listen(port = portNumber, hostname = '',()=>{
    console.log(__dirname);
    console.log(__filename);
    console.log(path.join(__dirname,'..','public','index.html'));
    console.log('The server is up and running');
});