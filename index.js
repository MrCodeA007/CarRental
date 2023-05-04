"use strict"
//--------------------------------------------------------------------------
function onBtnClickedfunction () {
 
  const carRentalCost = basicCarRental * numberOfDaysEl.value;
  carRentalEl.innerHTML = carRentalCost.toFixed(2);
  //console.log(`click`)
  //------------------------------------------------------------------------
  let extraDailyCost = 0;
if (document.getElementById('tollTag').checked) {
  extraDailyCost += 3.95;
}
if (document.getElementById('GPS').checked) {
  extraDailyCost += 2.95;
}
if (document.getElementById('roadAssist').checked) {
  extraDailyCost += 2.95;
} 

const totaloptionsCost = extraDailyCost * numberOfDaysEl.value;
//console.log(`totaloptionsCost`,totaloptionsCost)
const optionsEl = document.getElementById(`options`);
optionsEl.innerHTML = totaloptionsCost.toFixed(2);
//-----------------------------------------------------------------
let under25surcharge = 0;
if (document.getElementById('25Yes').checked) {
  under25surcharge = carRentalEl.innerHTML * 0.3;
}
const under25surchargeEl = document.getElementById(`25surCharge`)
under25surchargeEl.innerHTML = under25surcharge.toFixed(2);

const totalDueEl = document.getElementById(`totalDue`)
totalDueEl.innerHTML = under25surchargeEl.innerHTML + optionsEl.innerHTML+ carRentalEl.innerHTML;

}

const numberOfDaysEl = document.getElementById(`numbersOfDays`);
const basicCarRental = 29.99;
const  carRentalEl = document.getElementById(`carRental`);
const totalCostEl = document.getElementById(`estimatetotalCost`);
totalCostEl.onclick = onBtnClickedfunction
//---------------------------------------------------------------------------





/*function onTollCheckedFunction (){
    console.log(`checked`)
}

const tolltagEl = document.getElementById(`tollTag`)
tolltagEl.onclick = onTollCheckedFunction
//-----------------------------------------------------
function onGPSCheckedFunction (){
    console.log(`checked`)
}

const GPSEl = document.getElementById(`GPS`)
GPSEl.onclick = onGPSCheckedFunction
//------------------------------------------------------
function onAssistCheckedFunction () {
    console.log(`checked`)
}

const roadAssistEl = document.getElementById(`roadAssist`)
roadAssistEl.onclick = onAssistCheckedFunction
//-------------------------------------------------------
function on25Function () {
    console.log('checked')
}

const radioNoEl = document.getElementById(`25No`)
radioNoEl.onclick = on25Function*/