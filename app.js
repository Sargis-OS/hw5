$(document).ready(function() {
  var dailyTasks = JSON.parse(localStorage.getItem("myDay")) || {};
  $(".js-save").on("click", function() {
    /* get the key and the value */
    var key = $(this).data("key");
    var value = $(`#${key}`).val();

    var currentHour = moment(moment().format("hh:mm A"), "hh:mm A").hours();
    var amPm = moment()
      .format("hh:mm A")
      .slice(-2);
    console.log(amPm);
    //loop through your hours
    var hours = $(".time");

    for (var i = 0; i < hours.length; i++) {
      var hourHtml = hours[i];
      var blockHour = $(hourHtml).data("hour");
      if (blockHour < currentHour) {
        console.log("red");
      }
      // style it
      if (blockHour === currentHour) {
        console.log("blue");
      }
      if (blockHour > currentHour) {
        console.log("green");
      }
    }

    // syle it

    // save it local storage
    dailyTasks[key] = value;
    console.log(dailyTasks);
    localStorage.setItem("myDay", JSON.stringify(dailyTasks));
  });
  /* init */
  /* pull from local storage */
  $("#hour-9").val(dailyTasks["hour-9"]);
  $("#hour-10").val(dailyTasks["hour-10"]);
  $("#hour-11").val(dailyTasks["hour-11"]);
});
