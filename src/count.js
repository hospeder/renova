var display = document.getElementById('count-projects')
var count = 0
var duration = 3000
var interval = 80
var steps = duration / interval
var increment = 100 / steps

var timer = setInterval(function () {
  count += increment
  display.innerText = Math.round(count)
  if(count >= 100){
    clearInterval(timer);
    display.innerText = '100'
  }
}, interval)

var displayMarket = document.getElementById('count-market')
var countMarket = 0
var durationTimer = 3000
var intervalTimer = 30
var stepsTimer = duration/intervalTimer
var incrementValue = 10 / steps

var timerMarket = setInterval(function () {
  countMarket += incrementValue
  displayMarket.innerText = Math.round(countMarket)
  if(countMarket >= 20){
    clearInterval(timerMarket)
    displayMarket.innerText = '20'
  }
},intervalTimer)