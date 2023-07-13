var txt = document.createElement("label")
txt.innerHTML = "test"

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Calculate power";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
body.appendChild(txt);

// 3. Add event handler
button.addEventListener ("click", function() {


  var x1 = document.getElementById("voltage").value;
  var x2 = document.getElementById("current").value;

  var url= "https://lx115y0ieh.execute-api.ap-southeast-2.amazonaws.com/dev/SolarFunction"


  //document.getElementById("num_text").innerHTML="whatever your text or number";
  
  var answer = "Voltage is " + x1 + "V and current is " + x2 + "A";

  document.getElementById("result").value=answer; // Put result in input box
  txt.innerHTML = answer
  
  // document.getElementById("MyEdit").innerHTML = answer;​

  // axios.get(url, {
    
  //   // responseType: "json",
  //   headers: {
  //     // "Content-Type": "application/json",
  //     // "Cookie": this.sessionid,
  //     "Access-Control-Allow-Origin": '*',
  //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //     "Access-Control-Allow-Headers":  "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
      
  //     }

  //   }
  // ).then(response => {
  //   // txt.innerHTML = response.data;
  //   // console(response.data);
  // })




  axios.get(url).then(response => {
    txt.innerHTML = response.request.response;
    // console(response.data);
    console.log(response.request.response);
  })




});

