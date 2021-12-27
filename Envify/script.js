var factList = [
  "Five warmest years on record have occured in the last decade",
  "20 fossil fuel companies are reponsible for more than 1/3 of the global emissions.", 
  "America makes up 5% of the population but throws enough plastic bottles in a week to encircle the Earth 5 times.", 
  "On average one supermarket goes though more than 60 million plastic bags a year,", 
  "If there isnt a decrease in greenhouse gas emissions the tempratures will rise as much as 10 degrees F by the end of the century",
  "A glass bottle can take 4000+ years to decompose",


];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

