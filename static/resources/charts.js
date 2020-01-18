//  colors:['#337ab7','#FFAB40','#03A9F4','#D32F2F']
		
function initialChart(){

		  var xAxisType="string";
		  var xAxisTitle="Time Span";
		  var yAxisType="number";
		  var yAxisTitle1="Happy Emotion";
		  var chartName1="happyChart";
		  var options1 = {
          title: 'Happy Emotion Monitor',
		  titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#337ab7']
		  };
		  var timeSuffix=gtimeSuffix;
		  var data = new google.visualization.DataTable();
			data.addColumn(xAxisType,xAxisTitle);
			data.addColumn(yAxisType,yAxisTitle1);
		var chart = new google.visualization.LineChart(document.getElementById(chartName1));
		chart.draw(data, options1);
		  
		  
		  var yAxisTitle2="Sad Emotion";
		  var chartName2="sadChart";
		  var options2 = {
          title: 'Sad Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#FFAB40']
		  };
		  
		    data = new google.visualization.DataTable();
			data.addColumn(xAxisType,xAxisTitle);
			data.addColumn(yAxisType,yAxisTitle2);
		    chart = new google.visualization.LineChart(document.getElementById(chartName2));
		chart.draw(data, options2);
		  
		  var yAxisTitle3="Normal Emotion";
		  var chartName3="normalChart";
		  var options3 = {
          title: 'Normal Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#03A9F4']
		  };
		  data = new google.visualization.DataTable();
			data.addColumn(xAxisType,xAxisTitle);
			data.addColumn(yAxisType,yAxisTitle3);
		    chart = new google.visualization.LineChart(document.getElementById(chartName3));
		chart.draw(data, options3);
		  
		  var yAxisTitle4="Angry Emotion";
		  var chartName4="angryChart";
		  var options4 = {
          title: 'Angry Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#D32F2F']
		  };
		  data = new google.visualization.DataTable();
			data.addColumn(xAxisType,xAxisTitle);
			data.addColumn(yAxisType,yAxisTitle2);
		    chart = new google.visualization.LineChart(document.getElementById(chartName4));
		chart.draw(data, options4);
		  
		  var chartName5="overallChart";
		  var options5 = {
          title: 'Overall Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#337ab7','#FFAB40','#03A9F4','#D32F2F']
		  };
		  
		  data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle1);
		data.addColumn(yAxisType,yAxisTitle2);
		data.addColumn(yAxisType,yAxisTitle3);
		data.addColumn(yAxisType,yAxisTitle4);
		chart = new google.visualization.LineChart(document.getElementById(chartName5));
		chart.draw(data, options5);
			
		
}
function happyChart() {
		  //happyChartInterval=null;
		  var xAxisType="string";
		  var xAxisTitle="Time Span";
		  var yAxisType="number";
		  var yAxisTitle="Happy Emotion";
		  var chartName="happyChart";
		  var timeSuffix=gtimeSuffix;
		  
		  var options = {
          title: 'Happy Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#337ab7']
		  };
			
			var points=60;//no of points to be plotted on graphs
			var chartInterval=ctimeInterval;//in milliseconds, setInterval's time difference
			
			
			var time=new Array(points);
			var value=new Array(points);
			var i;
			//initialise
			for(i=0;i<points;i++){
			time[i]="0 sec";
			value[i]=0;
			}
			
		var data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		var chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  
			var t=1;
			
	//	happyChartInterval=setInterval(function(){	
this.happyChartCall=function(val,tS){		
		var ptime=time.shift();
			var pvalue=value.shift();
			//console.log(ptime+"||"+pvalue);
			if(tS<60){
			time.push(tS+" sec");
		    }else{
			time.push(parseInt(tS/60)+" min"+" "+(tS%60)+" sec");
			}
			value.push(val);
				t++;
		data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(var i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  		};	
	//	},chartInterval);

      }
    
function sadChart() {
		  //sadChartInterval=null;
	  var that=this;
		  var xAxisType="string";
		  var xAxisTitle="Time Span";
		  var yAxisType="number";
		  var yAxisTitle="Sad Emotion";
		  var chartName="sadChart";
		  var timeSuffix=gtimeSuffix;
		   
		  var options = {
          title: 'Sad Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#FFAB40']
		  };
			
			var points=60;//no of points to be plotted on graphs
			var chartInterval=ctimeInterval;//in milliseconds, setInterval's time difference
			
			
			var time=new Array(points);
			var value=new Array(points);
			var i;
			//initialise
			for(i=0;i<points;i++){
			time[i]="0 sec";
			value[i]=0;
			}
			
		var data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		var chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  
			var t=1;
			
	//	sadChartInterval=setInterval(function(){	
this.sadChartCall=function(val,tS){		
		var ptime=time.shift();
			var pvalue=value.shift();
			//console.log(ptime+"||"+pvalue);
			if(tS<60){
			time.push(tS+" sec");
		    }else{
			time.push(parseInt(tS/60)+" min"+" "+(tS%60)+" sec");
			}
			value.push(val);
				t++;
		data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(var i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  		};	
	//	},chartInterval);

		  }
    
