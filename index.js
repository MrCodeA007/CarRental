"use strict"
//--------------------------------------------------------------------------
function onBtnClickedfunction () {
  const numberOfDaysEl = document.getElementById(`numbersOfDays`);
  const answer = basicCarRental * numberOfDaysEl.value;
  carRentalEl.innerHTML = answer;
  //console.log(`click`)
}
const basicCarRental = 29.99;
const  carRentalEl = document.getElementById(`carRental`);
//const carRentalPEl = document.getElementById(`carRentalP`)
const totalCostEl = document.getElementById(`totalCost`);
totalCostEl.onclick = onBtnClickedfunction
//---------------------------------------------------------------------------
function onTollCheckedFunction (){
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
radioNoEl.onclick = on25Function