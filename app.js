
function getWeather() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var whetherData = JSON.parse(this.responseText)
    
      var tdate = new Date();
      
      var d = tdate.getDate();
      if(d < 10) { d = '0' + d; }
      var m = tdate.getMonth()+1;
      if(m < 10) { m = '0' + m; }
      var y = tdate.getFullYear();
      var finalDate = y + '-' + m + '-' + d;  
      var todayCounter = 0;
      // For finding today's counter -------------------------------------------
      var temperatureDay1 = 0;
      var weatherDay1 = '';
      var descriptionday1 = '';
      for (var i = 0; i < whetherData.list.length; i++) {
      
        
        if(whetherData.list[i].dt_txt.search(finalDate) == 0)
        {
          todayCounter++;
          // console.log(whetherData.list)
          // console.log(todayCounter);
          temperatureDay1 += whetherData.list[i].main.temp;
          weatherDay1 = whetherData.list[i].weather[0].main;
          descriptionday1 = whetherData.list[i].weather[0].description;    
          document.getElementById("temp1").innerHTML =  Math.round((temperatureDay1/todayCounter)-273.15) + "°C";
          document.getElementById("weather").innerHTML =  weatherDay1 ;
          document.getElementById("description").innerHTML =  descriptionday1 ;
          document.getElementById("date1").innerHTML ="Today";
        }
        else{
          break;
        }     
      }
      // ========================================================================

      // Day 2 ------------------------------------------------------------------
      var temperatureDay2 = 0;
      var weatherDay2 = '';
      var descriptionDay2 = '';
      for (var i = todayCounter; i < todayCounter + 8; i++) {
        temperatureDay2 += whetherData.list[i].main.temp;        
        
      }
      weatherDay2 = whetherData.list[i].weather[0].main;
          descriptionday2 = whetherData.list[i].weather[0].description;    
             
          document.getElementById("temp2").innerHTML = Math.round((temperatureDay2/8)-273.15)+ "°C";
          document.getElementById("weather2").innerHTML =  weatherDay2 ;
          document.getElementById("description2").innerHTML = descriptionday2 ;
          if(whetherData.list[i].dt_txt!=finalDate){
            document.getElementById("date2").innerHTML = "Tomorrow";
          }
     
      // ========================================================================

      // Day 3 ------------------------------------------------------------------
      var temperatureDay3 = 0;
      var weatherDay3 = '';
      var descriptionday3 = '';
      for (var i = todayCounter+8; i < todayCounter + 16; i++) {        
        temperatureDay3 += whetherData.list[i].main.temp;        
      }
      
           weatherDay3 = whetherData.list[i].weather[0].main;
          descriptionday3 = whetherData.list[i].weather[0].description;
          document.getElementById("temp3").innerHTML =  Math.round((temperatureDay3/8)-273.15)+ "°C";
          document.getElementById("weather3").innerHTML =   weatherDay3 ;
          document.getElementById("description3").innerHTML =   descriptionday3 ;
          document.getElementById("date3").innerHTML = whetherData.list[i].dt_txt.substring(0,10);
     
      // ========================================================================

      // Day 4 ------------------------------------------------------------------
      var temperatureDay4 = 0;
      var weatherDay4 = '';
      var descriptionday4 = '';
      for (var i = todayCounter+16; i < todayCounter + 24; i++) {
        temperatureDay4 += whetherData.list[i].main.temp;        
      }
      
      weatherDay4 = whetherData.list[i].weather[0].main;
          descriptionday4 = whetherData.list[i].weather[0].description;
         
          document.getElementById("temp4").innerHTML =  Math.round((temperatureDay4/8)-273.15)+ "°C";
          document.getElementById("weather4").innerHTML =  weatherDay4;
          document.getElementById("description4").innerHTML =   descriptionday4 ;
          document.getElementById("date4").innerHTML = whetherData.list[i].dt_txt.substring(0,10);
     
      // ========================================================================

      
      // Day 5 ------------------------------------------------------------------
      var temperatureDay5 = 0;
      var weatherDay5= '';
      var descriptionday5 = '';
      for (var i = todayCounter+24; i < todayCounter + 32; i++) {
        temperatureDay5 += whetherData.list[i].main.temp;        
      }
         
          weatherDay5 = whetherData.list[i].weather[0].main;
          descriptionday5 = whetherData.list[i].weather[0].description;
          
          document.getElementById("temp5").innerHTML =  Math.round((temperatureDay5/8)-273.15) + "°C";
          document.getElementById("weather5").innerHTML =  weatherDay5 ;
          document.getElementById("description5").innerHTML =  descriptionday5 ;
          document.getElementById("date5").innerHTML = whetherData.list[i].dt_txt.substring(0,10);
   
      // ========================================================================
    }
  };
  xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=pune&APIKEY=0d9288985ac2cabefe73a53821810614", true);
  xhttp.send();
}

getWeather();