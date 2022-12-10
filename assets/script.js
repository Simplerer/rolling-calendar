$(function () {
  
  today = dayjs().format('dddd, MMMM Do, h A');
  var todaysDate = $('#currentDay');
  todaysDate.text(today);
  var currentHour = dayjs().hour();
  var hour = ''
  var comments

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
      // var savedTasks = localStorage.getItem($(this).parent().attr());
      // $(this).val(savedTasks);
      
    });

    
    // var getTime = function () {
    //   $('.description').each(function() {
    //     var savedTasks = localStorage.getItem(hour);
    //     var textArea = $(this).val()
    //     textArea = savedTasks.val()
    //     console.log(savedTasks)
         
    //   })
    // }
    
         
    
  });
  
  
  
  
  
  
  
  
  
  // $('.row').each(function() {
  //   })
  // $(function () {
  //   //Save button function
  //   $(".saveBtn").on("click", function () {
  //     var text = $(this).siblings(".col-md-9").val();
  //     var time = $(this).parent().attr("id");
  //     localStorage.setItem(time, text);
  //   });

  
 

//   $("#8 .col-md-9").val(localStorage.getItem("8"));
//     $("#9 .col-md-9").val(localStorage.getItem("9"));
//     $("#10 .col-md-9").val(localStorage.getItem("10"));
//     $("#11 .col-md-9").val(localStorage.getItem("11"));
//     $("#12 .col-md-9").val(localStorage.getItem("12"));
//     $("#13 .col-md-9").val(localStorage.getItem("13"));
//     $("#14 .col-md-9").val(localStorage.getItem("14"));
//     $("#15 .col-md-9").val(localStorage.getItem("15"));
//   });
// });





