var Memory = require('./../js/memory.js').memoryModule;


$(document).ready(function(){
  var counter = 0;
  var newMemory = new Memory();
  var value1,value2,id1,id2, clicked1, clicked2;

  $(".gameboard").children().click(function(){
    if(counter===0){
      value1 = $(this).attr('data-value');
      id1 = $(this).attr('id');
      $("#" + id1 + " .back").hide();
      $("#" + id1 + " .front").show();
      clicked1 = true;
      counter++;

    }else if(counter===1){
      if($(this).attr('id') !== id1){
        value2 = $(this).attr('data-value');
        id2 = $(this).attr('id');

        $("#" + id2 + " .back").hide();
        $("#" + id2 + " .front").show();
        clicked2 = true;
        counter++;
      } else {
        value2 = null;
        id2 = null;
        counter = 1;
      }
    }

    if(counter===2){
      var outcome = newMemory.check(value1,value2);
      if(outcome){
        $("#" + id1 + " .front").show();
        $("#" + id2 + " .front").show();
        if(newMemory.maxScore===6){
          alert("You win");
        }
        counter =0;
      }

       else{
        setTimeout(function(){
        $("#" + id1 + " .back").show();
        $("#" + id2 + " .back").show();
        $("#" + id1 + " .front").hide();
        $("#" + id2 + " .front").hide();
        counter = 0; }, 300);
      }
    }
  });
});
