/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
//and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 35;
let number_of_days = 0;
const clickedDays = document.querySelectorAll('.day-selector li');
const dayType = document.querySelectorAll('.small-button');
const clearDay = document.getElementById('clear-button');
const halfDay = document.getElementById('half');
const fullDay = document.getElementById('full');
let calculatedCost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayButtonClick(event) {
    if (event.target.classList.contains('clicked')) {
    }
    else {
        event.target.classList.add('clicked');
        number_of_days +=1;
    }
    recalculate();
}

clickedDays.forEach(button => {
    button.addEventListener('click', dayButtonClick);
  });



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function removeClickedDays() {
    clickedDays.forEach(button => button.classList.remove('clicked'));
    number_of_days= 0;
    recalculate();
}

clearDay.addEventListener("click", removeClickedDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener("click", function () {
    cost_per_day = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    recalculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDay.addEventListener("click", function () {
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    cost_per_day = 35;
    recalculate();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let calculatedCost = cost_per_day * number_of_days;
    costLabel.innerHTML = calculatedCost;
}
