const request =require('request');
var geocodeAddress =(address,callback)=>{
  const url ='https://maps.googleapis.com/maps/api/geocode/json';
  request({
    url: url,
    json:true,
    qs:{
      address:encodeURIComponent(address),
      key:'AIzaSyBlxY7AFq1d5C8ga5kWbzL9bSFYm2bSJck'
    }
  },(err,res,body)=>{
    if(err){
      callback(err);
      return
    }
     callback(undefined, {
       address:body.results[0].formatted_address,
       lattitude:body.results[0].geometry.location.lat,
       longitude:body.results[0].geometry.location.lng
     });

  })
};

var geocodeTemperature =(lat,lng, callback)=>{
  const url =`https://api.darksky.net/forecast/9dc57361e8eda8892b2d04873af09383/${lat},${lng}`;
  request({
    url: url,
    json:true,
  },(err,res,body)=>{
    if(err){
      callback(err);
      return
    }
     callback(undefined, {
       temperature:body.currently.temperature,
       apparenttemperature:body.currently.apparentTemperature,
     });

  })
};
var promiseAddress =(address)=>{

  return new Promise((resolve,reject)=>{
    const url ='https://maps.googleapis.com/maps/api/geocode/json';
    request({
    url: url,
    json:true,
    qs:{
      address:encodeURIComponent(address),
      key:'AIzaSyBlxY7AFq1d5C8ga5kWbzL9bSFYm2bSJck'
    }
  },(err,res,body)=>{
    if(err){
      reject(err);
    }else if (body.status ==='ZERO_RESULTS'){
      reject('NO FOUD 404');
    }
    else if (body.status ==='OK'){
      resolve({
        address:body.results[0].formatted_address,
        lattitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      });
    }
  })
})
};

var promiseTemperature =(lat,lng)=>{
  return new Promise((resolve,reject)=>{
  const url =`https://api.darksky.net/forecast/9dc57361e8eda8892b2d04873af09383/${lat},${lng}`;
  request({
    url: url,
    json:true,
  },(err,res,body)=>{
    if(err){
      reject(err);
    }else {
      resolve({
        temperature:body.currently.temperature,
        apparenttemperature:body.currently.apparentTemperature,
      });
    }
  })
  })
};
module.exports={
  geocodeAddress,
  geocodeTemperature,
  promiseAddress,
  promiseTemperature
}
