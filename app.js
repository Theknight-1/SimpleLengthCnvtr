// Getting all the data from the page and storing them into variables
const length = document.querySelector("#amount");
const convertFrom = document.querySelector("#from");
const convertTo = document.querySelector("#to");
const formula = document.querySelector(".content");
const result = document.querySelector("#result");
const selectElem = document.querySelectorAll('select')


// get options values
const units = ["meter", "kilometer"];

// displaying formulas
const hints = [
    // 0
    {sameUnit : 'gives the same values'},
    // 1
    {c_m : 'Divide the length by 100'},
    // 2
    {c_km: 'Divide the length by 100000'},
    // 3
    {m_c:'Multiply the length by 100'},
    // 4
    {m_km:'Divide the length by 1000'},
    // 5
    {km_m:'Multiply the length by 1000'},
    // 6
    {km_c:'Muliply the length by 100000'}
]



for (let i = 1; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[0].firstElementChild.insertAdjacentHTML('afterend',option)   
}

for (let i = 1; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[1].firstElementChild.insertAdjacentHTML('afterend',option)   
}



// function to convert units
function convertUnits() {
    if (
        (convertFrom.value === "centimeter") && (convertTo.value === "centimeter") || (convertFrom.value === "meter") && (convertTo.value === "meter") || (convertFrom.value === "kilometer") && (convertTo.value === "kilometer")
    ) {
        result.value = length.value;
        formula.innerHTML = hints[0].sameUnit;
    }
    else if((convertFrom.value === "centimeter") && (convertTo.value === "meter")){
        result.value = length.value/100;
        formula.innerHTML = hints[1].c_m;
    }
    else if((convertFrom.value === "centimeter") && (convertTo.value === "kilometer")){
        result.value = length.value/100000;
        formula.innerHTML = hints[2].c_km;
    }
    else if((convertFrom.value === "meter") && (convertTo.value === "centimeter")){
        result.value = length.value*100;
        formula.innerHTML = hints[3].m_c;
    }
    else if((convertFrom.value === "meter") && (convertTo.value === "kilometer")){
        result.value = length.value/1000;
        formula.innerHTML = hints[4].m_km;
    }
    else if((convertFrom.value === "kilometer") && (convertTo.value === "meter")){
        result.value = length.value*1000;
        formula.innerHTML = hints[5].km_m;
    }
    else{
        result.value = length.value*100000;
        formula.textContent = hints[6].km_c;
    }
}
// run function based on change and input event
convertFrom.addEventListener('change',convertUnits)
convertTo.addEventListener('change',convertUnits)
length.addEventListener('change',convertUnits)
