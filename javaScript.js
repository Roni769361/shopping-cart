document.getElementById("caseplusBtn").addEventListener("click", function(){
    const caseInputSet = document.getElementById("CaseInputText");
    const caseInputSetNum = parseFloat(caseInputSet.value);
    const caseInto = caseInputSetNum +1;
    caseInputSet.value = caseInto;

    priceTakaInto("Price", caseInto);

})


document.getElementById("caseMinusBtn").addEventListener("click", function(){
    const caseInputSet = document.getElementById("CaseInputText");
    const caseInputSetNum = parseFloat(caseInputSet.value);
    const caseInto = caseInputSetNum -1;
    caseInputSet.value = caseInto;

    priceTakaInto("Price", caseInto);
    

})

document.getElementById("plusBtnSecond").addEventListener("click", function(){
    const caseInputSet = document.getElementById("CaseInputTextSecond");
    const caseInputSetNum = parseFloat(caseInputSet.value);
    const caseInto = caseInputSetNum +1;
    caseInputSet.value = caseInto;

    
    priceTakaIntoSecond("PriceSecond", caseInto);


})

document.getElementById("minusBtnSecond").addEventListener("click", function(){
    const caseInputSet = document.getElementById("CaseInputTextSecond");
    const caseInputSetNum = parseFloat(caseInputSet.value);
    const caseInto = caseInputSetNum -1;
    caseInputSet.value = caseInto;
    
    priceTakaIntoSecond("PriceSecond", caseInto);


})

function priceTakaIntoSecond(id, caseIntosecond){
    const priceTaka = document.getElementById(id);
    const priceTakaUp = caseIntosecond * 59;
    priceTaka.innerText = priceTakaUp;

}


function priceTakaInto(id, caseInto){
    const priceTaka = document.getElementById(id);
    const priceTakaUp = caseInto * 1219;
    priceTaka.innerText = priceTakaUp;

}


