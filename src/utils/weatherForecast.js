const { response } = require('express');
const request = require('request');

const foreCast = (coordinates,callBack)=>{
    let  latitude = coordinates.latLong[1];
    let  longitude = coordinates.latLong[0];
    const url = 'http://api.weatherstack.com/current?access_key=a53916c0cd60f25dc035cbdd4be19c81&query='+latitude+','+longitude;
    request.get({uri : url,
                 json: true},(error,response)=>{
                     if(error){
                         callBack(error,undefined);
                     }else if(response){
                         callBack(undefined,response.body);
                     }
                 })

}

module.exports = foreCast;