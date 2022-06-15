
function clock1(){
var clock = new Date()
var day = clock.getDay()
var hours = clock.getHours()
var minutes = clock.getMinutes()
var seconds = clock.getSeconds()

if(day == 1,2,3,4,5,6,7){
  document.getElementById('day').innerHTML = `0${day}`
  
}
document.getElementById('hours').innerHTML = hours
document.getElementById('minutes').innerHTML = minutes
document.getElementById('seconds').innerHTML = seconds
setTimeout(clock1, 1000);
}
clock1()
