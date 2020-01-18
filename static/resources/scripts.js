function startScript(){

//create a global variable

graphInterval=null;
waveInterval=null;
emoticonInterval=null;
mainInterval=null;
timeInterval=1000;//milliseconds
waveTime=100;
gtimeSuffix=" sec";
happySum=0;
sadSum=0;
normalSum=0;
angrySum=0;
sum=0;
analysisFlag=false;
//variables for estimated emotion
ehappySum=0;
esadSum=0;
enormalSum=0;
eangrySum=0;
esum=0;

session=0;
ctx3=null;
ctx4=null;
ctx5=null;
ctx6=null;
happyCall=null;
sadCall=null;
normalCall=null;
angryCall=null;


//microphones variables
audioInput=null;
audio_context=null;
recorder=null;
send=0;
receive=0;
micTimeout=null;
progressFlag=false;

estimatedTime=0;
netDelay=0;
ltime=0;
timeSpent=0;

sec=0;

//load google apis
loadGoogleAPIs();

//enable smooth scrolling of inner page hyperlinks
	var $root = $('html, body');
$('.anchors').click(function() {
	var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
       // window.location.hash = href;
    });
    return false;

	});

	//hide Alert
	$("#completionAlert").hide();
	//$("#errorAlert").hide();

	
//get context of canvases
emotionCanvas=document.getElementById("emotionCanvas");
waveFormCanvas=document.getElementById("waveFormCanvas");
ctx1 = emotionCanvas.getContext("2d");
ctx2 = waveFormCanvas.getContext("2d");
//overall emotions canvases
overallHappyCanvas=document.getElementById("overallHappyCanvas");
ctx3 = overallHappyCanvas.getContext("2d");
overallSadCanvas=document.getElementById("overallSadCanvas");
ctx4 = overallSadCanvas.getContext("2d");
overallNormalCanvas=document.getElementById("overallNormalCanvas");
ctx5 = overallNormalCanvas.getContext("2d");
overallAngryCanvas=document.getElementById("overallAngryCanvas");
ctx6 = overallAngryCanvas.getContext("2d");

//initialise canvases
overallCanvasInitilizer();
waveCanvasInitilizer();
barCanvasInitilizer();


}
function loadGoogleAPIs(){
//chart time intervals
ctimeInterval=timeInterval;

//load google charts libraries
	  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(initialChart);
	  
	  //setInterval return variables for charts
	  overallChartInterval=null;
		happyChartInterval=null;
		sadChartInterval=null;
		normalChartInterval=null;
			angryChartInterval=null;

}
function overallCanvasInitilizer(){
// clear
        ctx3.clearRect(0, 0, overallHappyCanvas.width, overallHappyCanvas.height);
		ctx4.clearRect(0, 0, overallSadCanvas.width, overallSadCanvas.height);
		ctx5.clearRect(0, 0, overallNormalCanvas.width, overallNormalCanvas.height);
		ctx6.clearRect(0, 0, overallAngryCanvas.width, overallAngryCanvas.height);
//initializing overalCanvases
		circularProgress(overallHappyCanvas,ctx3,00,'#337ab7');
		circularProgress(overallSadCanvas,ctx4,00,'#FFAB40');
		circularProgress(overallNormalCanvas,ctx5,00,'#03A9F4');
		circularProgress(overallAngryCanvas,ctx6,00,'#D32F2F');
		//'#337ab7','#FFAB40','#03A9F4','#D32F2F'
}
function waveCanvasInitilizer(){
//initializing waveCanvas
initialWaveForm(ctx2,waveFormCanvas);
}
function barCanvasInitilizer(){
//initializing barGraphCanvas 
        var graph = new BarGraph(ctx1);
		graph.maxValue = 1;
		graph.margin = 2;//0277BD
		graph.colors = ["#337ab7", "#FFAB40", "#03A9F4", "#D32F2F"];
		graph.xAxisLabelArr = ["Happy", "Sad", "Normal", "Angry"];
		graph.update([0,0,0,0]);

}

