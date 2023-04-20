$(window).on("load");
//$(document).ready("function");

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
  var dayJsString = (dayJsInner.format("H"));
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
  } else {
    document.getElementById("hour-8").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime9 = 9;
  //var calendarTime9 = parseInt(scheduleTime9);

  if (scheduleTime9 === realTime) {
    document.getElementById("hour-9").style.backgroundColor = '#99C262';
  } else if (scheduleTime9 > realTime) {
    document.getElementById("hour-9").style.backgroundColor = '#F8D347';
  } else {
    document.getElementById("hour-9").style.backgroundColor = '#FF6C60';
  }


  var scheduleTime10 = 10;
  //var calendarTime10 = parseInt(scheduleTime10);

  if (scheduleTime10 === realTime) {
    document.getElementById("hour-10").style.backgroundColor = '#99C262';
  } else if (scheduleTime10 > realTime) {
    document.getElementById("hour-10").style.backgroundColor = '#F8D347';
  } else {
    document.getElementById("hour-10").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime11 = 11;
  //var calendarTime11 = parseInt(scheduleTime11);

  if (scheduleTime11 === realTime) {
    document.getElementById("hour-11").style.backgroundColor = '#99C262';
  } else if (scheduleTime11 > realTime) {
    document.getElementById("hour-11").style.backgroundColor = '#F8D347';
  } else {
    document.getElementById("hour-11").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime12 = 12;
  //var calendarTime12 = parseInt(scheduleTime12);

  if (scheduleTime12 === realTime) {
    document.getElementById("hour-12").style.backgroundColor = '#99C262';
  } else if (scheduleTime12 > realTime) {
    document.getElementById("hour-12").style.backgroundColor = '#F8D347';
  } else {
    document.getElementById("hour-12").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime13 = 13;
  //var calendarTime1 = parseInt(scheduleTime1);

  if (scheduleTime13 === realTime) {
    document.getElementById("hour-13").style.backgroundColor = '#99C262';
  } else if (scheduleTime13 > realTime) {
    document.getElementById("hour-13").style.backgroundColor = '#F8D347';
  } else {
    document.getElementById("hour-13").style.backgroundColor = '#FF6C60';
  }

  var scheduleTime14 = 14;
  //var calendarTime2 = parseInt(scheduleTime2);
 
    if (scheduleTime14 === realTime) {
      document.getElementById("hour-14").style.backgroundColor = '#99C262';
    } else if (scheduleTime14 > realTime) {
      document.getElementById("hour-14").style.backgroundColor = '#F8D347';
    } else {
      document.getElementById("hour-14").style.backgroundColor = '#FF6C60';
    }

  var scheduleTime15 = 15;
  //var calendarTime3 = parseInt(scheduleTime3);


  if (scheduleTime15 === realTime) {
      document.getElementById("hour-15").style.backgroundColor = '#99C262';
    } else if (scheduleTime15 > realTime) {
      document.getElementById("hour-15").style.backgroundColor = '#F8D347';
    } else {
      document.getElementById("hour-15").style.backgroundColor = '#FF6C60';
    }

  var scheduleTime16 = 16;
  //var calendarTime4= parseInt(scheduleTime4);

  if (realTime === scheduleTime16) {
    document.getElementById("hour-16").style.backgroundColor = '#99C262';
  } else if (scheduleTime16 > realTime) {
    document.getElementById("hour-16").style.backgroundColor = '#F8D347';
  } else {
    document.getElementById("hour-16").style.backgroundColor = '#FF6C60';
  }

console.log (realTime)


  var scheduleTime17 = 17;
  //var calendarTime5 = parseInt(scheduleTime5);


  if (scheduleTime17 === realTime) {
    document.getElementById("hour-17").style.backgroundColor = '#99C262';
  } else if (scheduleTime17 > realTime) {
    document.getElementById("hour-17").style.backgroundColor = '#F8D347';
  } else  {
    document.getElementById("hour-17").style.backgroundColor = '#FF6C60';
  }

 

  var scheduleTime18 = 18;
  //var calendarTime6 = parseInt(scheduleTime6);
 
    if (scheduleTime18 == realTime) {
      document.getElementById("hour-18").style.backgroundColor = '#99C262';
    } else if (scheduleTime18 > realTime) {
      document.getElementById("hour-18").style.backgroundColor = '#F8D347';
    } else {
      document.getElementById("hour-18").style.backgroundColor = '#FF6C60';
    }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


});