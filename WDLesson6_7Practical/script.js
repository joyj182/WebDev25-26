let data, info;

async function init(){   
  let link = "311.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <p>${crash.off_street_name}</p>
                 <hr>
                 <p>${crash.crash_date}</p>
                 <p>${crash.crash_time}</p>
                 <hr>
                 <p>People Injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>People Killed: ${crash.number_of_persons_killed}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByInjuryAndStreet(){
  let output = document.getElementById("output");
  let st = document.getElementById("street").value;
  let injury = parseInt(document.getElementById("injured").value);
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.on_street_name == st && crash.number_of_persons_injured == injury){
      build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <p>${crash.off_street_name}</p>
                 <hr>
                 <p>${crash.crash_date}</p>
                 <p>${crash.crash_time}</p>
                 <hr>
                 <p>People Injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>People Killed: ${crash.number_of_persons_killed}</p>
              </div>`; 
      ct += 1;        
    }
  }
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByInjured(){
  let output = document.getElementById("output");
  let injured = parseInt(document.getElementById("injured2").value);
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

 for(let i = 0; i < data.length; i+=1){
    let crash= data[i];
    if(crash.number_of_persons_injured == injured){
      build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <p>${crash.off_street_name}</p>
                 <hr>
                 <p>${crash.crash_date}</p>
                 <p>${crash.crash_time}</p>
                 <hr>
                 <p>People Injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>People Killed: ${crash.number_of_persons_killed}</p>
              </div>`; 
      ct += 1;        
    }
  }
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}
// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByKilled(){
  let output = document.getElementById("output");
  let killed = parseInt(document.getElementById("killed").value);
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash= data[i];
    if(crash.number_of_persons_killed == killed){
      build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <p>${crash.off_street_name}</p>
                 <hr>
                 <p>${crash.crash_date}</p>
                 <p>${crash.crash_time}</p>
                 <hr>
                 <p>People Injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>People Killed: ${crash.number_of_persons_killed}</p>
              </div>`;
      ct += 1;        
    }
  }
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

