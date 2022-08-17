//varaibles used
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#13pm");
var two = $("#14pm");
var three = $("#15pm");
var four = $("#16pm");
var five = $("#17pm");


//Format Date and time 
var date = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var hour = moment().format('h:mm:ss a');
var hours = moment().hours();
var input;
var hourt;

//Format for current day
var interval = setInterval(function() {
  var time = moment();
  $('#currentDay').html(time.format('YYYY MMMM DD') + ' '
                      + time.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(date + " " + time.format('hh:mm:ss A'));
}, 100);