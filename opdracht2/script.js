"use strict";

// Declare variables
var student = "Jari Huiskamp";
var year = 2018;
var group = "MD2B";
var title = "JavaScript Bootcamp " + year;

// Init
instruction2();


//Instructions

function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    refactoring("year", year);
    refactoring("student", student);

}

function refactoring(classname, value) {
  var elements = document.getElementsByClassName(classname);
  for (var i = 0; i < elements.length; i++) {
      elements[i].innerText = value;
  }
}

function instruction3() {
    var description = "Na op de link 'Click Event' te hebben geklikt werden de header,"
        + " de beschrijving en de oplossing van de opdracht aangepast";

    document.getElementById("instructionHeader").innerText = "Opdracht 3";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerText = "";
}
