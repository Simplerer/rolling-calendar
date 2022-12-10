$(function () {
  
  today = dayjs().format('dddd, MMMM Do, h A');
  var todaysDate = $('#currentDay');
  todaysDate.text(today);
  var currentHour = dayjs().hour();

  $('.time-block').on('click', '.saveBtn', function(event) {
    ;
    var comments = $(this).prev().val();
    var hour = $(this).parent().attr('id');
    
    localStorage.setItem(hour, comments);
    
  })

  $('.description').each(function() {
    var savedTasks = localStorage.getItem($(this).parent().attr('id'));
    $(this).val(savedTasks);
  })

  $('.description').each(function() {
    var timeField = parseInt($(this).parent(0).attr('id'));
    console.log(timeField);
      if (timeField < currentHour) {
        $(this).parent().addClass('past');
      } else if (timeField === currentHour) {
        $(this).parent().addClass('present');
      } else {
        $(this).parent().addClass('future');
      }
    
    });

    
  });
  
  
  
  






