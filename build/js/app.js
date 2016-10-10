(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      // if(outcome&&newMemory.maxScore===6){
      //   alert("you win");
      // }else if(outcome){
      //   $("#" + id1 + " .front").show();
      //   $("#" + id2 + " .front").show();
      //   counter = 0;
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

},{"./../js/memory.js":2}],2:[function(require,module,exports){
function Memory(){
this.maxScore =0;
};



Memory.prototype.check = function (check1,check2) {
  if(check1===check2){
    this.maxScore++;
    return true;
  }else{
    return false;
  }
}

exports.memoryModule = Memory;

},{}]},{},[1]);
