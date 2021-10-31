var weight = [35,38,42,45,43,34,36,41,48,32];
var sum=0;
//function defination
function weight_average()
{
  

for(var i=0;i<weight.length;i++)
//console.log(weight[i]);
{sum=sum+weight[i]}
var average=sum/weight.length
console.log(average);
}


function setup() {
  createCanvas(400,400);

}

function draw() 
{
  weight_average();
  background(30);
}

 
