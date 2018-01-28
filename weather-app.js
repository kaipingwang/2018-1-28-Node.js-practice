/*
var getUser =(id,callback)=>{
  var user ={
    id:id,
    name:'kevin'
  }
  setTimeout(()=>{
    callback(user)
  },1000);

}
getUser(31,(obj)=>{
  console.log(obj);
});

const obj ={res:"200", body:"data"}
const err ={res:"400", body:"no found"}
var somPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    //resolve(obj);
    reject(err);
  },1000);

});
somPromise.then((res)=>{
  console.log(res);
},(err)=>{
  console.log(err);
});
*/
var asynAdd =(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      (typeof a=='number'&& typeof b=='number') ? resolve(a+b):reject("no no no")
    },1000);
  });
}
/*
asynAdd(5,7).then((res)=>{
  console.log(res);
  return asynAdd(res,22)
},(err)=>{
  console.log(err);
}).then((res)=>{
  console.log(res);
},(err)=>{
  console.log(err);
})// it  wil show undefined

// to solve this issue we can use catch
asynAdd(5,"2").then((res)=>{
  console.log(res);
  return asynAdd(res,22)
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
*/
const geocode = require('./geocode.js');
const yargs =require('yargs');
const input = (yargs)=>{
   return yargs.option('address', {
     alias: 'a',
     demand:true,
     string:true,
     default: '1301 lombard philadelphia'
   })
 }
const arg= yargs.command('input', 'address', input)
      .help()
      .argv

      console.log(arg.address);
/*
geocode.geocodeAddress(arg.address,(err, result)=>{
  if(err){
    console.log(err);
  }else{
    console.log(JSON.stringify(result,undefined,6));
    geocode.geocodeTemperature(result.lattitude,result.longitude,(err, result)=>{
      if(err){
        console.log(err);
      }else{
        console.log(JSON.stringify(result,undefined,6));
      }

    });
  }

});


geocode.promiseAddress(arg.address).then((res)=>{
  console.log(res);
  return geocode.promiseTemperature(res.lattitude,res.longitude);
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
*/

const axios =require('axios');
axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    params: {
      address:encodeURIComponent(`${arg.address}`),
      key:'AIzaSyBlxY7AFq1d5C8ga5kWbzL9bSFYm2bSJck'
    }
  })
  .then((res)=> {
    if(res.data.status =="ZERO_RESULTS" )
    throw new Error("404 NO FOUD");
    let lat=res.data.results[0].geometry.location.lat;
    let lng=res.data.results[0].geometry.location.lng;
    const url =`https://api.darksky.net/forecast/9dc57361e8eda8892b2d04873af09383/${lat},${lng}`;
    return axios.get(url);
  }).then((res)=>{
    console.log(JSON.stringify(res.data.currently.temperature,undefined,6));
    console.log(JSON.stringify(res.data.currently.apparentTemperature,undefined,6));
  })
  .catch((err)=> {
    console.log(err.message);
  });
