// using Moment.js to display the current day
var currentDay = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

function colourPicker() {
  var currentHour = moment().hours();

  $('.description').each(function () {
    var currentEL = $(this);
    var plannerHour = parseInt($(currentEL).attr('data-hour'));

    if (plannerHour > currentHour) {
      $(currentEL).addClass('future');
    } else if (plannerHour === currentHour) {
      $(currentEL).addClass('present');
    } else {
      $(currentEL).addClass('past');
    }
  });
}

colourPicker();
