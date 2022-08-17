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


//function to get time from local storage
function timep() {

    var i9 = JSON.parse(localStorage.getItem("9:00 am"));
    nine.val(i9);
  
    var i10 = JSON.parse(localStorage.getItem("10:00 am"))
    ten.val(i10);
    
    var i11 = JSON.parse(localStorage.getItem("11:00 am"))
    eleven.val(i11);
    
    var i12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelve.val(i12);
    
    var i1 = JSON.parse(localStorage.getItem("1:00 pm"))
    one.val(i1);
    
    var i2 = JSON.parse(localStorage.getItem("2:00 pm"))
    two.val(i2);
    
    var i3 = JSON.parse(localStorage.getItem("3:00 pm"))
    three.val(i3);
   
    var i4 = JSON.parse(localStorage.getItem("4:00 pm"))
    four.val(i4);
    
    var i5 = JSON.parse(localStorage.getItem("5:00 pm"))
    five.val(i5);
  } 


  //function for the background of the text area to show current time
function back () {
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hours = parseInt(hours);
        console.log(timeTest);
        console.log(hour);
  
      //adds a class depending on if its in the past, present, or future time
        if (hours > timeTest) {
            $(this).addClass("past");
        } else if (hours < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }


 
    

  // Save to local storage
  $(".saveBtn").on("click", function(){
    input = $(this).siblings(".form-control").val().trim();
    hourt = $(this).siblings(".hour").text().trim();
    console.log(hourt);
    localStorage.setItem(hourt, JSON.stringify(input));

  })

timep()
    back()