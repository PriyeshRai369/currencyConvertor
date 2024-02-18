let btn = document.querySelector("#btn")
let input = document.querySelector("#from")
let option = document.querySelector('#option')
let otherOption = document.querySelector("#otherOption")
let output= document.querySelector("#to")


let url ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
const res =fetch(url)
res.then((response)=> response.json())
.then((value)=>{
    for (const currency in value) {
        let select = document.createElement('option')
        let otherselect = document.createElement('option')
        if (currency === 'usd') {
            select.selected = true; 
        }
        option.appendChild(select).innerHTML=currency
        if (currency === 'inr') {
            otherselect.selected = true; 
        }
        otherOption.appendChild(otherselect).innerText = currency
    }
})


btn.addEventListener('click',async function(){
    
    let amount = input.value
    let currency = option.value
    let other = otherOption.value
    
    let url2 = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    try {
        const resp = await fetch(url2);
        const val = await resp.json();
        let curr = val[currency]
        let updatedAmount = curr[other] * amount
        output.value = updatedAmount

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
})