$(window).on("load");
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//SAVE BUTTON
//var saveButton= document.getElementById("button")
//saveButton.addEventListener("click", function(){
//var data = JSON.parse(localStorage.getItem('data'));
//document.getElementById('hour-8').textContent =data.events
//});


$(function () {

  var dayJsobject = dayjs()
  console.log(dayJsobject.format("MM/DD/YYYY h:mm A"));
  document.getElementById("dateTime").innerHTML = dayJsobject.format("MM/DD/YYYY h:mm A");

  var dayJsInner = dayjs();
  var dayJsString = (dayJsInner.format("h A"));
  var realTime = parseInt(dayJsString);

  console.log(realTime)
  //JSON.stringify

  ;
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    //parse Int to compare?
  var scheduleTime8 = 8;
  //var calendarTime8 = parseInt(scheduleTime8);

  if (scheduleTime8 === realTime) {
    document.getElementById("hour-8").style.backgroundColor = '#99C262';
  } else if (scheduleTime8 > realTime) {
    document.getElementById("hour-8").style.backgroundColor = '#F8D347';
  } else (scheduleTime8 < realTime); {
    document.getElementById("hour-8").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime9 = 9;
  //var calendarTime9 = parseInt(scheduleTime9);

  if (scheduleTime9 === realTime) {
    document.getElementById("hour-9").style.backgroundColor = '#99C262';
  } else if (scheduleTime9 > realTime) {
    document.getElementById("hour-9").style.backgroundColor = '#F8D347';
  } else (scheduleTime9 < realTime); {
    document.getElementById("hour-9").style.backgroundColor = '#FF6C60';
  }


  var scheduleTime10 = 10;
  //var calendarTime10 = parseInt(scheduleTime10);

  if (scheduleTime10 === realTime) {
    document.getElementById("hour-10").style.backgroundColor = '#99C262';
  } else if (scheduleTime10 > realTime) {
    document.getElementById("hour-10").style.backgroundColor = '#F8D347';
  } else (scheduleTime10 < realTime); {
    document.getElementById("hour-10").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime11 = 11;
  //var calendarTime11 = parseInt(scheduleTime11);

  if (scheduleTime11 === realTime) {
    document.getElementById("hour-11").style.backgroundColor = '#99C262';
  } else if (scheduleTime11 > realTime) {
    document.getElementById("hour-11").style.backgroundColor = '#F8D347';
  } else (scheduleTime11 < realTime); {
    document.getElementById("hour-11").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime12 = 12;
  //var calendarTime12 = parseInt(scheduleTime12);

  if (scheduleTime12 === realTime) {
    document.getElementById("hour-12").style.backgroundColor = '#99C262';
  } else if (scheduleTime12 > realTime) {
    document.getElementById("hour-12").style.backgroundColor = '#F8D347';
  } else (scheduleTime12 < realTime); {
    document.getElementById("hour-12").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime1 = 1;
  //var calendarTime1 = parseInt(scheduleTime1);

  if (scheduleTime1 === realTime) {
    document.getElementById("hour-1").style.backgroundColor = '#99C262';
  } else if (scheduleTime1 > realTime) {
    document.getElementById("hour-1").style.backgroundColor = '#F8D347';
  } else (scheduleTime1 < realTime); {
    document.getElementById("hour-1").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime2 = 2;
  //var calendarTime2 = parseInt(scheduleTime2);
 
    if (scheduleTime2 === realTime) {
      document.getElementById("hour-2").style.backgroundColor = '#99C262';
    } else if (scheduleTime2 > realTime) {
      document.getElementById("hour-2").style.backgroundColor = '#F8D347';
    } else (scheduleTime2 < realTime); {
      document.getElementById("hour-2").style.backgroundColor = '#FF6C60';
    }

  var scheduleTime3 = 3;
  //var calendarTime3 = parseInt(scheduleTime3);


  if (scheduleTime3 === realTime) {
      document.getElementById("hour-3").style.backgroundColor = '#99C262';
    } else if (scheduleTime3 > realTime) {
      document.getElementById("hour-3").style.backgroundColor = '#F8D347';
    } else (scheduleTime3< realTime); {
      document.getElementById("hour-3").style.backgroundColor = '#FF6C60';
    }

  var scheduleTime4 = 4;
  //var calendarTime4= parseInt(scheduleTime4);

  if (realTime === scheduleTime4) {
    document.getElementById("hour-4").style.backgroundColor = '#99C262';
  } else if (scheduleTime4 > realTime) {
    document.getElementById("hour-4").style.backgroundColor = '#F8D347';
  } else (scheduleTime4 < realTime); {
    document.getElementById("hour-4").style.backgroundColor = '#FF6C60';
  }

console.log (realTime)


  var scheduleTime5 = 5;
  //var calendarTime5 = parseInt(scheduleTime5);


  if (scheduleTime5 === realTime) {
    document.getElementById("hour-5").style.backgroundColor = '#99C262';
  } else if (scheduleTime5 > realTime) {
    document.getElementById("hour-5").style.backgroundColor = '#F8D347';
  } else (scheduleTime5 < realTime); {
    document.getElementById("hour-5").style.backgroundColor = '#FF6C60';
  }

 

  var scheduleTime6 = 6;
  //var calendarTime6 = parseInt(scheduleTime6);
 
    if (scheduleTime6 === realTime) {
      document.getElementById("hour-6").style.backgroundColor = '#99C262';
    } else if (scheduleTime6 > realTime) {
      document.getElementById("hour-6").style.backgroundColor = '#F8D347';
    } else (scheduleTime6 < realTime); {
      document.getElementById("hour-6").style.backgroundColor = '#FF6C60';
    }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


});