function startAnalysis(){
//success #5cb85c
if(analysisFlag==true){
//show start analysis warning modal
$(document).ready(function(){
        $("#warningModal").modal();
    });

}else{
analysisFlag=true;

document.getElementById("mic_icon1").style.visibility="collapse";
document.getElementById("start_btn").style.visibility="collapse";
document.getElementById("mic_icon2").style.visibility="visible";
document.getElementById("stop_btn").style.visibility="visible";

//start all Chart representation
happyChart();
sadChart();
normalChart();
angryChart();
overallChart();

//initialise canvases
overallCanvasInitilizer();

//hide Alert
	$("#completionAlert").hide();
	$("#errorAlert").hide();

	
		graph = new BarGraph(ctx1);
		//graph.maxValue = 20;
		graph.margin = 2;
		graph.colors = ["#337ab7", "#FFAB40", "#03A9F4", "#D32F2F"];
		graph.xAxisLabelArr = ["Happy", "Sad", "Normal", "Angry"];
		
		wave=new waveForm(ctx2,waveFormCanvas);
		waveInterval=setInterval(function(){
		wave.oldWave(Math.random());
		},waveTime);
		
					
				happyCall=new happyChart();
				sadCall=new sadChart();
				normalCall=new normalChart();
				angryCall=new angryChart();
				overallCall=new overallChart();
				
				session++;
				var dataTable=document.getElementById("dataTable");
					var row=dataTable.insertRow(0);
					var cell1=row.insertCell(0);
					cell1.innerHTML="Session: "+session;
					  
					row=dataTable.insertRow(1);
					cell1=row.insertCell(0);
					cell2=row.insertCell(1);
					cell3=row.insertCell(2);
					cell4=row.insertCell(3);
					cell5=row.insertCell(4);
					  cell1.innerHTML="Time";
					  cell2.innerHTML="Happy";
					  cell3.innerHTML="Sad";
					  cell4.innerHTML="Normal";
					  cell5.innerHTML="Angry";
					
				sec=1;
				happySum=0;
				sadSum=0;
				normalSum=0;
				angrySum=0;
		
					//start Microphone
					//startMic();
	startMicProcess();
	}
	}
		
function startProcess(hV,sV,nV,aV,timeS){
			var happyValue=hV;
				var sadValue=sV;
				var normalValue=nV;
				var angryValue=aV;
				
				
					var row=dataTable.insertRow(sec+1);
					var cell1=row.insertCell(0);
					var cell2=row.insertCell(1);
					var cell3=row.insertCell(2);
					var cell4=row.insertCell(3);
					var cell5=row.insertCell(4);
					  if(timeS<60){
					  cell1.innerHTML=timeS+"s";
					  }else{
					  cell1.innerHTML=parseInt(timeS/60)+"m"+" "+(timeS%60)+"s";
					  }
					  cell2.innerHTML=happyValue.toFixed(4);
					  cell3.innerHTML=sadValue.toFixed(4);
					  cell4.innerHTML=normalValue.toFixed(4);
					  cell5.innerHTML=angryValue.toFixed(4);
					  
				sec++;
				happySum+=happyValue;
				sadSum+=sadValue;
				normalSum+=normalValue;
				angrySum+=angryValue;
				
				//values of estimated emotion
				ehappySum=happySum;
				esadSum=sadSum;
				enormalSum=normalSum;
				eangrySum=angrySum;
				
				
				emoticonResponse(happyValue,sadValue,normalValue,angryValue);
				graph.maxValue=Math.max(happyValue*10 , sadValue*10 , normalValue*10 , angryValue*10)+5;
				graph.update([happyValue*10 , sadValue*10 , normalValue*10 , angryValue*10]);
				
				happyCall.happyChartCall(happyValue,timeS);
				sadCall.sadChartCall(sadValue,timeS);
				normalCall.normalChartCall(normalValue,timeS);
				angryCall.angryChartCall(angryValue,timeS);
				overallCall.overallChartCall(happyValue,sadValue,normalValue,angryValue,timeS);
				
				}
		
function stopAnalysis(){
document.getElementById("mic_icon2").style.visibility="collapse"
document.getElementById("stop_btn").style.visibility="collapse"
document.getElementById("mic_icon1").style.visibility="visible"
document.getElementById("start_btn").style.visibility="visible"

	ctx2.clearRect(0,0,waveFormCanvas.width,waveFormCanvas.height);
	clearInterval(waveInterval);
	//initialise canvases
	waveCanvasInitilizer();
//stop microphone
//stopMic();
stopMicProcess();
}
function stopProcess(){
	ctx1.clearRect(0,0,emotionCanvas.width,emotionCanvas.height);
	clearTimeout(graph.graphTimeout);
	//clearInterval(graphInterval);
	
			document.getElementById("netDelay").innerHTML="NA";
			document.getElementById("estimatedTime").innerHTML="NA";
				
			$("#completionAlert").show();

	//clear transitions of emoticons
	clearAllTransitions();
	// clear
        ctx3.clearRect(0, 0, overallHappyCanvas.width, overallHappyCanvas.height);
		ctx4.clearRect(0, 0, overallSadCanvas.width, overallSadCanvas.height);
		ctx5.clearRect(0, 0, overallNormalCanvas.width, overallNormalCanvas.height);
		ctx6.clearRect(0, 0, overallAngryCanvas.width, overallAngryCanvas.height);
	//show overall emotions
	overallEmotion();
		
		//initialise canvases
barCanvasInitilizer();

}

