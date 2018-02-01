var express = require('express')
var app = express();
var hbs = require('hbs');
const port = process.env.PORT ||3000;

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use((req,res,next)=>{
 //console.log(req.method, req.url);
 var obj = {meassage:"this is middleware U have to login"};
 res.render('middleware.html', obj);
})

app.get('/',  (req, res)=> {
  let obj={
    name:"Kevin",
    birthday:"07/10/1989"
  }
  res.render('index.html', obj);// render only can be used in the file(html type)in the view engine; it can pass obj
})



app.use(express.static(__dirname+'/public'));
app.get('/public',(req, res)=> {
  res.send('test.html');//for the static folder it is impossible to pass obj 不可以pass object
  //res.redirect('test.html');
})

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('helper_name', (test)=> { return  test.toUpperCase();});
app.get('/help',  (req, res)=> {
  res.render('help.html', {name:"kevin"});// render only can be used in the file(html type)in the view engine; it can pass obj
})

app.listen(port,()=>{
console.log(port);
});
