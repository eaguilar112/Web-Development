/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate;
let days;
let monday, tuesday, wednesday, thursday, friday;
let full;
let half;
let clear;
let calculated;
let calculations;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday = document.getElementById('monday');
tuesday = document.getElementById('tuesday');
wednesday = document.getElementById('wednesday');
thursday = document.getElementById('thursday');
friday = document.getElementById('friday');

document.getElementById('monday').onclick = function() {
    monday.classList.add('clicked');
    days += 1;
};
document.getElementById('tuesday').onclick = function() {
    tuesday.classList.add('clicked');
    days += 1;
};
document.getElementById('wednesday').onclick = function() {
    wednesday.classList.add('clicked');
    days += 1;
};
document.getElementById('thursday').onclick = function() {
    thursday.classList.add('clicked');
    days += 1;
};
document.getElementById('friday').onclick = function() {
    friday.classList.add('clicked');
    days += 1;
};

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear = document.getElementById('clear-button');

document.getElementById('clear-button').onclick = function() {
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    days = 0;
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
full = document.getElementById('full');
half = document.getElementById('half');

document.getElementById('half').onclick = function() {
    full.classList.remove('clicked');
    half.classList.add('clicked');
    dailyRate = 20;
};


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById('full').onclick = function() {
    half.classList.remove('clicked');
    full.classList.add('clicked');
    dailyRate = 35;
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
calculated = document.getElementById('calculated-cost');

while (days, days > 0, days++) {
    calculations = (days * dailyRate);
    document.getElementById('calculated-cost').innerHTML = calculations;
}
