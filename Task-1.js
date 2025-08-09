function toFahrenheit(celcius){
    const res = celcius * (9/5) + 32;
    return console.log(celcius+' Degree Celsius = '+ res.toFixed(2)+' Fahrenheit');
}

function toCelsius(fahren){
    const res = (fahren - 32) / (9/5);
    return console.log(fahren+' Fahrenheit = '+ res.toFixed(3)+' celcius');
}

toFahrenheit(44);
toCelsius(20);