function normalChart() {
//normalChartInterval=null;
            var that=this;
		  var xAxisType="string";
		  var xAxisTitle="Time Span";
		  var yAxisType="number";
		  var yAxisTitle="Normal Emotion";
		  var chartName="normalChart";
		  var timeSuffix=gtimeSuffix;
		  
		  var options = {
          title: 'Normal Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#03A9F4']
		  };
			
			var points=60;//no of points to be plotted on graphs
			var chartInterval=ctimeInterval;//in milliseconds, setInterval's time difference
			
			
			var time=new Array(points);
			var value=new Array(points);
			var i;
			//initialise
			for(i=0;i<points;i++){
			time[i]="0 sec";
			value[i]=0;
			}
			
		var data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		var chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  
			var t=1;
			
	//	normalChartInterval=setInterval(function(){	
this.normalChartCall=function(val,tS){		
		var ptime=time.shift();
			var pvalue=value.shift();
			//console.log(ptime+"||"+pvalue);
			if(tS<60){
			time.push(tS+" sec");
		    }else{
			time.push(parseInt(tS/60)+" min"+" "+(tS%60)+" sec");
			}
			value.push(val);
				t++;
		data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(var i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  };			
		//},chartInterval);

		}
    
function angryChart() {
         var that=this;
		  var xAxisType="string";
		  var xAxisTitle="Time Span";
		  var yAxisType="number";
		  var yAxisTitle="Angry Emotion";
		  var chartName="angryChart";
		  var timeSuffix=gtimeSuffix;
		  
		  var options = {
          title: 'Angry Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#D32F2F']
		  };
			
			var points=60;//no of points to be plotted on graphs
			var chartInterval=ctimeInterval;//in milliseconds, setInterval's time difference
			
			
			var time=new Array(points);
			var value=new Array(points);
			var i;
			//initialise
			for(i=0;i<points;i++){
			time[i]="0 sec";
			value[i]=0;
			}
			
		var data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		var chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		  
			var t=1;
			
		//angryChartInterval=setInterval(function(){	
			this.angryChartCall=function(val,tS){
			var ptime=time.shift();
			var pvalue=value.shift();
			//console.log(ptime+"||"+pvalue);
			if(tS<60){
			time.push(tS+" sec");
		    }else{
			time.push(parseInt(tS/60)+" min"+" "+(tS%60)+" sec");
			}
			value.push(val);
				t++;
		data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType,yAxisTitle);
		chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(var i=0;i<points;i++){
			data.addRow([time[i],value[i]]);
			}
			chart.draw(data, options);
		};  			
		//},chartInterval);
     
	 }
    
function overallChart() {
		  var that=this;
		  var xAxisType="string";
		  var xAxisTitle="Time Span";
		  var yAxisType1="number";
		  var yAxisTitle1="Happy Emotion";
		  var yAxisType2="number";
		  var yAxisTitle2="Sad Emotion";
		  var yAxisType3="number";
		  var yAxisTitle3="Normal Emotion";
		  var yAxisType4="number";
		  var yAxisTitle4="Angry Emotion";
		  var timeSuffix=gtimeSuffix;
		  
		  var chartName="overallChart";
		  
		  var options = {
          title: 'Overall Emotion Monitor',
          titleTextStyle:{bold:false},
          curveType: 'function',
          legend: { position: 'bottom' },
		  pointSize:0,
		  fontName:'Andalus',
		  fontSize:15,
		  colors:['#337ab7','#FFAB40','#03A9F4','#D32F2F']
		  };
			
			var points=60;//no of points to be plotted on graphs
			var chartInterval=ctimeInterval;//in milliseconds, setInterval's time difference
			
			
			var time=new Array(points);
			var value1=new Array(points);
			var value2=new Array(points);
			var value3=new Array(points);
			var value4=new Array(points);
			
			var i;
			//initialise
			for(i=0;i<points;i++){
			time[i]="0 sec";
			value1[i]=0;
			value2[i]=0;
			value3[i]=0;
			value4[i]=0;
			}
			
		var data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType1,yAxisTitle1);
		data.addColumn(yAxisType2,yAxisTitle2);
		data.addColumn(yAxisType3,yAxisTitle3);
		data.addColumn(yAxisType4,yAxisTitle4);
		var chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(i=0;i<points;i++){
			data.addRow([time[i],value1[i],value2[i],value3[i],value4[i]]);
			}
			chart.draw(data, options);
		  
			var t=1;
			
		//overallChartInterval=setInterval(function(){	
		
			this.overallChartCall=function(hVal,sVal,nVal,aVal,tS){	
			var ptime=time.shift();
			var pvalue1=value1.shift();
			var pvalue2=value2.shift();
			var pvalue3=value3.shift();
			var pvalue4=value4.shift();
			
			if(tS<60){
			time.push(tS+" sec");
		    }else{
			time.push(parseInt(tS/60)+" min"+" "+(tS%60)+" sec");
			}
			value1.push(hVal);
			value2.push(sVal);
			value3.push(nVal);
			value4.push(aVal);
				t++;
		data = new google.visualization.DataTable();
		data.addColumn(xAxisType,xAxisTitle);
		data.addColumn(yAxisType1,yAxisTitle1);
		data.addColumn(yAxisType2,yAxisTitle2);
		data.addColumn(yAxisType3,yAxisTitle3);
		data.addColumn(yAxisType4,yAxisTitle4);
		chart = new google.visualization.LineChart(document.getElementById(chartName));
			
			for(var i=0;i<points;i++){
		data.addRow([time[i],value1[i],value2[i],value3[i],value4[i]]);
				}
			chart.draw(data, options);
			};
		  			
	//	},chartInterval);

        
      }
	
	 