module.exports=getdate;

function getdate()
{
    var day=new Date();
var options={ weekday:"long",
              day:"numeric",
              month:"long"};

var today=day.toLocaleDateString("en-US",options);
return today; };

