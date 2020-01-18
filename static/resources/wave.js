function waveForm(ctx,canvas){

	
this.oldWave=function(value){
 
ctx.clearRect(0,0,canvas.width,canvas.height);
//ctx.webkitImageSmoothingEnabled=true;
ctx.imageSmoothingEnabled=true;
//fluctuating value
var flux=value;

//var imd = null;
//imd = ctx.getImageData(0, 0, canvas.width,canvas.height);
//ctx.putImageData(imd, 0, 0);
ctx.beginPath();

//horizontal line
var i=0;
var c=0;
var x=0;
var y=0;
var inc=0;
var cWidth=canvas.width;
var cHeight=canvas.height;

for(i=0;i<=cWidth;i+=20){
ctx.moveTo(i+5,cHeight/2);
ctx.lineTo(i,cHeight/2);
}
ctx.stroke();
ctx.closePath();

ctx.beginPath();
//short wave
c=0;
x=0;
y=cHeight/2;
inc=Math.PI/14.9;//half wave-length
//inc=Math.PI/24.9;
for(i=0;i<=cWidth;i+=10){
ctx.moveTo(x,y);
x=i;
y=(cHeight/2)-Math.sin(c)*45*flux;//altitude
c+=inc;
ctx.lineTo(x,y);
}
ctx.stroke();
ctx.closePath();

ctx.beginPath();
//outermost wave
c=0;
x=0;
y=cHeight/2;
inc=Math.PI/24.9;
//inc=Math.PI/24.9;
for(i=0;i<=cWidth;i+=10){
ctx.moveTo(x,y);
x=i;
y=(cHeight/2)-Math.sin(c)*45*flux;
c+=inc;
ctx.lineTo(x,y);
}
ctx.stroke();
ctx.closePath();


ctx.beginPath();
//middle wave
c=0;
x=0;
y=cHeight/2;
inc=Math.PI/24.9;
for(i=0;i<=cWidth;i+=10){
ctx.moveTo(x,y);
x=i;
y=(cHeight/2)-Math.sin(c)*35*flux;
c+=inc;
ctx.lineTo(x,y);
}
ctx.stroke();
ctx.closePath();

ctx.beginPath();
//inner most wave
c=0;
x=0;
y=cHeight/2;
inc=Math.PI/24.9;
for(i=0;i<=cWidth;i+=10){
ctx.moveTo(x,y);
x=i;
y=(cHeight/2)-Math.sin(c)*20*flux;
c+=inc;
ctx.lineTo(x,y);
}
ctx.stroke();
ctx.closePath();
};
}

function initialWaveForm(ctx,canvas){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.beginPath();
//horizontal line
var i;
var cWidth=canvas.width;
var cHeight=canvas.height;

for(i=0;i<=cWidth;i+=20){
ctx.moveTo(i+5,cHeight/2);
ctx.lineTo(i,cHeight/2);
}
ctx.stroke();
ctx.closePath();

}