
"use strict";
//creating HTML elements with DOM
  const heading=document.createElement("header");
  document.body.appendChild(heading);
  heading.innerHTML="Check Holidays";
  heading.id="title";
  const description=document.createElement("p");
  document.body.appendChild(description);
  description.id="description";
  description.innerHTML="Please enter the below specified fields and click on Submit button to know about holiday on a date.";
  const division1=document.createElement("div");
  division1.class="container";
  division1.id="div1";
  document.body.appendChild(division1);
  const row=document.createElement("div");
  row.class="row";
  row.id="row1";
  document.getElementById("div1").appendChild(row);
  const col1=document.createElement("div");
  col1.class="col";
  col1.id="column1";
  document.getElementById("row1").appendChild(col1);
  const col2=document.createElement("div");
  col2.class="col";
  col2.id="column2";
  document.getElementById("row1").appendChild(col2);
  const countryLevel=document.createElement("level");
  countryLevel.innerHTML="Country( Please enter first two letters of the particular country)";
  document.getElementById("column1").appendChild(countryLevel);
  const countryInput=document.createElement("input");
  countryInput.type="text";
  countryInput.id="country";
  countryInput.value="US";
  document.getElementById("column1").appendChild(countryInput);
  const space1=document.createElement("br");
  document.getElementById("column1").appendChild(space1);
  const yearLevel=document.createElement("level");
  yearLevel.innerHTML="Year";
  document.getElementById("column1").appendChild(yearLevel);
  const yearInput=document.createElement("input");
  yearInput.type="text";
  yearInput.id="year";
  yearInput.value="2019";
  document.getElementById("column1").appendChild(yearInput);
  const space2=document.createElement("br");
  document.getElementById("column1").appendChild(space2);
  const monthLevel=document.createElement("level");
  monthLevel.innerHTML="Month";
  document.getElementById("column1").appendChild(monthLevel);
  const monthInput=document.createElement("input");
  monthInput.type="text";
  monthInput.id="month";
  monthInput.value="12";
  document.getElementById("column1").appendChild(monthInput);
  const space3=document.createElement("br");
  document.getElementById("column1").appendChild(space3);
  const dayLevel=document.createElement("level");
  dayLevel.innerHTML="Day";
  document.getElementById("column1").appendChild(dayLevel);
  const dayInput=document.createElement("input");
  dayInput.type="text";
  dayInput.id="day";
  dayInput.value="25";
  document.getElementById("column1").appendChild(dayInput);
  const submitBtn=document.createElement("button");
  submitBtn.type="button";
  submitBtn.class="btn1";
  submitBtn.innerHTML="SUBMIT";
  submitBtn.id="submit";
  document.getElementById("column1").appendChild(submitBtn);
 const view=document.createElement("p");
 view.id="display";
 document.getElementById("column2").appendChild(view);

 
 function calender() {
  var country,year,month,day; 
   
  document.getElementById("submit").onclick=async function holiday(){
//async function starts
   country=document.getElementById("country").value;
   year=document.getElementById("year").value;
   month=document.getElementById("month").value;
   day=document.getElementById("day").value;
//fetching API  
 await fetch(`https://holidays.abstractapi.com/v1/?api_key=1ae44b4b2d96488ea08332d495f2ecce&country=${country}&year=${year}&month=${month}&day=${day}`)
.then(res=> res.json())
.then(data=>{
console.log(data);
document.getElementById("display").innerHTML="";
//displaying the fetched data in webpage
for(let i=0;i<data.length;i++)
{
document.getElementById("display").innerHTML+=`Country:${data[i].country}<br>Date:${data[i].date}<br>Date-Day:${data[i].date_day}<br>Date-Month:${data[i].date_month}<br>Date-Year:${data[i].date_year}<br>Location:${data[i].location}<br>Name of Holiday:${data[i].name}<br>Type:${data[i].type}<br>Week-Day:${data[i].week_day}<br><br>`;
}
})
}
let date_object=holiday();
date_object
  .then(function (value) {                       //catch is used to check for errors
    console.log(JSON.stringify(value));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("fetch api ran successfully !");   //promise ran successfully
  });
}
calender();