function overallEmotion(){
		//console.log("HappySum: "+happySum+" || SadSum: "+sadSum+" || NormalSum: "+normalSum+" || AngrySum: "+angrySum);
				
		sum=happySum + sadSum + normalSum + angrySum;
		var happyPer=Math.round(happySum/sum*100);
		var sadPer=Math.round(sadSum/sum*100);
		var normalPer=Math.round(normalSum/sum*100);
		var angryPer=Math.round(angrySum/sum*100);
		
		//console.log("Sum: "+sum);
				
					var dataTable=document.getElementById("dataTable");
					var row=dataTable.insertRow(sec+1);
					var cell1=row.insertCell(0);
					var cell2=row.insertCell(1);
					var cell3=row.insertCell(2);
					var cell4=row.insertCell(3);
					var cell5=row.insertCell(4);
					  
					  cell1.innerHTML="Total:";
					  cell2.innerHTML=happySum.toFixed(4);
					  cell3.innerHTML=sadSum.toFixed(4);
					  cell4.innerHTML=normalSum.toFixed(4);
					  cell5.innerHTML=angrySum.toFixed(4);
					
					row=dataTable.insertRow(sec+2);
					cell1=row.insertCell(0);
					cell2=row.insertCell(1);
					cell3=row.insertCell(2);
					cell4=row.insertCell(3);
					cell5=row.insertCell(4);
					  
					  cell1.innerHTML="Percent:";
					  cell2.innerHTML=happyPer+"%";
					  cell3.innerHTML=sadPer+"%";
					  cell4.innerHTML=normalPer+"%";
					  cell5.innerHTML=angryPer+"%";
					
	
		circularProgress(overallHappyCanvas,ctx3,Math.round(happySum/sum*100),'#337ab7');
		circularProgress(overallSadCanvas,ctx4,Math.round(sadSum/sum*100),'#FFAB40');
		circularProgress(overallNormalCanvas,ctx5,Math.round(normalSum/sum*100),'#03A9F4');
		circularProgress(overallAngryCanvas,ctx6,Math.round(angrySum/sum*100),'#D32F2F');

		}

 function estimatedEmotion(){
				//estimated emotion change overall progress bar with each receiving emotion prediction
		// clear
        ctx3.clearRect(0, 0, overallHappyCanvas.width, overallHappyCanvas.height);
		ctx4.clearRect(0, 0, overallSadCanvas.width, overallSadCanvas.height);
		ctx5.clearRect(0, 0, overallNormalCanvas.width, overallNormalCanvas.height);
		ctx6.clearRect(0, 0, overallAngryCanvas.width, overallAngryCanvas.height);

		esum=ehappySum + esadSum + enormalSum + eangrySum;
		var ehappyPer=Math.round(ehappySum/esum*100);
		var esadPer=Math.round(esadSum/esum*100);
		var enormalPer=Math.round(enormalSum/esum*100);
		var eangryPer=Math.round(eangrySum/esum*100);
		
		estimatedEmotionProgress(overallHappyCanvas,ctx3,Math.round(ehappySum/esum*100),'#337ab7');
		estimatedEmotionProgress(overallSadCanvas,ctx4,Math.round(esadSum/esum*100),'#FFAB40');
		estimatedEmotionProgress(overallNormalCanvas,ctx5,Math.round(enormalSum/esum*100),'#03A9F4');
		estimatedEmotionProgress(overallAngryCanvas,ctx6,Math.round(eangrySum/esum*100),'#D32F2F');

		}

 function startMic(){
       	   window.AudioContext = window.AudioContext || window.webkitAudioContext;
        
		if(audio_context==null){
		navigator.getUserMedia = ( navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia);
        navigator.getUserMedia({audio: 1, video: 0}, initializeRecorder, function(e) {
          console.log('No live audio input: ' + e);
        });
       }else{
	   navigator.getUserMedia({audio: 1, video: 0}, initializeRecorder, function(e) {
          console.log('No live audio input: ' + e);
        });
        
		}
}
function initializeRecorder(stream){
		alert('checking');
		console.log("Microphone Connected");
        var sampleRate=0;
		send=1;
		receive=1;
		
			audio_context = new AudioContext();
			sampleRate = audio_context.sampleRate;

			//audioInput = audio_context.createMediaStreamSource(stream);
			console.log("Created media stream.");

          var bufferSize = 4096;
          // record only 1 channel
			recorder = audio_context.createScriptProcessor(bufferSize, 1, 1);
          // specify the processing function
          recorder.onaudioprocess = recorderProcess;
          // connect stream to our recorder
          audioInput.connect(recorder);
          // connect our recorder to the previous destination
          recorder.connect(audio_context.destination);
        }
        
