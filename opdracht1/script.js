"use strict";

// Declare variables
var student = "Jari Huiskamp";
var year = 2018;
var group = "MD2B";
var title = "JavaScript Bootcamp " + year;

display();

function display() {
  document.title = title;
  document.getElementById("pageHeader").innerText = title;

  document.getElementById("group").innerText = group;

      var elements = document.getElementsByClassName("year");
      for (var i = 0; i < elements.length; i++) {
          elements[i].innerText = year;
      }

      var elements = document.getElementsByClassName("student");
      for (var i = 0; i < elements.length; i++) {
          elements[i].innerText = student;
      }
}

function instruction3() {
  
}
