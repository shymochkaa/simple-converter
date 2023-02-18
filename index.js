
//створити функції для кожного переведення 
// Meters to Feet
// Liters to Gallons
 // Kilograms to Pounds


let myValue = 45

// document.getElementById("main-value").textContent = myValue


// document.getElementById("mtof").textContent = myValue + " meters = " + (myValue * 3.2808399).toFixed(3) + " feet | " + myValue + " feet = " + (myValue / 3.2808399).toFixed(3) + " meters"  

// document.getElementById("ltog").textContent = myValue + " liters = " + (myValue * 0.26417).toFixed(3) + " gallons | " + myValue + " gallons = " + (myValue / 0.26417).toFixed(3) + " liters" 


// document.getElementById("ktop").textContent = myValue + " kilos = " + (myValue * 2.20462262).toFixed(3) + " pounds | " + myValue + " pounds = " + (myValue / 2.20462262).toFixed(3) + " kilos"  

function convertNumber(){
    let input = document.getElementById("myvalue").value
    document.getElementById("mtof").textContent = input + " meters = " + (input * 3.2808399).toFixed(3) + " feet | " + input + " feet = " + (input / 3.2808399).toFixed(3) + " meters"
    document.getElementById("ltog").textContent = input + " liters = " + (input * 0.26417).toFixed(3) + " gallons | " + input + " gallons = " + (input / 0.26417).toFixed(3) + " liters" 
    document.getElementById("ktop").textContent = input + " kilos = " + (input * 2.20462262).toFixed(3) + " pounds | " + input + " pounds = " + (input/ 2.20462262).toFixed(3) + " kilos" 
    console.log(input)
}