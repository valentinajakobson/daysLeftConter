// let today = new Date();
let weekday = new Array(7); //declaring array to 
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let weekday1 = []; //declaring an empty array to push "bussiness days there" there
let alldays = [];//declaring an empty array to push "all days" there


function daysLeft(){ //implimenting a function to calculate all days left + business days left
  let startDate = new Date(document.getElementById('start').value); //getting start date
    console.log(startDate);
  let endDate = new Date(document.getElementById('end').value); //getting end date
    console.log(endDate);
// version 1
  while (startDate < endDate) { //loop to count days left
  startDate.setDate(startDate.getDate()+1); //set date = from this date; get gate - getting only number and adding +1 day each time
  alldays.push(startDate);
  // console.log(alldays);
  let n = weekday[startDate.getDay()];
  console.log(n); // to show weekday names in console log
  if (startDate.getDay() !== 0 && startDate.getDay() !== 6 ) { //not pushing if index of a day is 0 (sunday) or 6 (saturday)
    weekday1.push(startDate);
  }
}
  console.log(weekday1.length);
  console.log(alldays.length);

  document.getElementById("answer").innerHTML = alldays.length + " day(s) left"; //print to HTML
  document.getElementById("business").innerHTML = weekday1.length + " working day(s) left"; //print to HTML
  realTimer();
  }

function bdaysLeft(){ //implimenting a function to calculate business days left and exclude also holidays
    let startDate = new Date(document.getElementById('start').value); //getting start date
    console.log(startDate);
  let endDate = new Date(document.getElementById('end').value); //getting end date
    console.log(endDate);
  while (startDate < endDate) {
  startDate.setDate(startDate.getDate()+1); //set date = from this date; get gate - getting only number and adding +1 day each time
  alldays.push(startDate);
  // console.log(alldays);
  let n = weekday[startDate.getDay()];
  console.log(n);
  if (startDate.getDay() !== 0 && startDate.getDay() !== 6 ) {
    weekday1.push(startDate);
  }
  // holidays
  let holidays = ['2019-05-30']; //more dates can be added
  let withoutHolidays = weekday1.length - holidays.length;//excluding holidays from business days
  console.log(withoutHolidays);
  document.getElementById("holidays").innerHTML = withoutHolidays + " working day(s) left (holidays excluded)"; //print to HTML
}
  console.log(weekday1.length);
  document.getElementById("business").innerHTML = weekday1.length + " working day(s) left"; //print to HTML
  }

  // if (startDate === "") { //I wanted to make also confition "default startDay = today" when user dont put a starting date
  //      startDate = today;
  //  }

// version 2 for simple counting all days left
  // const oneDay = 24*60*60*1000; //one day in milliseconds for JS counting
  // let leftDays = Math.ceil((endDate.getTime() - startDate.getTime())/oneDay); // counting days left, Math.ceil returns the smallest integer greater or equeal to a given number
  // console.log (leftDays);
  // document.getElementById("answer").innerHTML = leftDays + " days left"; //to show in HTML file


//countdown counter from w3schools, edited, works only if a starting point is "NOW" not for entered staring date
 function realTimer(){
  let countDownDate = new Date(document.getElementById('end').value).getTime();

// Update the count down every 1 second
  let x = setInterval(function() {

  // Get start date and time
  let start = new Date(document.getElementById('start').value).getTime();

  // Find the distance between start and the count down date
  let distance = countDownDate - start;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


}, 1000);

 }
