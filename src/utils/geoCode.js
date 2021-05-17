const { response } = require('express');
const request = require('request');

const geoCode = (location,callBack)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoicHJhbmFtciIsImEiOiJja29jcmozczEwY2twMndtcjQzZmVxZXNsIn0.VUXUaek0uIzDOLr6uJEu9A';
    request.get({
        uri:url,
        json:true
       },(error,response)=>{
           console.log(response.body.features);
           if(error){
               callBack(error,undefined);
           }else if(response.body.features.length === 0){
               callBack('Invalid Entry',undefined);
           }
           else{
            let data = {
                placeName : response.body.features[0].place_name,
                latLong   : response.body.features[0].center
            }               
            callBack(undefined,data);
           }
        });
}

module.exports = geoCode;