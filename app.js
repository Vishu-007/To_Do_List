const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const date=require(__dirname +"/date.js");

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.use(express.static("public"));

var items=[];

app.get('/',function(req,res)
{
   const day=date();

   res.render("list.ejs", {date:day,newitems:items});
  
});

app.post("/",function(request,response)
{
     var item=request.body.listitem;
     items.push(item);
    response.redirect("/");
});

app.listen(3000,function()
{
console.log('Server running on port 3000');
});