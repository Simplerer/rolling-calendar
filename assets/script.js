$(function () {
  
  today = dayjs().format('dddd, MMMM Do, h A');
  var todaysDate = $('#currentDay');
  todaysDate.text(today);
  var currentHour = dayjs().hour();


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

    // var reload = localStorage.getItem(hour, comments);
    // console.log(reload);
    // $('.time-block').each(functioin)() {
    //   reload
    // }

    
    
    $('.time-block').on('click', '.saveBtn', function(event) {
          ;
      var comments = $(this).prev().val();
      var hour = $(this).parent().attr('id');
  
      console.log(comments);
      
  
      localStorage.setItem(hour, comments);
    })
      
    
    

 

});








