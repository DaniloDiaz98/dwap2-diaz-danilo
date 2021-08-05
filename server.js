const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port= process.env.PORT || 1998;


app.use(express.static(__dirname +'/public'));
app.use( express.static( "public" ) );


var json = require('./data/datos.json');

hbs.registerHelper("producto",()=> {
  var dato = JSON.stringify(json);
  var ret = "";
  var dato1 =  JSON.parse(dato);
  for (var i = 0; i < dato1.length;  i++) {
      ret = ret +'<div class="pr1">'
      +'<img src="'+ dato1[i].imagen+'" alt="" class="imagen1">'
      +'<h1 id="t2">'+dato1[i].nombre+'</h1>'
      +'<h2 id="p2">'+dato1[i].precio+'</h2></div>';
      '<br>'  
      
  };
  return  ret;
});


//Express HBS view engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/',(req, res) =>{
   res.render('home',{
     nombre:'Díaz Danilo',     
   });
});



app.get('/about',(req, res) =>{
  res.render('about');
});




app.listen(port, ()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`);
});