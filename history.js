const fs =require('fs');
//appendFile callback to avoid err
fs.appendFile('test.txt','Hello World!',(script, err)=>{
if(err){
  console.log(err);
}else{
  console.log(script);
}

});
//appendFileSync callback to avoid err
fs.appendFileSync('test.txt','Hello World!');
fs.writeFileSync('test.txt','Hello World!');
//get the value of variable
ex: `Hello ${user.username}`
//read user information on the shell
const os =require('os');
const user = os.userInfo();
// export function
module.exports.addNote =()=>{

}
//used for checking whether it is true or not
const _ =require('lodash');
_.isString();//
_.unique([2,1,2]);//[2,1]
//get command line argument
process.argv
//use yargs
const yargs =require('yargs');
node  weather.js add --title=secret --body="This is my secret"
yargs.argv// get yargs argument
// string to obj
JSON.parse()// if the parsed string is string, it will return obj datatype
           //if the parsed string is array, it will return array datatype
//check datatype
typeof variable
//filter
var new_arr = arr.filter((array_element) => array_element == assigned_value)
//##########################################################customized yargs
//to customize the input object
const set ={
  pssword:{
  describe:"input your birthday",
  demand:true,
  alias: 'p'
} }

const get = (yargs)=>{
   return yargs.option('url', {
     alias: 'u',
     default: 'http://yargs.js.org/'
   })
 }

 yargs.command('get', 'make a get HTTP request', get)
      .command('set', 'create a password',set)
      .help()
      .argv

//get customized object
console.log(yargs.argv)
// difference between ESC6 and Error function
var obj={
    color:'red',
    smell:'good',
    getColor:()=>{
      console.log(arguments);// it cannot get the passed argument if there is no define
      console.log(`${this.color}`);
    },
    getSmell(){
      console.log(arguments);// it can get the passed argument if there is no define and return obj
      console.log(`${this.smell}`);
    }
}
obj.getColor();// it fails to implement since it cannot get color variable
obj.getSmell();//it can get the value which has pre-defined
obj.getColor(0,1,2,4);
obj.getSmell(0,1,2,4);

encodeURIComponent()// encode url component
decodeURIComponent()// encode url component


// two methods to write api
//first after collecting data from the database we can specify obj which we want to pass into front-end
var getProduct = Product.find({}, (err, docs) => {//################# model
    if (err) {
        callback(err);
    } else {
        let productChunks =[];
        async.eachSeries(docs, (docs, callback)=> {
            let obj = {
              imagePath:docs[0].imagePath,
              title:docs[0].title,
              decription:docs[0].decription,
              price:docs[0].price
            }
            productChunks.push(obj);
            callback(productChunks);

        }, function (err) {
            callback(err, productChunks);
        });
    }
});
module.exports={
  getProduct
}

var Product=(req, res, next) => {//##################### controller
    let item = {};
    async.auto({
        showGetProduct:(callback) =>{
             module.getProduct(item, callback);
        }
    }, (err, results) => {
        if (err) {
            next(err);
        } else {
          let views ={
            imagePath:results.imagePath,
            title:results.title,
            decription:results.decription,
            price:results.price
          }
            res.send(utility.response({ title: 'Shopping Cart', products:views}, 'success'));
        }
    })
}
module.exports={
  Product
}

router.render('shop/index', controller.Product);//##################### router
module.exports = router;

//use spice to make data clear,and then print
let products = Product.find((err,docs)=>{
let productChunks =[];
let chunksize =3;
for(let i =0; i<docs.length; i+=chunksize){
  productChunks.push(docs.slice(i,i+chunksize));

}
  res.render('shop/index', { title: 'Shopping Cart',products:productChunks});
});
//#########################################################promise HTTP request
const axios =require('axios');// promise method to make HTTPs request
axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    params: {
      address:encodeURIComponent(`${arg.address}`),
      key:'AIzaSyBlxY7AFq1d5C8ga5kWbzL9bSFYm2bSJck'
    }
  })
  .then((res)=> {
    if(res.data.status =="ZERO_RESULTS" )
    throw new Error("404 NO FOUD");//throw error
    let lat=res.data.results[0].geometry.location.lat;
    let lng=res.data.results[0].geometry.location.lng;
    const url =`https://api.darksky.net/forecast/9dc57361e8eda8892b2d04873af09383/${lat},${lng}`;
    return axios.get(url);// like promise return to build a chain
  }).then((res)=>{
    console.log(JSON.stringify(res.data.currently.temperature,undefined,6));
    console.log(JSON.stringify(res.data.currently.apparentTemperature,undefined,6));
  })
  .catch((err)=> {
    console.log(err.message);//catch thrown error
  });
//#################################################################### middleware
app.use();
app.use(express.static(__dirname+'/public')) //use public folder
//#################################### use template engine (give dynamic method or inject the value)
app.set() //set value
app.set('view engine','hbs ')// tell it what engine we plan to use
var obj ={}
app.render('index.hbs',obj);// is to send a file which has been in the view engine
//################################
app.use((req,res,next)=>{
 console.log(req.method, req.url);
 //or render(middleware.html);
})  // middleware to get user connection detail  => next() is used to implement async as long as next() then program can continue to implement following code

//################################ setup github
ls -al ~./ssh // check whether ssh key has existed
ssh-keygen -t rsa -b 4096 -C 'kpw3@st-andrews.ac.uk' // add ssh key into  /Users/Kevin/.ssh/id_rsa
git init // initialize the key in the folder
pbcopy < ~/.ssh/id_rsa.pub //(MAC_pro)copy ssh_key into github
eval "$(ssh-agent -s)"// check pid id exist
ssh-add ~/.ssh/id_rsa// specify file location
pbcopy < ~/.ssh/id_rsa.pub// copy pssh-key to github
ssh -T git@github.com//test whether it is successful
git push 
