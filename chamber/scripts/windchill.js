let temperature = 33; //celsius
let velocity = 2.5; //kmh

let fahr = tempConvert(temperature);
let mph = velConvert(velocity);
const windC = document.getElementById("windchill");
const speed = document.getElementById("speed");
speed.textContent = velocity;
function velConvert(kmh){ //mph
   const velMph = kmh * 0.62137119248733;
   return velMph;
}

function tempConvert(celsius){//fahr
    const fahr = celsius * 1.8 + 32;
    return fahr;
}

function windChill(temperature, velocity){
const wind_c = 35.74 + (0.6215 * temperature) - 35.75 * (velocity ** 0.16) + 0.4275 * temperature * (velocity ** 0.16);
return wind_c;
}
if (fahr >= 50 ){
    if (velocity <= 3) {
        windC.textContent = Math.round(windChill(fahr, mph), -1) 
    }
    else{
        windC.textContent = "N/A"
    }
}
else{
    windC.textContent = "N/A"
}