// using Moment.js to display the current day & time
var currentDay = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

// function that changes the colour of the text boxes depending on past, present or future
function colourPicker() {
  // variable to get the time in military format so it can be compared to the data-hour attributes
  var currentHour = moment().hours();

  $('.description').each(function () {
    var currentEL = $(this);
    var plannerHour = parseInt(currentEL.attr('data-hour'));

    // if statement comparing the data-hour to the current time and adding the appropriate classes
    if (plannerHour > currentHour) {
      currentEL.addClass('future');
    } else if (plannerHour === currentHour) {
      currentEL.addClass('present');
    } else {
      currentEL.addClass('past');
    }
  });
}

// calling the colourPicker function
colourPicker();

// when the save button is clicked it stores the content from the text input field into local storage
$('.saveBtn').click(function () {
  var currentEL = $(this);
  var textInput = currentEL.siblings('.description').val();
  var hour = currentEL.siblings('.hour').text();

  localStorage.setItem(hour, textInput);
});

// function that gets the content from local storage and displays on the page
function showSavedInputs() {
  $('.hour').each(function () {
    var currentEL = $(this);
    var savedHour = currentEL.text();
    // variable that gets the local
    var savedTextInput = localStorage.getItem(savedHour);

    // if the text input field isn't empty then add the value (content) of the local storage
    if (savedTextInput !== null) {
      currentEL.siblings('.description').val(savedTextInput);
      return;
    }
  });
}

// calling the showSavedInputs function
showSavedInputs();
