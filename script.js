// console.log("omkar shelke")

// Include api for currency exchange 
const api="https://api.exchangerate-api.com/v4/latest/USD";

// for selecting controls 
let search=document.querySelector(".searchBox");
let convert=document.querySelector(".convert");
let fromCurrency=document.querySelector(".from");
let toCurrency=document.querySelector(".to");
let finalValue=document.querySelector(".finalValue")
let finalAmount=document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// even when currency is changed 
fromCurrency.addEventListener('change', (event)=>{
    resultFrom=`${event.target.value}`;
});

// event when currency is changed 
toCurrency.addEventListener('change',(event)=>{
    resultTo=`${event.target.value}`;
});
search.addEventListener('input',updateValue);

// function for updating value 
function updateValue(e){
    searchValue=e.target.value;
}

// when user clicks it calls function getresults 
convert.addEventListener("click",getResults);

// function getreslt 
function getResults()
{
    fetch(`${api}`)
    .then(currency =>{
        return currency.json();
    }).then(displayResults);   
}

// display results after conversion 
function displayResults(currency){
    let fromRate=currency.rates[resultFrom];
    let toRate=currency.rates[resultTo];
    finalValue.innerHTML=
    ((toRate/fromRate)*searchValue).toFixed(2);
    finalAmount.style.display="block";
}

// when user clicks on reset button 
function clearVal(){
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML="";
};

