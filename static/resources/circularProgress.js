function circularProgress(canvasInstance,contextInstance,value,color){
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000/60 );
        };
      })();
      
	  var x=Math.PI;
	  var per=value;
	  var newX=0;
	  var i=0;
	  var canvas = canvasInstance;
      var context = contextInstance;
//providing anti-aliasing and smooth edges
	  context.imageSmoothingEnabled=true;
	  var imd=null;
	  imd=context.getImageData(0,0,canvas.width,canvas.height);
	  
      function drawRectangle(myRectangle, context) {
	    context.putImageData(imd,0,0);
        context.beginPath();
        context.arc(myRectangle.x, myRectangle.y, myRectangle.radius, myRectangle.stangle, myRectangle.endangle);
        context.lineWidth = myRectangle.borderWidth;
        context.strokeStyle=color;
		//context.strokeStyle = 'grey';
        context.stroke();
		context.closePath();
		var text=i+"%";
		
		context.beginPath();
		context.font="30px Andalus";
		context.fillText(text,70,105);
		context.stroke();	
		context.stroke();
		context.beginPath();
		context.moveTo(145,95);
		context.lineWidth=3;
		context.strokeStyle='#eee';
		//context.strokeStyle=color;
		context.arc(95,95,50,0,x*2);
		context.stroke();
		context.closePath();
      }
      function animate(myRectangle, canvas, context, startTime) {
        // update
        var time = (new Date()).getTime() - startTime;

        var linearSpeed = 100;
        // pixels / second
        newX = linearSpeed* time*per/ 2000000-x/2;
        if(newX <= per*2*x/100-x/2) {
          myRectangle.endangle = newX;
        }
		
		if(i<per){
		//i=Math.ceil(newX*57.29578);
		i+=1;
		}
		if(i>per){
		i-=1;
		}
		
		
        drawRectangle(myRectangle, context);

        // request new frame
        requestAnimFrame(function() {
          animate(myRectangle, canvas, context, startTime);
        });
      }
      

      var myRectangle = {
        x: 95,
        y: 95,
        radius: 60,
		stangle: -x/2,
		endangle: -x/2,
        borderWidth: 4
      };

      drawRectangle(myRectangle, context);

      // wait one second before starting animation
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRectangle, canvas, context, startTime);
      }, 1000);

}

function estimatedEmotionProgress(canvasInstance,contextInstance,value,color){
		window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000/60 );
        };
      })();
      
	  var x=Math.PI;
	  var per=value;
	  var newX=0;
	  var i=0;
	  var canvas = canvasInstance;
      var context = contextInstance;
//providing anti-aliasing and smooth edges
	  context.imageSmoothingEnabled=true;
	  var imd=null;
	  imd=context.getImageData(0,0,canvas.width,canvas.height);
	  
      function drawRectangle(myRectangle, context) {
	    context.putImageData(imd,0,0);
        context.beginPath();
        context.arc(myRectangle.x, myRectangle.y, myRectangle.radius, myRectangle.stangle, myRectangle.endangle);
        context.lineWidth = myRectangle.borderWidth;
        context.strokeStyle=color;
		//context.strokeStyle = 'grey';
        context.stroke();
		context.closePath();
		var text=i+"%";
		if(i<per){
		i+=1;
		}
		if(i>per){
		i-=1;
		}
        
		
		
		context.beginPath();
		context.font="30px Andalus";
		context.fillText(text,70,105);
		context.stroke();	
		context.stroke();
		context.beginPath();
		context.moveTo(145,95);
		context.lineWidth=3;
		context.strokeStyle='#eee';
		//context.strokeStyle=color;
		context.arc(95,95,50,0,x*2);
		context.stroke();
		context.closePath();
      }
      function animate(myRectangle, canvas, context, startTime) {
        // update
        var time = (new Date()).getTime() - startTime;

        var linearSpeed = 100;
        // pixels / second
        newX = time*per/ 10000-x/2;
        if(newX <= per*2*x/100-x/2) {
          myRectangle.endangle = newX;
        }
		drawRectangle(myRectangle, context);
        // request new frame
        requestAnimFrame(function() {
          animate(myRectangle, canvas, context, startTime);
        });
      }
      

      var myRectangle = {
        x: 95,
        y: 95,
        radius: 60,
		stangle: -x/2,
		endangle: -x/2,
        borderWidth: 4
      };

      drawRectangle(myRectangle, context);

      // wait one second before starting animation
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRectangle, canvas, context, startTime);
      }, 1);
     
}