function recorderProcess() {
            
          if (e){
		  
		  var left = e.inputBuffer.getChannelData(0);
         // console.log('Send:'+send);
		  if(send==1){
		  ltime=new Date().getTime();
		  timeSpent=1;
		  }
		  send++;
		  
		  //console.log("Time:"+(new Date()));
          dt=JSON.stringify(left);
		  //console.log("Data:"+dt);
			  
        	micTimeout=setTimeout(function(){
			jQuery.post('/',{'wordlist' : dt},function(data){
			 var str=new String(data.result);
			 var arr=str.split(",");
			 var happy=Math.abs(0.9999-parseFloat(arr[0]))*1000;
			 //console.log(arr[0]);
			 var sad=parseFloat(arr[1])*10;
			 var normal=parseFloat(arr[2])*10;
			 var angry=parseFloat(arr[3])*10;
			var happy=Math.abs((0.5-sad-normal-angry));
			 console.log("Receive:"+receive);
		var happy=Math.random();
		var sad=Math.random();
		var normal=Math.random();
		var angry=Math.random();
		
			//console.log("Receive:"+receive+"||Happy:"+happy+"||Sad:"+sad+"||Normal:"+normal+"||Angry:"+angry);
			 	receive++;
		
				var ctime=new Date().getTime();
				netDelay=Math.round((ctime-ltime)/1000);//converting in seconds
				ltime=ctime;
				estimatedTime=netDelay*(send-receive);
				timeSpent+=netDelay;
			startProcess(happy,sad,normal,angry,timeSpent);
			if(receive<(send-1)){
			estimatedEmotion();				
			}
			document.getElementById("netDelay").innerHTML=netDelay+" sec";
			if(estimatedTime<60){
			document.getElementById("estimatedTime").innerHTML=estimatedTime+" secs";
				}else{
			document.getElementById("estimatedTime").innerHTML=parseInt(estimatedTime/60)+" min"+" "+(estimatedTime%60)+" secs";
				}
			if(timeSpent<60){
			document.getElementById("timeSpent").innerHTML=timeSpent+" secs";
			}else{
			document.getElementById("timeSpent").innerHTML=parseInt(timeSpent/60)+" min"+" "+(timeSpent%60)+" secs";
			}
			clearTimeout(micTimeout);
				
				if((send-1)==receive){
				stopProcess();
				analysisFlag=false;
				progressFlag=true;
				}
				else{
				progressFlag=false;
				}
				},'json');
			
		},1000);
		}
        } 
function stopMic(){
audioInput.disconnect(recorder);
recorder.disconnect(audio_context.destination);
clearTimeout(micTimeout);
console.log("Microphone Disconnected");
}

function startMicProcess(){
micTimeout=setInterval(function(){
		var happy=Math.random();
		var sad=Math.random();
		var normal=Math.random();
		var angry=Math.random();
		timeSpent++;			
		startProcess(happy,sad,normal,angry,timeSpent);
			
			
		},1000);	
}

function stopMicProcess(){
clearInterval(micTimeout);
stopProcess();
analysisFlag=false;
progressFlag=true;

			document.getElementById("netDelay").innerHTML="1 sec";
			
            if(timeSpent<60){
			document.getElementById("timeSpent").innerHTML=timeSpent+" secs";
			}else{
			document.getElementById("timeSpent").innerHTML=parseInt(timeSpent/60)+" min"+" "+(timeSpent%60)+" secs";
			}
timeSpent=0;
}