//renders all elements in html before running the code
$(document).ready("function");

$(function () {
  //pulls the date and time for top of page
  var dayJsobject = dayjs()
  console.log(dayJsobject.format("MM/DD/YYYY h:mm A"));
  document.getElementById("dateTime").innerHTML = dayJsobject.format("MM/DD/YYYY h:mm A");
  //gets hour from 24hour clock into a number
  var dayJsInner = dayjs();
  var dayJsString = (dayJsInner.format("H"));
  var realTime = parseInt(dayJsString);

  console.log(realTime);



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  //SAVE BUTTON
  $(".saveBtn").on("click", function(){
    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, textValue);
    localStorage.getItem();
  })



  //compares the times of the schedule to the current time and changes color based on past, present, future
  var scheduleTime8 = 8;
  if (scheduleTime8 === realTime) {
    document.getElementById("hour-8").style.backgroundColor = '#ff6961';
  } else if (scheduleTime8 > realTime) {
    document.getElementById("hour-8").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-8").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime9 = 9;
  if (scheduleTime9 === realTime) {
    document.getElementById("hour-9").style.backgroundColor = '#ff6961';
  } else if (scheduleTime9 > realTime) {
    document.getElementById("hour-9").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-9").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime10 = 10;
  if (scheduleTime10 === realTime) {
    document.getElementById("hour-10").style.backgroundColor = '#ff6961';
  } else if (scheduleTime10 > realTime) {
    document.getElementById("hour-10").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-10").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime11 = 11;
  if (scheduleTime11 === realTime) {
    document.getElementById("hour-11").style.backgroundColor = '#ff6961';
  } else if (scheduleTime11 > realTime) {
    document.getElementById("hour-11").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-11").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime12 = 12;
  if (scheduleTime12 === realTime) {
    document.getElementById("hour-12").style.backgroundColor = '#ff6961';
  } else if (scheduleTime12 > realTime) {
    document.getElementById("hour-12").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-12").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime13 = 13;
  if (scheduleTime13 === realTime) {
    document.getElementById("hour-13").style.backgroundColor = '#ff6961';
  } else if (scheduleTime13 > realTime) {
    document.getElementById("hour-13").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-13").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime14 = 14;
  if (scheduleTime14 === realTime) {
    document.getElementById("hour-14").style.backgroundColor = '#ff6961';
  } else if (scheduleTime14 > realTime) {
    document.getElementById("hour-14").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-14").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime15 = 15;
  if (scheduleTime15 === realTime) {
    document.getElementById("hour-15").style.backgroundColor = '#ff6961';
  } else if (scheduleTime15 > realTime) {
    document.getElementById("hour-15").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-15").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime16 = 16;
  if (realTime === scheduleTime16) {
    document.getElementById("hour-16").style.backgroundColor = '#ff6961';
  } else if (scheduleTime16 > realTime) {
    document.getElementById("hour-16").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-16").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime17 = 17;
  if (scheduleTime17 === realTime) {
    document.getElementById("hour-17").style.backgroundColor = '#ff6961';
  } else if (scheduleTime17 > realTime) {
    document.getElementById("hour-17").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-17").style.backgroundColor = '#d3d3d3';
  }

  var scheduleTime18 = 18;
  if (scheduleTime18 == realTime) {
    document.getElementById("hour-18").style.backgroundColor = '#ff6961';
  } else if (scheduleTime18 > realTime) {
    document.getElementById("hour-18").style.backgroundColor = '#77dd77';
  } else {
    document.getElementById("hour-18").style.backgroundColor = '#d3d3d3';
  }


  //loop?



  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


});